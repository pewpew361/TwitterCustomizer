# Twitter Tab Customizer

A sleek Chrome extension that enhances your Twitter/X.com experience by letting you customize the tab interface. Hide the "For you" tab and automatically focus on the "Following" feed.

## ✨ Features

- 🎯 Toggle "For you" tab visibility with a modern switch
- 🔄 Auto-focus on "Following" tab when "For you" is hidden
- 🌓 Dark mode support that follows your system preferences
- 💾 Remembers your preferences across sessions
- 🧹 Clean uninstall - removes all changes when disabled

## 🚀 Installation

1. Clone this repository:

   ```bash
   git clone https://github.com/pewpew361/TwitterCustomizer.git
   ```

2. Open Chrome and navigate to `chrome://extensions/`

3. Enable "Developer mode" in the top right corner

4. Click "Load unpacked" and select the extension directory

5. The extension icon will appear in your Chrome toolbar

## 🎮 Usage

1. Click the extension icon in your Chrome toolbar
2. Use the toggle switch to show/hide the "For you" tab
3. Changes take effect immediately
4. Your preferences are saved automatically

## 🛠️ Technical Details

The extension is built with:

- Manifest V3
- Modern JavaScript
- CSS-in-JS for styling
- MutationObserver for dynamic content handling

Files:

- `manifest.json` - Extension configuration
- `popup.html` & `popup.js` - Modern toggle interface
- `content.js` - Twitter/X.com page modifications
- `icon48.svg` & `icon128.svg` - Clean, minimal SVG icons

## 🤝 Contributing

Feel free to:

- Open issues for bugs or suggestions
- Submit pull requests for improvements
- Share feedback for better features

## 📝 License

MIT License - feel free to use and modify as you like!

## 🔒 Privacy

This extension:

- Only runs on Twitter/X.com domains
- Doesn't collect any user data
- Stores preferences locally in your browser
- Doesn't make any external network requests
