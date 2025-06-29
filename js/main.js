// 主要JavaScript文件
class PersonalWebsite {
    constructor() {
        this.config = CONFIG;
        this.currentTheme = localStorage.getItem('theme') || this.config.defaultTheme;
        this.init();
    }

    init() {
        this.loadContent();
        this.setupTheme();
        this.setupNavigation();
        this.setupMobileMenu();
        this.setupSmoothScroll();
        this.setupAnimations();
        this.updateYear();
    }

    // 加载内容
    loadContent() {
        this.loadHeroSection();
        this.loadAboutSection();
        this.loadProjectsSection();
        this.loadWebsitesSection();
        this.loadContactSection();
    }

    // 加载首页英雄区域
    loadHeroSection() {
        document.getElementById('nav-name').textContent = this.config.name;
        document.getElementById('hero-name').textContent = this.config.name;
        document.getElementById('hero-title').textContent = this.config.title;
        document.getElementById('hero-description').textContent = this.config.description;
        document.getElementById('avatar-img').src = this.config.avatar;
        document.getElementById('footer-name').textContent = this.config.name;
    }

    // 加载关于部分
    loadAboutSection() {
        document.getElementById('about-description').textContent = this.config.about;
        this.renderSkills();
    }

    // 渲染技能标签
    renderSkills() {
        const skillsContainer = document.getElementById('skills-list');
        skillsContainer.innerHTML = '';
        
        this.config.skills.forEach(skill => {
            const skillTag = document.createElement('span');
            skillTag.className = 'skill-tag';
            skillTag.textContent = skill;
            skillsContainer.appendChild(skillTag);
        });
    }

    // 加载项目部分
    loadProjectsSection() {
        const projectsContainer = document.getElementById('projects-grid');
        projectsContainer.innerHTML = '';
        
        this.config.projects.forEach(project => {
            const projectCard = this.createProjectCard(project);
            projectsContainer.appendChild(projectCard);
        });
    }

    // 创建项目卡片
    createProjectCard(project) {
        const card = document.createElement('div');
        card.className = 'project-card';
        
        card.innerHTML = `
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <div class="project-links">
                ${project.demo ? `<a href="${project.demo}" target="_blank">演示</a>` : ''}
                ${project.github ? `<a href="${project.github}" target="_blank">源码</a>` : ''}
            </div>
        `;
        
        return card;
    }

    // 加载网站部分
    loadWebsitesSection() {
        const websitesContainer = document.getElementById('websites-grid');
        websitesContainer.innerHTML = '';
        
        this.config.websites.forEach(website => {
            const websiteCard = this.createWebsiteCard(website);
            websitesContainer.appendChild(websiteCard);
        });
    }

    // 创建网站卡片
    createWebsiteCard(website) {
        const card = document.createElement('a');
        card.className = 'website-card';
        card.href = website.url;
        card.target = '_blank';
        
        card.innerHTML = `
            <i class="${website.icon}"></i>
            <h3>${website.name}</h3>
            <p>${website.description}</p>
        `;
        
        return card;
    }

    // 加载联系部分
    loadContactSection() {
        this.renderContactDetails();
        this.renderSocialLinks();
    }

    // 渲染联系信息
    renderContactDetails() {
        const contactContainer = document.getElementById('contact-details');
        contactContainer.innerHTML = '';
        
        const contactItems = [
            { icon: 'fas fa-envelope', text: this.config.contact.email },
            { icon: 'fas fa-phone', text: this.config.contact.phone },
            { icon: 'fas fa-map-marker-alt', text: this.config.contact.location },
            { icon: 'fas fa-globe', text: this.config.contact.website }
        ];
        
        contactItems.forEach(item => {
            const contactItem = document.createElement('div');
            contactItem.className = 'contact-item';
            contactItem.innerHTML = `
                <i class="${item.icon}"></i>
                <span>${item.text}</span>
            `;
            contactContainer.appendChild(contactItem);
        });
    }

    // 渲染社交链接
    renderSocialLinks() {
        const socialContainer = document.getElementById('social-links');
        socialContainer.innerHTML = '';
        
        this.config.social.forEach(social => {
            const socialLink = document.createElement('a');
            socialLink.className = 'social-link';
            socialLink.href = social.url;
            socialLink.target = '_blank';
            
            socialLink.innerHTML = `
                <i class="${social.icon}"></i>
                <span>${social.name}</span>
            `;
            
            socialContainer.appendChild(socialLink);
        });
    }

