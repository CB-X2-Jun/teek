# 个人主页模板

一个功能丰富的个人主页模板，支持多种主题、响应式设计和自定义配置。专为GitHub Pages设计，可以轻松部署和自定义。

## ✨ 特性

- 🎨 **多种主题** - 10种预设主题（默认、深色、蓝色、绿色、紫色、橙色、红色、粉色、青色、黄色）
- 📱 **响应式设计** - 完美适配桌面、平板和手机
- 🧭 **导航系统** - 固定导航栏，支持平滑滚动
- 🃏 **网站卡片** - 展示你的各种网站链接
- ⚙️ **易于配置** - 只需修改一个配置文件即可自定义所有内容
- 🎯 **SEO友好** - 优化的HTML结构和元数据
- 🚀 **快速加载** - 轻量级设计，快速加载
- 🌙 **深色模式** - 支持深色/浅色主题切换
- 📱 **移动端菜单** - 汉堡菜单，移动端友好
- 🎭 **动画效果** - 滚动动画和交互效果

## 📁 文件结构

```
personal-website/
├── index.html          # 主页面
├── css/
│   ├── style.css       # 主要样式
│   └── themes.css      # 主题样式
├── js/
│   ├── config.js       # 配置文件
│   └── main.js         # 主要脚本
└── README.md           # 说明文档
```

## 🚀 快速开始

### 1. 下载模板

```bash
git clone https://github.com/your-username/personal-website.git
cd personal-website
```

### 2. 自定义配置

编辑 `js/config.js` 文件，修改以下内容：

```javascript
const CONFIG = {
    // 基本信息
    name: "你的名字",
    title: "你的职位",
    description: "你的简介",
    avatar: "你的头像URL",
    
    // 关于我
    about: "你的详细介绍...",
    
    // 技能列表
    skills: ["技能1", "技能2", "技能3"],
    
    // 项目展示
    projects: [
        {
            title: "项目名称",
            description: "项目描述",
            technologies: ["技术1", "技术2"],
            demo: "演示链接",
            github: "GitHub链接"
        }
    ],
    
    // 网站链接
    websites: [
        {
            name: "网站名称",
            description: "网站描述",
            url: "网站链接",
            icon: "FontAwesome图标类名"
        }
    ],
    
    // 联系信息
    contact: {
        email: "你的邮箱",
        phone: "你的电话",
        location: "你的位置",
        website: "你的网站"
    },
    
    // 社交媒体
    social: [
        {
            name: "平台名称",
            url: "链接",
            icon: "FontAwesome图标类名"
        }
    ]
};
```

### 3. 本地预览

直接在浏览器中打开 `index.html` 文件即可预览效果。

### 4. 部署到GitHub Pages

1. 创建一个新的GitHub仓库
2. 上传所有文件到仓库
3. 进入仓库设置 → Pages
4. 选择Source为"Deploy from a branch"
5. 选择分支为"main"或"master"
6. 保存设置

几分钟后，你的个人主页就会在 `https://your-username.github.io/repository-name` 上线！

## 🎨 主题定制

### 预设主题

模板包含10种预设主题：

- `default` - 默认主题（蓝色）
- `dark` - 深色主题
- `blue` - 蓝色主题
- `green` - 绿色主题
- `purple` - 紫色主题
- `orange` - 橙色主题
- `red` - 红色主题
- `pink` - 粉色主题
- `cyan` - 青色主题
- `yellow` - 黄色主题

### 切换主题

- **点击主题按钮** - 在导航栏右侧点击月亮/太阳图标
- **双击主题按钮** - 显示主题选择器
- **键盘快捷键** - 按 `Ctrl/Cmd + T` 快速切换深色/浅色模式

### 自定义主题

要创建自定义主题，在 `css/themes.css` 中添加：

```css
[data-theme="custom"] {
    --primary-color: #你的主色;
    --secondary-color: #你的次色;
    --background-color: #你的背景色;
    --text-color: #你的文字色;
    --card-bg: #你的卡片背景色;
    --border-color: #你的边框色;
    --shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}
```

然后在 `js/config.js` 中设置 `defaultTheme: "custom"`。

## 📱 响应式设计

模板完全响应式，支持：

- **桌面端** - 1200px以上
- **平板端** - 768px-1199px
- **手机端** - 767px以下

### 移动端特性

