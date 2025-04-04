// Function to handle tab visibility and focus
function handleTabVisibility(hide = true, shouldFocus = false) {
  const styleId = "twitter-tab-customizer-style";
  let styleEl = document.getElementById(styleId);

  if (hide) {
    if (!styleEl) {
      styleEl = document.createElement("style");
      styleEl.id = styleId;
      document.head.appendChild(styleEl);
    }
    styleEl.textContent = `
      /* Hide For You tab */
      div[role="presentation"]:first-of-type a[role="tab"] {
        display: none !important;
      }
      /* Ensure Following tab is visible */
      div[role="presentation"]:not(:first-of-type) a[role="tab"] {
        display: flex !important;
      }
    `;

    // Only focus if explicitly requested (initial load or toggle)
    if (shouldFocus) {
      setTimeout(() => {
        const followingTab = document.querySelector(
          'div[role="presentation"]:not(:first-of-type) a[role="tab"]'
        );
        if (followingTab) {
          followingTab.click();
        }
      }, 500);
    }
  } else {
    if (styleEl) {
      styleEl.remove();
    }
  }
}

// Load saved state and apply initially with focus
chrome.storage.sync.get(["hideForYou"], (result) => {
  handleTabVisibility(result.hideForYou !== false, true);
});

// Listen for messages from popup
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "toggleForYou") {
    handleTabVisibility(message.hide, true);
  }
});

// Handle dynamic content loading - only apply hiding, no focus
const observer = new MutationObserver((mutations) => {
  chrome.storage.sync.get(["hideForYou"], (result) => {
    if (result.hideForYou !== false) {
      handleTabVisibility(true, false);
    }
  });
});

// Start observing when the page loads
window.addEventListener("load", () => {
  observer.observe(document.body, {
    childList: true,
    subtree: true,
  });
});
