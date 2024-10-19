# LocalGen-UI

![Build Status](https://img.shields.io/github/actions/workflow/status/aliciusschroeder/localgen-ui/vite-build.yml?style=plastic)
![License](https://img.shields.io/github/license/aliciusschroeder/localgen-ui?style=plastic)

A user-friendly, browser-based interface for generating images using OpenAI's DALL·E API — no server setup required! Everyting is build into one single html file. Perfect for both developers and creatives, it offers an intuitive way to bring your ideas to life.

## 📋 Table of Contents

- [Features](#-features)
- [Demo](#-demo)
- [Quick Start](#-quick-start)
- [Installation](#-installation)
- [Usage](#-usage)
- [Security](#-security)
- [Roadmap](#-roadmap)
- [Contributing](#-contributing)
- [License](#-license)
- [Acknowledgments](#-acknowledgments)

## ✨ Features

- 🖼️ Generate images using DALL-E AI directly in your browser
- 🚀 Standalone application - runs entirely in your browser, no server needed
- 💾 Local storage of generated images using IndexedDB for offline access
- 🔒 Secure handling of API keys - stored locally, never sent to any server except OpenAI
- 🛠️ Debug mode for testing without consuming API credits
- 📥 Easy download option for your favorite creations
- 🎨 Intuitive user interface adapting to your screen size

## 📷 Demo

Check out the live demo hosted on Cloudflare Pages: [👉 Live Demo](https://localgen-ui.pages.dev/)

![LocalGen-UI Screenshot](https://raw.githubusercontent.com/aliciusschroeder/localgen-ui/main/doc/screenshot_986x621.jpg)

## 🚀 Quick Start

1. Visit the [Cloudflare Page](https://localgen-ui.pages.dev/) to use LocalGen-UI immediately.
2. Or download the `index.html` file from the latest [build action](https://github.com/aliciusschroeder/localgen-ui/actions/workflows/vite-build.yml) and open it in your browser.

## 🛠️ Installation

If you want to build the project locally:

```bash
git clone https://github.com/aliciusschroeder/localgen-ui.git
cd localgen-ui
npm install
npm run build
```

After building, you'll find a single HTML file in the `dist` directory.

## 🎮 Usage

1. Open LocalGen-UI in your browser.
2. Enter your OpenAI API key in the settings.
3. Choose your image generation options.
4. Click "Generate" and watch your ideas come to life!

💡 Tip: Use the API key "sk-debug" for testing without making actual API calls.

## 🔐 Security

Your API key is stored locally in your browser and is only sent to OpenAI's servers for image generation requests. Users are responsible for the safe handling of their keys. For maximum security, you may want to review the [source code](https://github.com/aliciusschroeder/localgen-ui/tree/main/src) and build the project yourself.

## 🗺️ Roadmap

I already have some ideas in mind (i.e. Internationalization support) but I'm not set on a fixed plan yet and instead improve the project based on actual real-world feedback.

So your input shapes the future of LocalGen-UI. Share your ideas in the [Issues](https://github.com/aliciusschroeder/localgen-ui/issues) section!

## 💬 Contributing

I'd love your input! Check out the [Contributing Guide](https://github.com/aliciusschroeder/localgen-ui/blob/main/CONTRIBUTING.md) for ways to get started. Please adhere to the [Code of Conduct](https://github.com/aliciusschroeder/localgen-ui/blob/main/CODE_OF_CONDUCT.md).

## 📝 License

This project is licensed under the MIT License. See the [LICENSE](https://github.com/aliciusschroeder/localgen-ui/blob/main/LICENSE) file for details.

## 🙏 Acknowledgments

- Inspired by [Powerdalle](https://github.com/JPhilipp/powerdalle/)
- Built with ❤️ using:
  - [Preact](https://preactjs.com/)
  - [Vite](https://vitejs.dev/)
  - [TypeScript](https://www.typescriptlang.org/)
  - [Tailwind CSS](https://tailwindcss.com/)

---

Feel free to ⭐️ this repository if you find it useful!

![LocalGen-UI Logo](https://raw.githubusercontent.com/aliciusschroeder/localgen-ui/main/doc/logo_darkmode_1500x1200.png)