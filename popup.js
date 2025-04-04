document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("hideForYouToggle");

  // Load saved state
  chrome.storage.sync.get(["hideForYou"], (result) => {
    toggle.checked = result.hideForYou !== false; // Default to true
  });

  // Handle toggle changes
  toggle.addEventListener("change", () => {
    const isHidden = toggle.checked;

    // Save state
    chrome.storage.sync.set({ hideForYou: isHidden });

    // Send message to content script
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.tabs.sendMessage(tabs[0].id, {
        action: "toggleForYou",
        hide: isHidden,
      });
    });
  });
});
