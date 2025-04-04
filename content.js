// Function to handle tab visibility and focus
function handleTabVisibility(hide = true) {
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

    // Focus on Following tab
    setTimeout(() => {
      const followingTab = document.querySelector(
        'div[role="presentation"]:not(:first-of-type) a[role="tab"]'
      );
      if (followingTab) {
        followingTab.click();
      }
    }, 500);
  } else {
    if (styleEl) {
      styleEl.remove();
    }
  }
}

// Load saved state and apply initially
chrome.storage.sync.get(["hideForYou"], (result) => {
  handleTabVisibility(result.hideForYou !== false);
});

// Listen for messages from popup
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "toggleForYou") {
    handleTabVisibility(message.hide);
  }
});

// Handle dynamic content loading
const observer = new MutationObserver((mutations) => {
  chrome.storage.sync.get(["hideForYou"], (result) => {
    if (result.hideForYou !== false) {
      handleTabVisibility(true);
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
