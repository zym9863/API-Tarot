# API 塔罗占卜

中文 | [English](README_EN.md)

一个基于React、TypeScript和Vite构建的现代化塔罗牌占卜应用，通过OpenRouter API连接大型语言模型，为用户提供神秘的塔罗牌占卜体验。

## 功能特点

- 🔮 通过AI大模型进行塔罗牌占卜解读
- ✨ 精美的神秘主题UI设计，包含动态星星和神秘符号
- 🌐 支持多种AI模型（Gemini、Gemma等）
- 🔒 安全的API密钥管理
- 📱 响应式设计，适配各种设备

## 技术栈

- **前端框架**: React 19
- **开发语言**: TypeScript
- **构建工具**: Vite
- **UI组件库**: Ant Design
- **HTTP客户端**: Axios
- **API服务**: OpenRouter AI API

## 快速开始

### 安装依赖

```bash
npm install
```

### 开发模式运行

```bash
npm run dev
```

### 构建生产版本

```bash
npm run build
```

### 预览生产版本

```bash
npm run preview
```

## 使用方法

1. 获取OpenRouter API Key（访问 [OpenRouter](https://openrouter.ai) 注册获取）
2. 在应用中输入您的API Key
3. 输入您想要占卜的问题
4. 点击"开始神秘占卜"按钮
5. 等待AI生成您的塔罗牌占卜结果

## 原始Vite模板信息

此项目基于Vite的React+TypeScript模板创建。

### 官方插件

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) 使用[Babel](https://babeljs.io/)实现Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) 使用[SWC](https://swc.rs/)实现Fast Refresh

### ESLint配置扩展

如果您正在开发生产应用，我们建议更新配置以启用类型感知的lint规则：

- 配置顶级`parserOptions`属性：

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

- 将`tseslint.configs.recommended`替换为`tseslint.configs.recommendedTypeChecked`或`tseslint.configs.strictTypeChecked`
- 可选添加`...tseslint.configs.stylisticTypeChecked`
- 安装[eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react)并更新配置
