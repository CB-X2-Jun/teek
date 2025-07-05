// 个人主页配置文件
// 修改下面的内容来自定义你的个人主页

const CONFIG = {
    // 基本信息
    name: "Shine",
    title: "全栈开发工程师",
    description: "热爱编程，专注于Web开发和人工智能技术。擅长前端、后端开发和系统架构设计。",
    avatar: "https://tc.z.wiki/autoupload/YWOgi7YZfm09uQYpPHO3Bn2CGrBAcpoqgZ2QrHjpPCCyl5f0KlZfm6UsKj-HyTuv/20250628/65K4/350X350/image.png", // 替换为你的头像URL
    
    // 关于我
    about: "我是一名充满激情的开发者，拥有5年的Web开发经验。我热爱学习新技术，喜欢解决复杂的技术问题。在工作中，我注重代码质量和用户体验，致力于创建优秀的软件产品。",
    
    // 技能列表
    skills: [
        "JavaScript", "TypeScript", "React", "Vue.js", "Node.js", 
        "Python", "Java", "MySQL", "MongoDB", "Docker", 
        "Git", "AWS", "Linux", "Docker", "Kubernetes"
    ],
    
    // 项目展示
    projects: [
        {
            title: "电商平台",
            description: "基于React和Node.js开发的现代化电商平台，支持商品管理、订单处理、支付集成等功能。",
            technologies: ["React", "Node.js", "MongoDB", "Stripe"],
            demo: "https://demo.example.com",
            github: "https://github.com/username/ecommerce",
            image: "https://via.placeholder.com/300x200"
        },
        {
            title: "任务管理系统",
            description: "一个简洁高效的任务管理应用，帮助团队更好地协作和追踪项目进度。",
            technologies: ["Vue.js", "Express", "PostgreSQL", "Socket.io"],
            demo: "https://task-app.example.com",
            github: "https://github.com/username/task-manager",
            image: "https://via.placeholder.com/300x200"
        },
        {
            title: "AI聊天机器人",
            description: "基于机器学习的智能聊天机器人，支持自然语言处理和情感分析。",
            technologies: ["Python", "TensorFlow", "Flask", "Redis"],
            demo: "https://chatbot.example.com",
            github: "https://github.com/username/ai-chatbot",
            image: "https://via.placeholder.com/300x200"
        },
        {
            title: "个人博客系统",
            description: "现代化的博客系统，支持Markdown编辑、评论系统、SEO优化等功能。",
            technologies: ["Next.js", "Prisma", "PostgreSQL", "Vercel"],
            demo: "https://blog.example.com",
            github: "https://github.com/username/blog-system",
            image: "https://via.placeholder.com/300x200"
        }
    ],
    
    // 网站链接
    websites: [
        {
            name: "个人博客",
            description: "技术分享和心得体会",
            url: "https://blog.example.com",
            icon: "fas fa-blog"
        },
        {
            name: "作品集",
            description: "展示我的设计作品",
            url: "https://portfolio.example.com",
            icon: "fas fa-palette"
        },
        {
            name: "技术文档",
            description: "项目文档和API说明",
            url: "https://docs.example.com",
            icon: "fas fa-book"
        },
        {
            name: "在线工具",
            description: "实用的开发工具集合",
            url: "https://tools.example.com",
            icon: "fas fa-tools"
        },
        {
            name: "学习笔记",
            description: "技术学习笔记和总结",
            url: "https://notes.example.com",
            icon: "fas fa-sticky-note"
        },
        {
            name: "开源项目",
            description: "我的开源项目集合",
            url: "https://github.com/username",
            icon: "fab fa-github"
        }
    ],
    
    // 联系信息
    contact: {
        email: "example@email.com",
        phone: "+86 138 0000 0000",
        location: "北京，中国",
        website: "https://example.com"
    },
    
    // 社交媒体链接
    social: [
        {
            name: "GitHub",
            url: "https://github.com/username",
            icon: "fab fa-github"
        },
        {
            name: "LinkedIn",
            url: "https://linkedin.com/in/username",
            icon: "fab fa-linkedin"
        },
        {
            name: "Twitter",
            url: "https://twitter.com/username",
            icon: "fab fa-twitter"
        },
        {
            name: "微博",
            url: "https://weibo.com/username",
            icon: "fab fa-weibo"
        },
        {
            name: "知乎",
            url: "https://zhihu.com/people/username",
            icon: "fab fa-zhihu"
        },
        {
            name: "B站",
            url: "https://space.bilibili.com/username",
            icon: "fab fa-bilibili"
        },
        {
            name: "微信",
            url: "weixin://",
            icon: "fab fa-weixin"
        },
        {
            name: "QQ",
            url: "tencent://",
            icon: "fab fa-qq"
        }
    ],
    
    // 主题设置
    defaultTheme: "default", // 默认主题: default, dark, blue, green, purple, orange, red, pink, cyan, yellow
    
    // 导航菜单
    navigation: [
        { name: "首页", href: "#home" },
        { name: "关于", href: "#about" },
        { name: "项目", href: "#projects" },
        { name: "网站", href: "#websites" },
        { name: "联系", href: "#contact" }
    ],
    
    // 页面设置
    settings: {
        enableAnimations: true, // 是否启用动画效果
        enableThemeSelector: true, // 是否显示主题选择器
        enableSmoothScroll: true, // 是否启用平滑滚动
        enableMobileMenu: true, // 是否启用移动端菜单
        enableProjectImages: true, // 是否显示项目图片
        enableWebsiteIcons: true // 是否显示网站图标
    }
};

// 导出配置
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CONFIG;
} 