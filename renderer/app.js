// App Launching Logic
document.querySelectorAll('.app-item').forEach(item => {
    item.addEventListener('click', () => {
        const cmd = item.getAttribute('data-cmd');
        window.linuxAPI.launchApp(cmd);
    });
});

// Wallpaper Logic
const wallpaperBtn = document.querySelector('.wallpaper-btn');
const wallpaperInput = document.getElementById('wallpaper-input');

wallpaperBtn.addEventListener('click', () => {
    wallpaperInput.click();
});

wallpaperInput.addEventListener('change', async (event) => {
    const file = event.target.files[0];
    if (file) {
        const response = await window.linuxAPI.setWallpaper(file.path);
        if (response.success) {
            console.log('Wallpaper Changed!');
        } else {
            console.error(response.error);
        }
    }
});

// Theme Logic with Persistence
const themeBtn = document.getElementById('theme-toggle');
const themes = ['theme-dark', 'theme-light', 'theme-vivid'];

// Load saved theme or default to dark
let savedTheme = localStorage.getItem('dock-theme') || 'theme-dark';
let currentThemeIndex = themes.indexOf(savedTheme);
document.body.className = savedTheme;

themeBtn.addEventListener('click', () => {
    // Remove current theme class
    document.body.classList.remove(themes[currentThemeIndex]);
    
    // Cycle to next theme
    currentThemeIndex = (currentThemeIndex + 1) % themes.length;
    let nextTheme = themes[currentThemeIndex];
    
    // Add new theme class and save to storage
    document.body.classList.add(nextTheme);
    localStorage.setItem('dock-theme', nextTheme);
    
    console.log(`Theme saved: ${nextTheme}`);
});
