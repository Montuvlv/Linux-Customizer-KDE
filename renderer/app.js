document.querySelectorAll('.app-item').forEach(item => {
    item.addEventListener('click', () => {
        const cmd = item.getAttribute('data-cmd');
        window.linuxAPI.launchApp(cmd);
    });
});

const wallpaperBtn = document.querySelector('.wallpaper-btn');
const wallpaperInput = document.getElementById('wallpaper-input');

wallpaperBtn.addEventListener('click', () => {
    wallpaperInput.click();
});

wallpaperInput.addEventListener('change', async (event) => {
    const file = event.target.files[0];
    if (file) {
        // In a real Electron app, we'd get the absolute path
        // For this prototype, we're assuming path availability
        // Since input[type=file] usually gives a fake path for security,
        // we use this as a placeholder for the logic.
        const response = await window.linuxAPI.setWallpaper(file.path);
        if (response.success) {
            alert('Wallpaper Changed!');
        } else {
            console.error(response.error);
        }
    }
});
