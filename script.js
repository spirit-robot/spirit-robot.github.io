// 多语言支持
const translations = {
    zh: {
        // 导航栏
        home: "首页",
        features: "特性",
        activities: "活动",
        team: "团队",
        
        // 英雄区域
        heroTitle: "低成本<br>具身智能机器人方案",
        heroSubtitle: "轮足加双臂，多模态交互",
        ctaButton: "探索更多",
        scrollIndicator: "向下滚动查看更多 ↓",
        
        // 视频区域
        video1Title: "精准操控",
        video1Desc: "采用先进的运动控制算法，让每一个动作都完美无缺。",
        video2Title: "完整具身智能硬件框架",
        video2Desc: "轮足式移动，双臂操作，激光雷达，深度相机",
        video3Title: "完整机器人软件框架（待完成）",
        video3Desc: "ROS2 + 语音交互 + SLAM导航 + VLA + APP控制",
        video4Title: "支持多套VLA部署（待完成）",
        video4Desc: "Pi0 + OpenVLA + IDP3",
        

        
        // 活动区域
        activitiesTitle: "近年来进展",
        activitiesSubtitle: "机器人开发历程中的关键里程碑和重要成就",
        activity1Date: "2025年6月20日",
        activity1Title: "完成初版硬件搭建",
        activity1Desc: "成功完成第一版硬件设置，包括机械结构和基础电子元件集成。",
        
        // 团队区域
        teamTitle: "核心团队",
        teamSubtitle: "我们的专业团队致力于打造最先进的智能机器人技术",
        member1Name: "姚成思",
        member1Role: "技术负责人",
        member1Desc: "专注于机器人核心算法研发，在人工智能和机器学习领域有丰富经验。",
        member2Name: "马勇枝",
        member2Role: "硬件工程师",
        member2Desc: "负责机器人硬件设计和优化，机器人嵌入式系统设计，机器人运动控制，确保系统的稳定性和可靠性。",
        member3Name: "莫秋婷",
        member3Role: "软件工程师",
        member3Desc: "专注于机器人软件系统开发，专注于Linux开发，ROS2开发",
        member4Name: "马晓婷",
        member4Role: "产品设计，结构设计",
        member4Desc: "负责产品规划和用户体验设计，确保产品满足市场需求。",
        creditsText: "项目指导：陈荣军",
        institutionName: "IOT实验室",
        institutionDesc: "广师大物联实验室",
        
        // 页脚
        aboutUs: "关于我们",
        techSupport: "技术支持",
        privacyPolicy: "隐私政策",
        termsOfService: "服务条款",
        contactUs: "联系我们",
        copyright: "© 2025 Spirit Robot. 保留所有权利。"
    },
    en: {
        // 导航栏
        home: "HOME",
        features: "FEATURES",
        activities: "ACTIVITIES",
        team: "TEAM",
        
        heroTitle: "Low-Cost<br>Embodied Intelligent Robot Solution",
        heroSubtitle: "Wheel-Legs and Double Arms, Multi-Modal Interaction",
        ctaButton: "Explore More",
        scrollIndicator: "Scroll down for more ↓",
        
        // 视频区域
        video1Title: "Precision Control",
        video1Desc: "Advanced motion control algorithms, ensuring every movement is flawless.",
        video2Title: "Complete Hardware Framework",
        video2Desc: "Wheel-Legs Movement, Dual-Arm Manipulation, LiDAR, Depth Camera",
        video3Title: "Complete Software Framework (Todo)",
        video3Desc: "ROS2 + Voice Interaction + SLAM Navigation + VLA + APP Control",
        video4Title: "Support Multiple VLA Deployments (Todo)",
        video4Desc: "Pi0 + OpenVLA + IDP3",
        
        

        
        // 活动区域
        activitiesTitle: "Recent Progress",
        activitiesSubtitle: "Key milestones and achievements in our robotics development journey",
        activity1Date: "June 20, 2025",
        activity1Title: "Initial Hardware Assembly Completed",
        activity1Desc: "Successfully completed the first version of hardware setup, including mechanical structure and basic electronic components integration.",
        
        // 团队区域
        teamTitle: "Team",
        teamSubtitle: "Our professional team is dedicated to creating the most advanced intelligent robot technology",
        member1Name: "Chengsi Yao",
        member1Role: "Technical Lead",
        member1Desc: "Focus on the development of robot core algorithms, with rich experience in artificial intelligence and machine learning.",
        member2Name: "Yongzhi Ma",
        member2Role: "Hardware Engineer",
        member2Desc: "Responsible for robot hardware design and optimization, robot embedded system design, robot motion control, ensuring the stability and reliability of the system.",
        member3Name: "Qiuting Mo",
        member3Role: "Software Engineer",
        member3Desc: "Focus on the development of robot software system, dedicated to Linux development, ROS2 development",
        member4Name: "Xiaoting Ma",
        member4Role: "Product Design, Structural Design",
        member4Desc: "Responsible for product planning and user experience design, ensuring that the product meets market demand.",
        creditsText: "Project Advisor: Prof. Chen",
        institutionName: "IOT Lab",
        institutionDesc: "Guangdong Normal University IOT Lab",
        
        // 页脚
        aboutUs: "About Us",
        techSupport: "Technical Support",
        privacyPolicy: "Privacy Policy",
        termsOfService: "Terms of Service",
        contactUs: "Contact Us",
        copyright: "© 2025 Spirit Robot. All rights reserved."
    }
};

