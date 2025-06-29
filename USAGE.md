# 使用说明

## 🚀 快速开始

### 1. 下载模板
```bash
git clone https://github.com/your-username/personal-website.git
cd personal-website
```

### 2. 修改配置
编辑 `js/config.js` 文件，替换示例内容为你的个人信息：

```javascript
const CONFIG = {
    // 修改这些基本信息
    name: "你的名字",
    title: "你的职位",
    description: "你的简介",
    avatar: "你的头像URL",
    
    // 修改关于我
    about: "你的详细介绍...",
    
    // 修改技能列表
    skills: ["你的技能1", "你的技能2"],
    
    // 修改项目信息
    projects: [
        {
            title: "你的项目名称",
            description: "项目描述",
            technologies: ["技术1", "技术2"],
            demo: "演示链接",
            github: "GitHub链接"
        }
    ],
    
    // 修改网站链接
    websites: [
        {
            name: "网站名称",
            description: "网站描述",
            url: "网站链接",
            icon: "FontAwesome图标类名"
        }
    ],
    
    // 修改联系信息
    contact: {
        email: "你的邮箱",
        phone: "你的电话",
        location: "你的位置",
        website: "你的网站"
    },
    
    // 修改社交媒体
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
1. 创建GitHub仓库
2. 上传所有文件
3. 进入仓库设置 → Pages
4. 选择分支并保存
5. 等待几分钟即可访问

## 🎨 主题切换

### 预设主题
- `default` - 默认蓝色主题
- `dark` - 深色主题
- `blue` - 蓝色主题
- `green` - 绿色主题
- `purple` - 紫色主题
- `orange` - 橙色主题
- `red` - 红色主题
- `pink` - 粉色主题
- `cyan` - 青色主题
- `yellow` - 黄色主题

### 切换方式
1. **点击主题按钮** - 导航栏右侧的月亮/太阳图标
2. **双击主题按钮** - 显示主题选择器
3. **键盘快捷键** - `Ctrl/Cmd + T`

## 📱 响应式设计

模板自动适配不同设备：
- **桌面端** - 1200px以上
- **平板端** - 768px-1199px
- **手机端** - 767px以下

## 🔧 自定义功能

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

## 📞 获取帮助

如果遇到问题，请：
1. 查看README.md文件
2. 检查浏览器控制台是否有错误
3. 确保所有文件路径正确
4. 提交Issue获取帮助 