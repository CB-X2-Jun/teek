// 演示配置文件 - 展示模板的各种功能
// 这是一个完整的配置示例，你可以参考这个来配置你的个人主页

const CONFIG = {
    // 基本信息
    name: "李小明",
    title: "全栈开发工程师 & UI/UX设计师",
    description: "热爱创造，专注于用户体验和代码质量。5年+开发经验，擅长前端、后端开发和产品设计。",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    
    // 关于我
    about: "我是一名充满激情的全栈开发者，专注于创建优秀的用户体验和高质量的代码。我热爱学习新技术，喜欢解决复杂的技术问题。在工作中，我注重代码质量和用户体验，致力于创建优秀的软件产品。我擅长前端开发（React、Vue.js）、后端开发（Node.js、Python）、数据库设计、系统架构等。同时我也是一名UI/UX设计师，能够从用户角度思考产品设计。",
    
    // 技能列表
    skills: [
        "JavaScript", "TypeScript", "React", "Vue.js", "Next.js", 
        "Node.js", "Express", "Python", "Django", "Flask",
        "MySQL", "MongoDB", "PostgreSQL", "Redis", "Docker"
    ],
    
    // 项目展示
    projects: [
        {
            title: "智能电商平台",
            description: "基于React和Node.js开发的现代化电商平台，集成AI推荐系统、智能客服、数据分析等功能。",
            technologies: ["React", "Node.js", "MongoDB", "Redis", "TensorFlow"],
            demo: "https://demo-ecommerce.example.com",
            github: "https://github.com/username/smart-ecommerce"
        },
        {
            title: "团队协作平台",
            description: "一个功能完整的团队协作应用，包含项目管理、实时聊天、文件共享、视频会议等功能。",
            technologies: ["Vue.js", "Express", "PostgreSQL", "Socket.io"],
            demo: "https://team-collab.example.com",
            github: "https://github.com/username/team-collaboration"
        },
        {
            title: "AI内容生成器",
            description: "基于深度学习的智能内容生成平台，支持文章写作、图片生成、视频剪辑等功能。集成多种AI模型，提供API接口。",
            technologies: ["Python", "TensorFlow", "Flask", "Redis", "OpenAI API", "Docker"],
            demo: "https://ai-content.example.com",
            github: "https://github.com/username/ai-content-generator",
            image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=300&h=200&fit=crop"
        },
        {
            title: "个人博客系统",
            description: "现代化的博客系统，支持Markdown编辑、评论系统、SEO优化、多主题切换等功能。集成CDN加速和缓存优化。",
            technologies: ["Next.js", "Prisma", "PostgreSQL", "Vercel", "Cloudflare"],
            demo: "https://blog.example.com",
            github: "https://github.com/username/modern-blog",
            image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=300&h=200&fit=crop"
        },
        {
            title: "移动端健康应用",
            description: "React Native开发的健康管理应用，支持运动追踪、饮食记录、睡眠分析、健康报告等功能。集成Apple Health和Google Fit。",
            technologies: ["React Native", "Node.js", "MongoDB", "Firebase", "HealthKit"],
            demo: "https://health-app.example.com",
            github: "https://github.com/username/health-tracker",
            image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=200&fit=crop"
        },
        {
            title: "数据可视化平台",
            description: "基于D3.js和Vue.js的数据可视化平台，支持多种图表类型、实时数据更新、交互式分析等功能。",
            technologies: ["Vue.js", "D3.js", "Express", "PostgreSQL", "WebSocket"],
            demo: "https://data-viz.example.com",
            github: "https://github.com/username/data-visualization",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=300&h=200&fit=crop"
        }
    ],
    
    // 网站链接
    websites: [
        {
            name: "技术博客",
            description: "分享技术心得和开发经验",
            url: "https://blog.example.com",
            icon: "fas fa-blog"
        },
        {
            name: "设计作品集",
            description: "展示UI/UX设计作品",
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
            name: "在线工具集",
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
        },
        {
            name: "技术分享",
            description: "技术分享和演讲",
            url: "https://talks.example.com",
            icon: "fas fa-presentation"
        },
        {
            name: "在线课程",
            description: "我制作的在线课程",
            url: "https://courses.example.com",
            icon: "fas fa-graduation-cap"
        }
    ],
    
    // 联系信息
    contact: {
        email: "liming@example.com",
        phone: "+86 138 8888 8888",
        location: "北京，中国",
        website: "https://liming.example.com"
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
        },
        {
            name: "Instagram",
            url: "https://instagram.com/username",
            icon: "fab fa-instagram"
        },
        {
            name: "YouTube",
            url: "https://youtube.com/@username",
            icon: "fab fa-youtube"
        }
    ],
    
    // 主题设置
    defaultTheme: "blue", // 默认使用蓝色主题
    
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
        enableAnimations: true, // 启用动画效果
        enableThemeSelector: true, // 显示主题选择器
        enableSmoothScroll: true, // 启用平滑滚动
        enableMobileMenu: true, // 启用移动端菜单
        enableProjectImages: true, // 显示项目图片
        enableWebsiteIcons: true // 显示网站图标
    }
};

// 导出配置
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CONFIG;
}