// 当前语言
let currentLanguage = 'en';

// 检测浏览器语言
function detectBrowserLanguage() {
    const browserLang = navigator.language || navigator.userLanguage;
    return browserLang.startsWith('zh') ? 'zh' : 'en';
}

// 切换语言
function switchLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('preferred-language', lang);
    updateContent();
    updateDocumentLanguage();
}

// 更新文档语言属性
function updateDocumentLanguage() {
    document.documentElement.lang = currentLanguage === 'zh' ? 'zh-CN' : 'en';
}

// 更新页面内容
function updateContent() {
    const t = translations[currentLanguage];
    
    // 更新导航栏
    updateElementText('[data-i18n="nav-home"]', t.home);
    updateElementText('[data-i18n="nav-features"]', t.features);
    updateElementText('[data-i18n="nav-activities"]', t.activities);
    updateElementText('[data-i18n="nav-team"]', t.team);
    
    // 更新英雄区域
    updateElementHTML('[data-i18n="hero-title"]', t.heroTitle);
    updateElementText('[data-i18n="hero-subtitle"]', t.heroSubtitle);
    updateElementText('[data-i18n="cta-button"]', t.ctaButton);
    updateElementText('[data-i18n="scroll-indicator"]', t.scrollIndicator);
    
    // 更新视频区域
    updateElementText('[data-i18n="video1-title"]', t.video1Title);
    updateElementText('[data-i18n="video1-desc"]', t.video1Desc);
    updateElementText('[data-i18n="video2-title"]', t.video2Title);
    updateElementText('[data-i18n="video2-desc"]', t.video2Desc);
    updateElementText('[data-i18n="video3-title"]', t.video3Title);
    updateElementText('[data-i18n="video3-desc"]', t.video3Desc);
    updateElementText('[data-i18n="video4-title"]', t.video4Title);
    updateElementText('[data-i18n="video4-desc"]', t.video4Desc);
    

    
    // 更新活动区域
    updateElementText('[data-i18n="activities-title"]', t.activitiesTitle);
    updateElementText('[data-i18n="activities-subtitle"]', t.activitiesSubtitle);
    updateElementText('[data-i18n="activity1-date"]', t.activity1Date);
    updateElementText('[data-i18n="activity1-title"]', t.activity1Title);
    updateElementText('[data-i18n="activity1-desc"]', t.activity1Desc);
    
    // 更新团队区域
    updateElementText('[data-i18n="team-title"]', t.teamTitle);
    updateElementText('[data-i18n="team-subtitle"]', t.teamSubtitle);
    updateElementText('[data-i18n="member1-name"]', t.member1Name);
    updateElementText('[data-i18n="member1-role"]', t.member1Role);
    updateElementText('[data-i18n="member1-desc"]', t.member1Desc);
    updateElementText('[data-i18n="member2-name"]', t.member2Name);
    updateElementText('[data-i18n="member2-role"]', t.member2Role);
    updateElementText('[data-i18n="member2-desc"]', t.member2Desc);
    updateElementText('[data-i18n="member3-name"]', t.member3Name);
    updateElementText('[data-i18n="member3-role"]', t.member3Role);
    updateElementText('[data-i18n="member3-desc"]', t.member3Desc);
    updateElementText('[data-i18n="member4-name"]', t.member4Name);
    updateElementText('[data-i18n="member4-role"]', t.member4Role);
    updateElementText('[data-i18n="member4-desc"]', t.member4Desc);
    updateElementText('[data-i18n="credits-text"]', t.creditsText);
    updateElementText('[data-i18n="institution-name"]', t.institutionName);
    updateElementText('[data-i18n="institution-desc"]', t.institutionDesc);
    
    // 更新页脚
    updateElementText('[data-i18n="about-us"]', t.aboutUs);
    updateElementText('[data-i18n="tech-support"]', t.techSupport);
    updateElementText('[data-i18n="privacy-policy"]', t.privacyPolicy);
    updateElementText('[data-i18n="terms-service"]', t.termsOfService);
    updateElementText('[data-i18n="contact-us"]', t.contactUs);
    updateElementText('[data-i18n="copyright"]', t.copyright);
    
    // 更新语言切换按钮状态
    updateLanguageSwitcher();
}

