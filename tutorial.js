// 教程页面交互功能
document.addEventListener('DOMContentLoaded', function() {
    // 导航高亮功能
    const navLinks = document.querySelectorAll('.tutorial-nav a');
    const sections = document.querySelectorAll('.tutorial-section');
    
    // 平滑滚动
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // 滚动监听，高亮当前导航项
    function updateActiveNav() {
        const scrollPos = window.scrollY + 100;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === '#' + sectionId) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }
    
    // 监听滚动事件
    window.addEventListener('scroll', updateActiveNav);
    
    // 初始化高亮
    updateActiveNav();
    
    // 代码块复制功能
    const codeBlocks = document.querySelectorAll('.code-block');
    codeBlocks.forEach(block => {
        const pre = block.querySelector('pre');
        if (pre) {
            // 添加复制按钮
            const copyBtn = document.createElement('button');
            copyBtn.className = 'copy-btn';
            copyBtn.innerHTML = '<i class="fas fa-copy"></i> 复制';
            copyBtn.style.cssText = `
                position: absolute;
                top: 8px;
                right: 8px;
                background: #007bff;
                color: white;
                border: none;
                border-radius: 4px;
                padding: 4px 8px;
                font-size: 12px;
                cursor: pointer;
                opacity: 0;
                transition: opacity 0.3s ease;
            `;
            
            block.style.position = 'relative';
            block.appendChild(copyBtn);
            
            // 显示/隐藏复制按钮
            block.addEventListener('mouseenter', () => {
                copyBtn.style.opacity = '1';
            });
            
            block.addEventListener('mouseleave', () => {
                copyBtn.style.opacity = '0';
            });
            
            // 复制功能
            copyBtn.addEventListener('click', async () => {
                const code = pre.textContent;
                try {
                    await navigator.clipboard.writeText(code);
                    copyBtn.innerHTML = '<i class="fas fa-check"></i> 已复制';
                    copyBtn.style.background = '#28a745';
                    
                    setTimeout(() => {
                        copyBtn.innerHTML = '<i class="fas fa-copy"></i> 复制';
                        copyBtn.style.background = '#007bff';
                    }, 2000);
                } catch (err) {
                    console.error('复制失败:', err);
                    copyBtn.innerHTML = '<i class="fas fa-times"></i> 失败';
                    copyBtn.style.background = '#dc3545';
                    
                    setTimeout(() => {
                        copyBtn.innerHTML = '<i class="fas fa-copy"></i> 复制';
                        copyBtn.style.background = '#007bff';
                    }, 2000);
                }
            });
        }
    });
    
    // 主题预览点击效果
    const themePreviews = document.querySelectorAll('.theme-preview');
    themePreviews.forEach(preview => {
        preview.addEventListener('click', function() {
            // 移除其他预览的选中状态
            themePreviews.forEach(p => p.style.border = '2px solid var(--border-color)');
            
            // 添加选中状态
            this.style.border = '3px solid var(--primary-color)';
            
            // 显示主题名称
            const themeName = this.className.split('-')[0];
            const themeNames = {
                'default': '默认（蓝色）',
                'dark': '深色',
                'blue': '蓝色',
                'green': '绿色',
                'purple': '紫色',
                'orange': '橙色'
            };
            
            // 创建提示
            const tooltip = document.createElement('div');
            tooltip.textContent = `已选择: ${themeNames[themeName] || themeName}`;
            tooltip.style.cssText = `
                position: fixed;
                top: 20px;
                right: 20px;
                background: var(--primary-color);
                color: white;
                padding: 8px 16px;
                border-radius: 4px;
                font-size: 14px;
                z-index: 1000;
                animation: slideIn 0.3s ease;
            `;
            
            document.body.appendChild(tooltip);
            
            setTimeout(() => {
                tooltip.style.animation = 'slideOut 0.3s ease';
                setTimeout(() => {
                    document.body.removeChild(tooltip);
                }, 300);
            }, 2000);
        });
    });
    
    // 添加动画样式
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from {
                transform: translateX(100%);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
        
        @keyframes slideOut {
            from {
                transform: translateX(0);
                opacity: 1;
            }
            to {
                transform: translateX(100%);
                opacity: 0;
            }
        }
        
        .tutorial-section {
            opacity: 0;
            transform: translateY(20px);
            animation: fadeInUp 0.6s ease forwards;
        }
        
        .tutorial-section:nth-child(1) { animation-delay: 0.1s; }
        .tutorial-section:nth-child(2) { animation-delay: 0.2s; }
        .tutorial-section:nth-child(3) { animation-delay: 0.3s; }
        .tutorial-section:nth-child(4) { animation-delay: 0.4s; }
        .tutorial-section:nth-child(5) { animation-delay: 0.5s; }
        .tutorial-section:nth-child(6) { animation-delay: 0.6s; }
        .tutorial-section:nth-child(7) { animation-delay: 0.7s; }
        
        @keyframes fadeInUp {
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
    `;
    document.head.appendChild(style);
    
    // 链接点击统计（可选）
    const links = document.querySelectorAll('a[href^="http"]');
    links.forEach(link => {
        link.addEventListener('click', function() {
            // 可以在这里添加统计代码
            console.log('外部链接点击:', this.href);
        });
    });
    
    // 页面加载完成后的初始化
    setTimeout(() => {
        // 滚动到顶部
        window.scrollTo(0, 0);
        
        // 显示欢迎消息
        const welcomeMsg = document.createElement('div');
        welcomeMsg.innerHTML = `
            <div style="
                position: fixed;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                background: rgba(0, 123, 255, 0.95);
                color: white;
                padding: 20px 30px;
                border-radius: 10px;
                font-size: 18px;
                z-index: 1000;
                animation: fadeIn 0.5s ease;
            ">
                <i class="fas fa-graduation-cap" style="margin-right: 10px;"></i>
                欢迎使用 TEEK 教程！
            </div>
        `;
        
        document.body.appendChild(welcomeMsg);
        
        setTimeout(() => {
            welcomeMsg.style.animation = 'fadeOut 0.5s ease';
            setTimeout(() => {
                document.body.removeChild(welcomeMsg);
            }, 500);
        }, 2000);
        
        // 添加淡出动画
        const fadeOutStyle = document.createElement('style');
        fadeOutStyle.textContent = `
            @keyframes fadeIn {
                from { opacity: 0; transform: translate(-50%, -50%) scale(0.8); }
                to { opacity: 1; transform: translate(-50%, -50%) scale(1); }
            }
            
            @keyframes fadeOut {
                from { opacity: 1; transform: translate(-50%, -50%) scale(1); }
                to { opacity: 0; transform: translate(-50%, -50%) scale(0.8); }
            }
        `;
        document.head.appendChild(fadeOutStyle);
    }, 500);
}); 