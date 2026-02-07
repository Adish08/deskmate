console.log('Deskmate v2.0 Loaded');

const categories = [
    {
        id: 'utilities',
        title: 'Utilities',
        icon: 'bx-wrench',
        apps: [
            {
                name: 'NanaZip',
                description: 'Modern 7-Zip fork',
                url: 'https://apps.microsoft.com/detail/9n8g7tscl18r',
                icon: 'https://raw.githubusercontent.com/M2Team/NanaZip/main/Assets/NanaZip.png',
            },
            {
                name: 'FDM',
                description: 'Free Download Manager',
                url: 'https://apps.microsoft.com/detail/xpdlmkftxtdhsd',
                icon: 'https://alternative.me/media/256/free-download-manager-icon-zs0dveq865g2qqtr-c.png'
            },
            {
                name: 'Break Timer',
                description: 'Relax. Rest. & Stretch.',
                url: 'https://github.com/tom-james-watson/breaktimer-app/releases/latest/download/BreakTimer.exe',
                icon: 'https://breaktimer.app/images/logo.svg',
            },

            {
                name: 'Writing Tools',
                description: 'AI Writing Assistant',
                url: 'https://github.com/theJayTea/WritingTools/releases/latest',
                icon: 'https://avatars.githubusercontent.com/u/65911490?v=4'
            },
            {
                name: 'Windhawk',
                description: 'Customize Windows',
                url: 'https://ramensoftware.com/downloads/windhawk_setup.exe',
                icon: 'https://img.utdstc.com/icon/b73/06e/b7306e9e74c0bc10e1e2b6ddd826cd1528ef009f813f54c8d89007fa302fdde3:200'
            },
            {
                name: 'WinToys',
                description: 'Tweak & Optimize',
                url: 'https://apps.microsoft.com/detail/9p8ltpgcbzxd',
                icon: 'https://store-images.s-microsoft.com/image/apps.986.14089795918715087.7f26510c-c331-47c8-922e-e1286b39d96f.3e21babc-4137-4eae-bcc9-4c590a6f3266',
            },
            {
                name: 'Raycast',
                description: 'Fast Productivity Launcher',
                url: 'https://apps.microsoft.com/detail/9pfxxshc64h3',
                icon: 'https://upload.wikimedia.org/wikipedia/en/f/f4/Raycast_App_Icon.png'
            },
            {
                name: 'Winhance',
                description: 'Optimize & Enhance Windows. <a href="https://file.garden/ZUZC9jg2XxuHNMIN/softwares/WinHance%20Configuration.winhance" target="_blank" style="color:var(--primary-accent)">Configuration? Click Here!</a>',
                url: 'https://github.com/memstechtips/Winhance/releases/latest/download/Winhance.Installer.exe',
                icon: 'https://winhance.net/images/winhance-rocket.png'
            },
            {
                name: 'CTT WinUtil',
                description: 'Ultimate Windows Toolbox',
                url: '#',
                icon: 'https://mloads.com/uploads/posts/2025-05/winutil.webp',
                action: 'copy',
                copyText: 'irm "https://christitus.com/win" | iex'
            }
        ]
    },
    {
        id: 'media',
        title: 'Media & Office',
        icon: 'bx-play-circle',
        apps: [
            {
                name: 'Screenbox',
                description: 'Modern Media Player',
                url: 'https://apps.microsoft.com/detail/9ntsnmsvcb5l',
                icon: 'https://raw.githubusercontent.com/huynhsontung/Screenbox/main/Screenbox/Assets/StoreLogo.scale-400.png',
                // fallback: 'https://raw.githubusercontent.com/huynhsontung/Screenbox/main/Screenbox/Assets/StoreLogo.scale-400.png'
            },
            {
                name: 'Foxit Reader',
                description: 'Fast PDF Reader. Or <a href="https://www.sumatrapdfreader.org/download-free-pdf-viewer" target="_blank" style="color:var(--primary-accent)">Sumatra?</a>',
                url: 'https://apps.microsoft.com/detail/xpfcg5nrkxqpkt',
                icon: 'https://img.icons8.com/color/96/foxit-reader.png',
            },
            {
                name: 'Brother Driver',
                description: 'Printer Drivers',
                url: 'https://download.brother.com/welcome/dlf105118/Y20A_C1_ULWL_PP-inst-E1.EXE',
                icon: 'https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/png/brother.png'
            },
            {
                name: 'Canon Driver',
                description: 'Printer Drivers',
                url: 'https://gdlp01.c-wss.com/gds/0/0100007670/02/win-g2000-1_1-n_mcd.exe',
                icon: 'https://in.canon/media/image/2025/11/12/6e0994e9da2c498db43c732db3049cd1_canon+print+-sln.png'
            },
            {
                name: 'Intel Graphics',
                description: 'Command Center',
                url: 'https://apps.microsoft.com/detail/9plfnlnt3g5g',
                icon: 'https://store-images.s-microsoft.com/image/apps.29528.14318846362781107.7d9233b2-521d-4dc6-ad8a-d37f21fa0592.7d0684d0-1145-4c14-b3ed-f0a5729505f6'
            },
            {
                name: 'FontBase',
                description: 'Font Manager',
                url: 'https://fontba.se/downloads/windows',
                icon: 'https://user-images.githubusercontent.com/53346722/62157430-c6d16a00-b2d2-11e9-86d1-756e767de811.png'
            },
            {
                name: 'FaGram',
                description: 'Telegram Client',
                url: 'https://github.com/FajoX1/fagramdesktop/releases',
                icon: 'https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/png/telegram.png',
                fallback: 'https://raw.githubusercontent.com/FajoX1/fagramdesktop/dev/Telegram/Resources/art/icon512%402x.png'
            },
            {
                name: 'WizTree',
                description: 'Disk Space Analyzer',
                url: 'https://diskanalyzer.com/download',
                icon: 'https://antibodysoftware-17031.kxcdn.com/images/wiztree200x.png'
            },
            {
                name: 'Custom Cursor',
                description: 'Look Cool ;) af',
                url: 'https://file.garden/ZUZC9jg2XxuHNMIN/softwares/Custom%20Cursors.zip',
                icon: 'https://wallpapers.com/images/hd/mickey-mouse-hand-gesture-cjz8ffhszi5irbh9-2.jpg'
            }
        ]
    },
    {
        id: 'system',
        title: 'System Tools',
        icon: 'bx-cog',
        apps: [
            {
                name: 'BleachBit',
                description: 'System Cleaner',
                url: 'https://www.bleachbit.org/download',
                icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Bleachbit_logo.svg/330px-Bleachbit_logo.svg.png'
            },
            {
                name: 'Intel DSA',
                description: 'Driver Assistant',
                url: 'https://dsadata.intel.com/installer',
                icon: 'https://mloads.com/uploads/posts/2024-09/intel-driver-support-assistant.webp'
            },
            {
                name: 'PowerToys',
                description: 'Microsoft Utilities',
                url: 'https://apps.microsoft.com/detail/xp89dcgq3k6vld',
                icon: 'https://upload.wikimedia.org/wikipedia/commons/1/19/2020_PowerToys_Icon.png'
            },
            {
                name: 'Lenovo Vantage',
                description: 'Device Manager',
                url: 'https://apps.microsoft.com/detail/9nr5b8gvvm13',
                icon: 'https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/png/lenovo.png'
            },
            {
                name: 'Snappy Driver Installer',
                description: 'Driver Installer',
                url: 'https://www.glenn.delahoy.com/downloads/sdio/SDIO_latest.zip',
                icon: 'https://cdn.rawgit.com/Spunkie/chocolatey-packages/a189a397e2b7eecd723f317bfd5473bcb4da2ecf/automatic/sdio/icon.png'
            },
            {
                name: 'BCUninstaller',
                description: 'Deep Uninstaller',
                url: 'https://github.com/Klocman/Bulk-Crap-Uninstaller/releases/latest',
                icon: 'https://www.bcuninstaller.com/assets/logo.png'
            },
            {
                name: 'NextDNS',
                description: 'DNS Protection',
                url: 'https://johnwickx.notion.site/NextDNS-Setup-ad2528ea6c2640b1bf5c83e8d4b243d6',
                icon: 'https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/png/nextdns.png'
            },
            {
                name: 'AutoHotKey AHK',
                description: 'Automation. <a href="https://github.com/Adish08/AutoHotKey" target="_blank" style="color:var(--primary-accent)">Scripts?</a>',
                url: 'https://www.autohotkey.com/download/ahk-v2.exe',
                icon: 'https://icons.veryicon.com/png/o/business/vscode-program-item-icon/autohotkey.png'
            },
            {
                name: 'UniGetUI',
                description: 'Winget UI Wrapper',
                url: 'https://apps.microsoft.com/detail/xpfftq032ptphf',
                icon: 'https://raw.githubusercontent.com/marticliment/UniGetUI/main/media/Icon%20sizes/128.png',
            }
        ]
    },
    {
        id: 'activators',
        title: 'Activation & Patches',
        icon: 'bx-lock-open',
        apps: [
            {
                name: 'MAS',
                description: 'Microsoft Activation Scripts for Windows and Office',
                url: '#',
                icon: 'https://img.icons8.com/color/96/windows-11.png',
                action: 'copy',
                copyText: 'irm https://get.activated.win | iex'
            },
            {
                name: 'Office Installer',
                description: 'Full Office Suite',
                url: 'https://github.com/YerongAI/Office-Tool/releases',
                icon: 'https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/png/microsoft-office.png'
            },
            {
                name: 'GenP',
                description: 'Adobe Patcher',
                url: 'https://github.com/Cur10s1tyByt3/GenP/releases/latest',
                icon: 'https://i.pinimg.com/474x/25/39/84/253984898eb9e000ae9f2ef644a380e9.jpg'
            },
            {
                name: 'Outline VPN',
                description: 'Fast VPN. <a href="https://gist.github.com/Adish08/bbc09ea33f0e9212254b95596377be88" target="_blank" style="color:var(--primary-accent)">Config?</a>',
                url: 'https://s3.amazonaws.com/outline-releases/client/windows/stable/Outline-Client.exe',
                icon: 'https://upload.wikimedia.org/wikipedia/commons/6/60/Outline_VPN_icon.png'
            },

            {
                name: 'Glary Utilities',
                description: 'Optimize and Clean. Activator? <a href="https://file.garden/ZUZC9jg2XxuHNMIN/softwares/Glary%20Utilites%20Keymaker-Jasi2169.zip" target="_blank" style="color:var(--primary-accent)">Click here</a>',
                url: 'https://download.glarysoft.com/gusetup.exe',
                icon: 'https://www.glarysoft.com/images/update/updatelogo.png?20231222'
            },
            {
                name: 'StartAllBack',
                description: 'Classic Start. <a href="https://file.garden/ZUZC9jg2XxuHNMIN/softwares/StartAllBack%20Activator.cmd" target="_blank" style="color:var(--primary-accent)">Activator?</a>',
                url: 'https://www.startallback.com/download.php',
                icon: 'https://www.softexia.com/wp-content/uploads/2024/01/StartAllBack-logo.png',
            },
            {
                name: 'Winrar',
                description: 'Classic Archiver. <a href="https://file.garden/ZUZC9jg2XxuHNMIN/softwares/WinRAR_Activator.bat" target="_blank" style="color:var(--primary-accent)">Activate?</a>',
                url: 'https://www.rarlab.com/rar/winrar-x64-710b3.exe',
                icon: 'https://www.rw-designer.com/icon-image/21764-256x256x32.png'
            },
            {
                name: 'Google Input',
                description: 'Hindi Typing Tools',
                url: 'https://file.garden/ZUZC9jg2XxuHNMIN/softwares/Google%20Iinput%20Tools%20Setup.zip',
                icon: 'https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/png/google.png'
            }
        ]
    }
];