// 更新元素文本内容
function updateElementText(selector, text) {
    const element = document.querySelector(selector);
    if (element) {
        element.textContent = text;
    }
}

// 更新元素HTML内容（用于包含<br>标签的内容）
function updateElementHTML(selector, html) {
    const element = document.querySelector(selector);
    if (element) {
        element.innerHTML = html;
    }
}

// 更新语言切换按钮状态
function updateLanguageSwitcher() {
    const cnBtn = document.querySelector('.lang-btn[data-lang="zh"]');
    const enBtn = document.querySelector('.lang-btn[data-lang="en"]');
    
    if (cnBtn && enBtn) {
        cnBtn.classList.toggle('active', currentLanguage === 'zh');
        enBtn.classList.toggle('active', currentLanguage === 'en');
    }
}

// 初始化语言
function initializeLanguage() {
    // 优先使用本地存储的语言偏好
    const savedLang = localStorage.getItem('preferred-language');
    if (savedLang && translations[savedLang]) {
        currentLanguage = savedLang;
    } else {
        // 否则根据浏览器语言自动检测
        currentLanguage = detectBrowserLanguage();
    }
    
    updateContent();
    updateDocumentLanguage();
}

// 导航栏滚动效果
function handleNavbarScroll() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
}

// 平滑滚动
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// 视频滚动控制
class VideoScrollController {
    constructor() {
        this.videoContents = document.querySelectorAll('.video-content');
        this.triggerSection = document.querySelector('.trigger-section');
        this.videoContainer = document.querySelector('.video-container');
        this.currentVideoIndex = 0;
        this.isVideoSectionActive = false;
        this.ticking = false;
        
        this.init();
    }
    
    init() {
        this.bindEvents();
        this.updateVideoVisibility();
    }
    
    bindEvents() {
        window.addEventListener('scroll', () => this.onScroll());
    }
    
    updateVideoVisibility() {
        if (!this.triggerSection) return;
        
        const rect = this.triggerSection.getBoundingClientRect();
        const triggerTop = rect.top;
        const triggerHeight = rect.height;
        const windowHeight = window.innerHeight;
        
        // 检查是否在视频区域
        if (triggerTop <= 0 && triggerTop > -triggerHeight) {
            this.isVideoSectionActive = true;
            
            // 计算滚动进度 (0-1)
            const progress = Math.abs(triggerTop) / (triggerHeight - windowHeight);
            const clampedProgress = Math.max(0, Math.min(1, progress));
            
            // 计算当前应该显示的视频索引
            const videoIndex = Math.floor(clampedProgress * this.videoContents.length);
            const finalIndex = Math.min(videoIndex, this.videoContents.length - 1);
            
            if (finalIndex !== this.currentVideoIndex) {
                this.switchVideo(finalIndex);
            }
        } else {
            if (this.isVideoSectionActive) {
                this.pauseAllVideos();
                this.isVideoSectionActive = false;
            }
        }
    }
    
