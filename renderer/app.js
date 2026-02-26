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

// Theme Switching Logic
const themeBtn = document.getElementById('theme-toggle');
const themes = ['theme-dark', 'theme-light', 'theme-vivid'];
let currentThemeIndex = 0;

themeBtn.addEventListener('click', () => {
    // Remove current theme class
    document.body.classList.remove(themes[currentThemeIndex]);
    
    // Cycle to next theme
    currentThemeIndex = (currentThemeIndex + 1) % themes.length;
    
    // Add new theme class
    document.body.classList.add(themes[currentThemeIndex]);
    
    console.log(`Theme changed to: ${themes[currentThemeIndex]}`);
});