- 汉堡菜单导航
- 触摸友好的按钮和链接
- 优化的字体大小和间距
- 适配小屏幕的布局

## 🔧 高级配置

### 页面设置

在 `js/config.js` 中可以调整页面行为：

```javascript
settings: {
    enableAnimations: true,      // 启用动画效果
    enableThemeSelector: true,   // 显示主题选择器
    enableSmoothScroll: true,    // 启用平滑滚动
    enableMobileMenu: true,      // 启用移动端菜单
    enableProjectImages: true,   // 显示项目图片
    enableWebsiteIcons: true     // 显示网站图标
}
```

### 添加新项目

在 `js/config.js` 的 `projects` 数组中添加：

```javascript
{
    title: "新项目名称",
    description: "项目描述",
    technologies: ["技术1", "技术2"],
    demo: "演示链接",
    github: "GitHub链接"
}
```

### 添加新网站

在 `js/config.js` 的 `websites` 数组中添加：

```javascript
{
    name: "网站名称",
    description: "网站描述",
    url: "网站链接",
    icon: "fas fa-icon-name"
}
```

### 添加新技能

在 `js/config.js` 的 `skills` 数组中添加技能名称。

### 添加社交媒体

在 `js/config.js` 的 `social` 数组中添加：

```javascript
{
    name: "平台名称",
    url: "链接",
    icon: "fab fa-platform-name"
}
```

### 添加新页面

1. 在 `index.html` 中添加新的section
2. 在导航菜单中添加链接
3. 在 `js/config.js` 的navigation数组中添加配置

### 自定义样式

- 修改 `css/style.css` 调整布局和组件样式
- 修改 `css/themes.css` 调整主题颜色
- 添加自定义CSS文件并在HTML中引入

## 🎯 常用FontAwesome图标

### 网站图标
- `fas fa-blog` - 博客
- `fas fa-palette` - 作品集
- `fas fa-book` - 文档
- `fas fa-tools` - 工具
- `fas fa-sticky-note` - 笔记
- `fas fa-graduation-cap` - 课程

### 社交媒体图标
- `fab fa-github` - GitHub
- `fab fa-linkedin` - LinkedIn
- `fab fa-twitter` - Twitter
- `fab fa-weibo` - 微博
- `fab fa-zhihu` - 知乎
- `fab fa-bilibili` - B站
- `fab fa-weixin` - 微信
- `fab fa-qq` - QQ

## 📝 注意事项

1. **头像图片** - 建议使用正方形图片，大小150x150像素
2. **网站链接** - 确保所有链接都是有效的
3. **图标名称** - 使用正确的FontAwesome图标类名
4. **主题保存** - 用户选择的主题会自动保存到本地存储

## 🆘 常见问题

### Q: 如何修改颜色主题？
A: 在 `js/config.js` 中修改 `defaultTheme` 值，或使用主题切换功能。

### Q: 如何添加新的页面？
A: 在 `index.html` 中添加新的section，并在导航菜单中添加链接。

### Q: 如何自定义样式？
A: 修改 `css/style.css` 文件中的样式规则。

### Q: 如何部署到其他平台？
A: 这是一个纯静态网站，可以部署到任何支持静态文件的平台。

## 🎯 SEO优化

模板已针对搜索引擎优化：

- 语义化HTML结构
- 适当的标题层级
- Meta标签配置
- 图片alt属性
- 结构化数据支持

## 📊 性能优化

- 压缩的CSS和JavaScript
- 优化的图片加载
- 延迟加载非关键资源
- 最小化HTTP请求

## 🤝 贡献

欢迎提交Issue和Pull Request！

### 开发环境

1. Fork项目
2. 创建功能分支
3. 提交更改
4. 推送到分支
5. 创建Pull Request

## 📄 许可证

MIT License - 详见 [LICENSE](LICENSE) 文件

## 🙏 致谢

- [Font Awesome](https://fontawesome.com/) - 图标库
- [Google Fonts](https://fonts.google.com/) - 字体
- [GitHub Pages](https://pages.github.com/) - 托管服务

## 📞 支持

如果你遇到问题或有建议，请：

1. 查看 [Issues](https://github.com/your-username/personal-website/issues)
2. 创建新的Issue
3. 发送邮件到你的邮箱

---

⭐ 如果这个模板对你有帮助，请给个Star！