    switchVideo(newIndex) {
        // 隐藏当前视频
        this.videoContents[this.currentVideoIndex].classList.remove('active');
        const currentVideo = this.videoContents[this.currentVideoIndex].querySelector('video');
        if (currentVideo) {
            currentVideo.pause();
        }
        
        // 隐藏当前文字内容
        const textContents = document.querySelectorAll('.video-text-content');
        if (textContents[this.currentVideoIndex]) {
            textContents[this.currentVideoIndex].classList.remove('active');
        }
        
        // 显示新视频
        this.currentVideoIndex = newIndex;
        this.videoContents[this.currentVideoIndex].classList.add('active');
        const newVideo = this.videoContents[this.currentVideoIndex].querySelector('video');
        if (newVideo) {
            newVideo.currentTime = 0;
            newVideo.play().catch(e => {
                console.log('视频播放失败:', e);
            });
        }
        
        // 显示对应的文字内容
        if (textContents[newIndex]) {
            textContents[newIndex].classList.add('active');
        }
    }
    
    pauseAllVideos() {
        this.videoContents.forEach(content => {
            const video = content.querySelector('video');
            if (video) {
                video.pause();
            }
        });
    }
    
    onScroll() {
        if (!this.ticking) {
            requestAnimationFrame(() => {
                this.updateVideoVisibility();
                this.ticking = false;
            });
            this.ticking = true;
        }
    }
}

// 滚动指示器管理
function handleScrollIndicator() {
    const scrollIndicator = document.querySelector('.scroll-indicator');
    if (scrollIndicator) {
        if (window.scrollY > 100) {
            scrollIndicator.style.opacity = '0';
        } else {
            scrollIndicator.style.opacity = '0.7';
        }
    }
}

// 特性卡片动画
function initFeatureAnimations() {
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

    // 观察特性卡片
    document.querySelectorAll('.feature').forEach(feature => {
        feature.style.opacity = '0';
        feature.style.transform = 'translateY(30px)';
        feature.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(feature);
    });

    // 观察团队成员卡片
    document.querySelectorAll('.team-member').forEach((member, index) => {
        member.style.opacity = '0';
        member.style.transform = 'translateY(30px)';
        member.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        observer.observe(member);
    });
}

// 处理视频加载错误
function handleVideoErrors() {
    document.querySelectorAll('video').forEach((video, index) => {
        video.addEventListener('error', () => {
            // 如果视频加载失败，显示渐变背景
            const colors = [
                'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
                'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
                'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)'
            ];
            video.parentElement.style.background = colors[index % colors.length];
        });
    });
}

// 主初始化函数
function init() {
    // 首先初始化语言
    initializeLanguage();
    
    // 初始化各种功能
    initSmoothScroll();
    initFeatureAnimations();
    handleVideoErrors();
    
    // 初始化视频控制器
    const videoController = new VideoScrollController();
    
    // 绑定滚动事件
    window.addEventListener('scroll', () => {
        handleNavbarScroll();
        handleScrollIndicator();
    });
    
    // 页面加载完成后的初始设置
    handleNavbarScroll();
    handleScrollIndicator();
    
    // 绑定语言切换事件
    initLanguageSwitcher();
}

// 初始化语言切换器
function initLanguageSwitcher() {
    // 为语言切换按钮添加事件监听器
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('lang-btn')) {
            const lang = e.target.getAttribute('data-lang');
            if (lang && lang !== currentLanguage) {
                switchLanguage(lang);
            }
        }
    });
}

// 当DOM加载完成后初始化
document.addEventListener('DOMContentLoaded', init);

// 导出一些实用函数，以便在其他地方使用
window.RobotWebsite = {
    init,
    VideoScrollController,
    handleNavbarScroll,
    initSmoothScroll,
    initFeatureAnimations
}; 