    // 设置主题
    setupTheme() {
        // 应用保存的主题
        this.applyTheme(this.currentTheme);
        
        // 主题切换按钮
        const themeToggle = document.getElementById('theme-toggle');
        themeToggle.addEventListener('click', () => {
            this.toggleTheme();
        });
        
        // 主题选择器
        this.setupThemeSelector();
    }

    // 应用主题
    applyTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        this.currentTheme = theme;
        localStorage.setItem('theme', theme);
        
        // 更新主题按钮图标
        const themeToggle = document.getElementById('theme-toggle');
        const icon = themeToggle.querySelector('i');
        
        if (theme === 'dark') {
            icon.className = 'fas fa-sun';
        } else {
            icon.className = 'fas fa-moon';
        }
        
        // 更新主题选择器
        this.updateThemeSelector(theme);
    }

    // 切换主题
    toggleTheme() {
        const newTheme = this.currentTheme === 'dark' ? 'default' : 'dark';
        this.applyTheme(newTheme);
    }

    // 设置主题选择器
    setupThemeSelector() {
        const themeOptions = document.querySelectorAll('.theme-option');
        themeOptions.forEach(option => {
            option.addEventListener('click', () => {
                const theme = option.dataset.theme;
                this.applyTheme(theme);
            });
        });
    }

    // 更新主题选择器状态
    updateThemeSelector(activeTheme) {
        const themeOptions = document.querySelectorAll('.theme-option');
        themeOptions.forEach(option => {
            option.classList.remove('active');
            if (option.dataset.theme === activeTheme) {
                option.classList.add('active');
            }
        });
    }

    // 设置导航
    setupNavigation() {
        const navLinks = document.querySelectorAll('.nav-link');
        const sections = document.querySelectorAll('.section');
        
        // 平滑滚动
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href').substring(1);
                const targetSection = document.getElementById(targetId);
                
                if (targetSection) {
                    targetSection.scrollIntoView({ behavior: 'smooth' });
                }
            });
        });
        
        // 滚动监听
        window.addEventListener('scroll', () => {
            this.updateActiveNavLink(sections, navLinks);
        });
    }

    // 更新活动导航链接
    updateActiveNavLink(sections, navLinks) {
        let current = '';
        const scrollPos = window.scrollY + 100;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            
            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    }

    // 设置移动端菜单
    setupMobileMenu() {
        const hamburger = document.querySelector('.hamburger');
        const navMenu = document.querySelector('.nav-menu');
        
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
        
        // 点击导航链接时关闭菜单
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }

    // 设置平滑滚动
    setupSmoothScroll() {
        if (this.config.settings.enableSmoothScroll) {
            // 平滑滚动已经在导航设置中实现
        }
    }

    // 设置动画
    setupAnimations() {
        if (this.config.settings.enableAnimations) {
            this.setupScrollAnimations();
        }
    }

    // 设置滚动动画
    setupScrollAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);
        
        // 观察所有卡片和内容
        const animatedElements = document.querySelectorAll('.project-card, .website-card, .skill-tag, .social-link');
        animatedElements.forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(20px)';
            el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(el);
        });
    }

    // 更新年份
    updateYear() {
        const yearElement = document.getElementById('current-year');
        yearElement.textContent = new Date().getFullYear();
    }
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', () => {
    new PersonalWebsite();
});

// 添加一些额外的交互功能
document.addEventListener('DOMContentLoaded', () => {
    // 主题选择器显示/隐藏
    const themeToggle = document.getElementById('theme-toggle');
    const themeSelector = document.getElementById('theme-selector');
    
    themeToggle.addEventListener('dblclick', () => {
        themeSelector.classList.toggle('show');
    });
    
    // 点击外部关闭主题选择器
    document.addEventListener('click', (e) => {
        if (!themeSelector.contains(e.target) && !themeToggle.contains(e.target)) {
            themeSelector.classList.remove('show');
        }
    });
    
    // 添加键盘快捷键
    document.addEventListener('keydown', (e) => {
        // Ctrl/Cmd + T 切换主题
        if ((e.ctrlKey || e.metaKey) && e.key === 't') {
            e.preventDefault();
            const currentTheme = document.documentElement.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'default' : 'dark';
            document.documentElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
        }
    });
}); 