const { exec } = require('child_process');
const util = require('util');
const execPromise = util.promisify(exec);

/**
 * Sets the wallpaper in KDE Plasma using plasma-apply-wallpaperimage
 * @param {string} imagePath 
 */
async function setWallpaper(imagePath) {
    try {
        // plasma-apply-wallpaperimage is the standard CLI for KDE Plasma 5.24+
        const { stdout, stderr } = await execPromise(`plasma-apply-wallpaperimage "${imagePath}"`);
        if (stderr) console.error('KDE Wallpaper Warning:', stderr);
        return { success: true, message: 'Wallpaper updated successfully' };
    } catch (error) {
        console.error('KDE Wallpaper Error:', error);
        return { success: false, error: error.message };
    }
}

module.exports = { setWallpaper };
