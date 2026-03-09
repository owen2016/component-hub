# ComponentHub

ComponentHub 是一个开源组件发布平台，为开发者提供集中管理和发现各种编程语言组件的平台。

## 功能特性

- **组件浏览**：按语言分类浏览热门组件
- **搜索功能**：支持按组件名称、关键词或作者搜索
- **组件详情**：查看组件的详细信息、安装指南和使用说明
- **响应式设计**：适配不同屏幕尺寸

## 技术栈

- React 18 + Vite
- React Router v6
- Remix Icon
- CSS3 (响应式设计)

## 快速开始

### 安装依赖

```bash
npm install
```

### 开发模式

```bash
npm run dev
```

### 构建生产版本

```bash
npm run build
```

## 项目结构

```
component-hub/
├── src/
│   ├── components/          # 组件目录
│   │   ├── Navbar.jsx       # 顶部导航栏
│   │   ├── LanguageNav.jsx  # 语言分类导航
│   │   ├── ComponentCard.jsx # 组件卡片
│   │   ├── ComponentGrid.jsx # 组件网格
│   │   ├── Breadcrumb.jsx   # 面包屑导航
│   │   └── ComponentDetail.jsx # 组件详情
│   ├── App.jsx              # 应用主组件
│   ├── App.css              # 全局样式
│   └── main.jsx             # 应用入口
├── package.json             # 项目配置
└── vite.config.js           # Vite配置
```

## 许可证

MIT
