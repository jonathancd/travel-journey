# ✈️ Travel Journey

A personal landing page to showcase selected travel highlights — built with **React**, **TailwindCSS**, and powered by **Vite**. Inspired by the clean and modern aesthetic of [A'Studio](https://astudio.webflow.io), this project focuses on simplicity, storytelling, and visual immersion.

## 🚀 Features

- 🌍 Minimalist layout with full-screen travel sections
- 🎌 Multilingual support via `i18next` (EN/ES)
- 🗾 Interactive tab-based navigation for destination highlights
- 🎨 TailwindCSS styling with smooth animations
- 📦 Dockerized development environment

## 📦 Stack

- **React 18**
- **TailwindCSS**
- **Headless UI** (`@headlessui/react`)
- **i18next** for localization
- **Vite** as the build tool
- **Docker** for local development

## 🐳 Local Development with Docker

Make sure Docker is installed and running.

### 🔧 Start the app

````bash
docker-compose up --build




# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
````

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from "eslint-plugin-react-x";
import reactDom from "eslint-plugin-react-dom";

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    "react-x": reactX,
    "react-dom": reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs["recommended-typescript"].rules,
    ...reactDom.configs.recommended.rules,
  },
});
```