function getIconUrl(app) {
    return app.icon;
}

function copyToClipboard(text, element) {
    navigator.clipboard.writeText(text).then(() => {
        const actionSpan = element.querySelector('.card-action span');
        if (!actionSpan) return;

        const originalText = actionSpan.textContent;
        actionSpan.textContent = 'Copied!';
        element.classList.add('copied');

        setTimeout(() => {
            actionSpan.textContent = originalText;
            element.classList.remove('copied');
        }, 2000);
    }).catch(err => {
        console.error('Failed to copy: ', err);
    });
}

function renderCategories(filterText = '') {
    const container = document.getElementById('categoriesContainer');
    container.innerHTML = '';

    categories.forEach(category => {
        const filteredApps = category.apps.filter(app =>
            app.name.toLowerCase().includes(filterText.toLowerCase()) ||
            app.description.toLowerCase().includes(filterText.toLowerCase())
        ).sort((a, b) => a.name.localeCompare(b.name));

        if (filteredApps.length > 0) {
            const section = document.createElement('section');
            section.className = 'category-section';

            // Render Logic
            section.innerHTML = `
                <div class="category-header">
                    <i class='bx ${category.icon} category-title-icon'></i>
                    <h2 class="category-title">${category.title}</h2>
                </div>
                <div class="software-grid">
                    ${filteredApps.map((app, index) => {
                const primUrl = getIconUrl(app);
                const fallbackUrl = app.fallback || `https://ui-avatars.com/api/?name=${encodeURIComponent(app.name)}&background=202020&color=60cdff&size=128&font-size=0.5`;
                const isCopyAction = app.action === 'copy';
                const cardId = `card-${category.id}-${index}`;
                const actionText = isCopyAction ? 'Copy' : 'Download';
                const actionIcon = isCopyAction ? 'bx-copy' : 'bx-right-arrow-alt';
                const arrowClass = isCopyAction ? '' : 'download-arrow';

                const overlayLink = !isCopyAction
                    ? `<a href="${app.url}" target="_blank" class="card-overlay-link" aria-label="Download ${app.name}"></a>`
                    : '';

                return `
                            <div class="software-card" id="${cardId}" ${isCopyAction ? `data-copy="${app.copyText}"` : ''}>
                                ${overlayLink}
                                <div class="card-icon-container">
                                    <img 
                                        src="${primUrl}" 
                                        alt="${app.name}" 
                                        class="software-icon" 
                                        onerror="this.onerror=null; this.src='${fallbackUrl}';"
                                    >
                                </div>
                                <div class="card-content">
                                    <h3 class="software-name">${app.name}</h3>
                                    <p class="software-description">${app.description}</p>
                                    <div class="card-action">
                                        <span>${actionText}</span>
                                        <i class='bx ${actionIcon} ${arrowClass}'></i>
                                    </div>
                                </div>
                            </div>
                        `;
            }).join('')}
                </div>
            `;
            container.appendChild(section);

            // Add Event Listeners
            filteredApps.forEach((app, index) => {
                const cardId = `card-${category.id}-${index}`;
                const cardElement = document.getElementById(cardId);

                if (cardElement) {
                    // 1. Handle Copy Actions (No overlay link for copies, so we need click/cursor)
                    if (app.action === 'copy') {
                        cardElement.style.cursor = 'pointer';
                        cardElement.addEventListener('click', (e) => {
                            if (e.target.tagName === 'A' || e.target.closest('a')) return;
                            copyToClipboard(app.copyText, cardElement);
                        });
                    }

                    // 2. Handle Inline Links Style (z-index)
                    // We need to make sure any links in the description sit ABOVE the overlay link
                    const inlineLinks = cardElement.querySelectorAll('.software-description a');
                    inlineLinks.forEach(link => {
                        link.style.position = 'relative';
                        link.style.zIndex = '10'; // Above overlay (z-index 1)
                        // No need for stopPropagation() because the overlay is a sibling, not a parent.
                        // Clicking this link will just work.
                    });

                    // 3. Handle Spotlight Effect (Mouse Move)
                    cardElement.addEventListener('mousemove', (e) => {
                        const rect = cardElement.getBoundingClientRect();
                        const x = e.clientX - rect.left;
                        const y = e.clientY - rect.top;
                        cardElement.style.setProperty('--mouse-x', `${x}px`);
                        cardElement.style.setProperty('--mouse-y', `${y}px`);
                    });
                }
            });
        }
    });

    if (container.innerHTML === '') {
        container.innerHTML = `
            <div style="text-align: center; color: var(--text-secondary); padding: 4rem;">
                <i class='bx bx-ghost' style="font-size: 3rem; margin-bottom: 1rem;"></i>
                <p>No apps found matching "${filterText}"</p>
            </div>
        `;
    }
}

// Initial Render
document.addEventListener('DOMContentLoaded', () => {
    // Set Year
    document.getElementById('year').textContent = new Date().getFullYear();

    // Optimized Parallax with requestAnimationFrame
    let mouseX = 0;
    let mouseY = 0;
    let scrollY = 0;
    let rafId = null;

    document.addEventListener('mousemove', (e) => {
        mouseX = (window.innerWidth / 2 - e.clientX) / 20;
        mouseY = (window.innerHeight / 2 - e.clientY) / 20;
        requestUpdate();
    });

    window.addEventListener('scroll', () => {
        scrollY = window.scrollY;
        requestUpdate();
    });

    function requestUpdate() {
        if (!rafId) {
            rafId = requestAnimationFrame(updateBlobPositions);
        }
    }

    function updateBlobPositions() {
        const blobs = document.querySelectorAll('.blob');
        blobs.forEach((blob, index) => {
            const mouseFactor = (index + 1) * 0.7;
            const scrollFactor = (index + 1) * 0.15;
            const translateX = mouseX * mouseFactor;
            const translateY = mouseY * mouseFactor + scrollY * scrollFactor;
            blob.style.transform = `translate(${translateX}px, ${translateY}px)`;
        });
        rafId = null;
    }

    // Render Categories
    renderCategories();

    // Search Functionality
    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('input', (e) => {
        renderCategories(e.target.value);
    });
    // Dynamic Updates
    updateDynamicUrls();

    // Tips Navigation
    const appsBtn = document.getElementById('appsBtn');
    const tipsBtn = document.getElementById('tipsBtn');
    const wallpapersBtn = document.getElementById('wallpapersBtn');
    const categoriesContainer = document.getElementById('categoriesContainer');
    const tipsContainer = document.getElementById('tipsContainer');
    const wallpapersContainer = document.getElementById('wallpapersContainer');
    const searchBar = document.querySelector('.search-bar-container');

    function showApps() {
        appsBtn.classList.add('active');
        tipsBtn.classList.remove('active');
        wallpapersBtn.classList.remove('active');
        categoriesContainer.classList.remove('hidden');
        tipsContainer.classList.add('hidden');
        wallpapersContainer.classList.add('hidden');
        searchBar.classList.remove('hidden');
        window.location.hash = '';
    }

    function showTips() {
        tipsBtn.classList.add('active');
        appsBtn.classList.remove('active');
        wallpapersBtn.classList.remove('active');
        tipsContainer.classList.remove('hidden');
        categoriesContainer.classList.add('hidden');
        wallpapersContainer.classList.add('hidden');
        searchBar.classList.add('hidden');
        window.location.hash = 'tips';

        // Only render if empty to prevent re-animation
        if (document.getElementById('checklistItems').children.length === 0) {
            renderTips();
        }
    }

    function showWallpapers() {
        wallpapersBtn.classList.add('active');
        appsBtn.classList.remove('active');
        tipsBtn.classList.remove('active');
        wallpapersContainer.classList.remove('hidden');
        categoriesContainer.classList.add('hidden');
        tipsContainer.classList.add('hidden');
        searchBar.classList.add('hidden');
        window.location.hash = 'wallpapers';

        // Only fetch if empty to prevent re-fetching
        if (document.getElementById('wallpapersGrid').children.length <= 1) { // 1 because of loading spinner
            fetchWallpapers();
        }
    }

    appsBtn.addEventListener('click', showApps);
    tipsBtn.addEventListener('click', showTips);
    wallpapersBtn.addEventListener('click', showWallpapers);

    // Initial Route
    if (window.location.hash === '#tips') {
        showTips();
    } else if (window.location.hash === '#wallpapers') {
        showWallpapers();
    }

    // Handle back button
    window.addEventListener('hashchange', () => {
        if (window.location.hash === '#tips') showTips();
        else if (window.location.hash === '#wallpapers') showWallpapers();
        else showApps();
    });

    // Checklist Initialization
    initTips();
});

async function fetchWallpapers() {
    const container = document.getElementById('wallpapersGrid');
    const repoOwner = 'Adish08';
    const repoName = 'deskmate';
    const path = 'Wallpapers';

    try {
        const response = await fetch(`https://api.github.com/repos/${repoOwner}/${repoName}/contents/${path}`);
        if (!response.ok) throw new Error('Failed to fetch wallpapers');

        const data = await response.json();

        // Filter for images
        const images = data.filter(item =>
            item.type === 'file' &&
            /\.(jpg|jpeg|png|webp|gif)$/i.test(item.name)
        );

        // Clear loading spinner
        container.innerHTML = '';

        if (images.length === 0) {
            container.innerHTML = `
                <div style="grid-column: 1 / -1; text-align: center; padding: 2rem;">
                    <p style="color: var(--text-secondary);">No wallpapers found in the repository.</p>
                </div>
            `;
            return;
        }

        images.forEach((img, index) => {
            const card = document.createElement('div');
            card.className = 'wallpaper-card';
            card.style.animation = `fadeIn 0.5s ease-out ${index * 0.1}s forwards`;
            card.style.opacity = '0'; // Start hidden for animation

            // Format size
            const sizeInMB = (img.size / (1024 * 1024)).toFixed(2);

            card.innerHTML = `
                <img src="${img.download_url}" alt="${img.name}" class="wallpaper-img" loading="lazy">
                <div class="wallpaper-overlay">
                    <div class="wallpaper-content">
                        <span class="wallpaper-name" title="${img.name}">${img.name}</span>
                        <span class="wallpaper-size">${sizeInMB} MB</span>
                    </div>
                    <a href="${img.download_url}" target="_blank" download class="wallpaper-download" title="Download">
                        <i class='bx bx-download'></i>
                    </a>
                </div>
            `;

            // Allow opening full image on click (excluding download button)
            card.addEventListener('click', (e) => {
                if (!e.target.closest('.wallpaper-download')) {
                    window.open(img.download_url, '_blank');
                }
            });

            container.appendChild(card);
        });

    } catch (error) {
        console.error('Error loading wallpapers:', error);
        container.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; color: #ff6b6b; padding: 2rem;">
                <i class='bx bx-error-circle' style="font-size: 2rem; margin-bottom: 0.5rem;"></i>
                <p>Failed to load wallpapers from GitHub.</p>
                <p style="font-size: 0.8rem; margin-top: 0.5rem; opacity: 0.8;">${error.message}</p>
            </div>
        `;
    }
}

const tipItems = [
    "Calibrate Display color and Font",
    "Disable Core Isolation",
    "Disable Language Bar",
    "Disable MS Edge tabs in Multitasking under System",
    "Disable Protected View of Microsoft Office",
    "Disable Restartable Apps",
    "Disable Sticky Keys",
    "Disable Stuff in 'MSConfig' (Increase Number Of Processors Under Advanced Options)",
    "Disable Touch Indicator",
    "Download Windows Terminal and Set Windows Terminal As default Console Host",
    "Enable Details Pane in File Explorer",
    "Enable Multi-lingual Text Suggestions",
    "Increase Cursor Pointer size",
    "Increase Font Text Size",
    "Install Hindi Keyboard",
    "Performance Options aka Visual Effects (Environmental Variable)",
    "Remove Optional Features",
    "Rename The Recycle Bin :)",
    "Turn on Device Discovery",
    "Turn Throughput Booster 'On' and set Preferred Band to '5Ghz'"
];

function initTips() {
    const today = new Date().toISOString().split('T')[0];
    const lastDate = localStorage.getItem('tips_last_date');

    if (lastDate !== today) {
        localStorage.setItem('tips_last_date', today);
        localStorage.removeItem('tips_checked');
    }
}

function getCheckedTips() {
    const checked = localStorage.getItem('tips_checked');
    return checked ? JSON.parse(checked) : {};
}

function toggleTip(index, element) {
    const checked = getCheckedTips();
    checked[index] = !checked[index];
    localStorage.setItem('tips_checked', JSON.stringify(checked));

    if (element) {
        element.classList.toggle('checked');
    }
}

function renderTips() {
    const container = document.getElementById('checklistItems');
    const checked = getCheckedTips();

    container.innerHTML = tipItems.map((tip, index) => `
        <div class="checklist-item ${checked[index] ? 'checked' : ''}" onclick="toggleTip(${index}, this)">
            <div class="custom-checkbox">
                <i class='bx bx-check'></i>
            </div>
            <span>${tip}</span>
        </div>
    `).join('');
}

async function updateDynamicUrls() {
    // Helper to update app URLs from GitHub releases
    const updateAppUrl = async (repo, appName, categoryId, assetFilter) => {
        try {
            const response = await fetch(`https://api.github.com/repos/${repo}/releases/latest`);
            if (!response.ok) return;

            const data = await response.json();
            const asset = data.assets.find(assetFilter);

            if (asset) {
                const category = categories.find(c => c.id === categoryId);
                const app = category?.apps.find(a => a.name === appName);

                if (app) {
                    app.url = asset.browser_download_url;

                    // Update DOM
                    const appIndex = category.apps.indexOf(app);
                    const cardId = `card-${categoryId}-${appIndex}`;
                    const cardElement = document.getElementById(cardId);

                    if (cardElement) {
                        // Update any anchor tags within or the card itself if it's an anchor
                        if (cardElement.tagName === 'A') {
                            cardElement.href = asset.browser_download_url;
                        }

                        // Update the overlay link specifically
                        const overlayLink = cardElement.querySelector('.card-overlay-link');
                        if (overlayLink) {
                            overlayLink.href = asset.browser_download_url;
                        }

                        // Update any action links
                        const actionLink = cardElement.querySelector('.card-action');
                        if (actionLink && actionLink.tagName === 'A') {
                            actionLink.href = asset.browser_download_url;
                        }

                        cardElement.dataset.url = asset.browser_download_url;
                    }
                }
            }
        } catch (error) {
            console.error(`Failed to fetch release for ${appName}:`, error);
        }
    };

    // 1. Writing Tools (Utilities) -> Windows Zip
    await updateAppUrl(
        'theJayTea/WritingTools',
        'Writing Tools',
        'utilities',
        asset => asset.name.toLowerCase().includes('windows') && asset.name.toLowerCase().endsWith('.zip')
    );

    // 2. FaGram (Media) -> x64 Installer
    await updateAppUrl(
        'FajoX1/fagramdesktop',
        'FaGram',
        'media',
        asset => asset.name.toLowerCase().includes('x64_installer.exe')
    );


    // 4. BCUninstaller (System) -> Setup exe
    await updateAppUrl(
        'Klocman/Bulk-Crap-Uninstaller',
        'BCUninstaller',
        'system',
        asset => {
            const name = asset.name.toLowerCase();
            return name.includes('setup.exe') && !name.endsWith('.sig') && !name.includes('portable');
        }
    );

    // 5. GenP (Activators) -> Latest 'genp' Zip
    await updateAppUrl(
        'Cur10s1tyByt3/GenP',
        'GenP',
        'activators',
        asset => {
            const name = asset.name.toLowerCase();
            return name.includes('genp') && name.endsWith('.zip') && !name.includes('source');
        }
    );

    // 6. Winhance (Utilities) -> Installer exe
    await updateAppUrl(
        'memstechtips/Winhance',
        'Winhance',
        'utilities',
        asset => asset.name.toLowerCase().includes('installer.exe')
    );

    // 7. Office Installer (Activators) -> Zip
    await updateAppUrl(
        'YerongAI/Office-Tool',
        'Office Installer',
        'activators',
        asset => asset.name.toLowerCase().endsWith('.zip') && !asset.name.toLowerCase().includes('arm64')
    );
}
