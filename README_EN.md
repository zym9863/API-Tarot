# API Tarot Divination

[中文](README.md) | English

A modern tarot divination application built with React, TypeScript, and Vite, connecting to large language models through OpenRouter API to provide users with a mystical tarot reading experience.

## Features

- 🔮 Tarot card reading interpretation through AI large models
- ✨ Beautiful mystical theme UI design with dynamic stars and mystical symbols
- 🌐 Support for multiple AI models (Gemini, Gemma, etc.)
- 🔒 Secure API key management
- 📱 Responsive design for various devices

## Tech Stack

- **Frontend Framework**: React 19
- **Development Language**: TypeScript
- **Build Tool**: Vite
- **UI Component Library**: Ant Design
- **HTTP Client**: Axios
- **API Service**: OpenRouter AI API

## Quick Start

### Install Dependencies

```bash
npm install
```

### Run in Development Mode

```bash
npm run dev
```

### Build Production Version

```bash
npm run build
```

### Preview Production Version

```bash
npm run preview
```

## How to Use

1. Get OpenRouter API Key (Visit [OpenRouter](https://openrouter.ai) to register and obtain)
2. Enter your API Key in the application
3. Input your divination question
4. Click the "Start Mystical Reading" button
5. Wait for AI to generate your tarot reading results

## Original Vite Template Information

This project was created using Vite's React+TypeScript template.

### Official Plugins

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

### ESLint Configuration Extension

If you are developing a production application, we recommend updating the configuration to enable type-aware linting rules:

- Configure the top-level `parserOptions` property:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` with `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the configuration