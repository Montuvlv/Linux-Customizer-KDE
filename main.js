const { app, BrowserWindow, ipcMain, screen } = require('electron');
const path = require('node:path');
const { exec } = require('child_process');

// Backend functionality imports
const wallpaperManager = require('./backend/wallpaper');
const dockManager = require('./backend/dock');

function createWindow() {
  const { width: screenWidth, height: screenHeight } = screen.getPrimaryDisplay().workAreaSize;
  const dockWidth = 600;
  const dockHeight = 80;

  const win = new BrowserWindow({
    width: dockWidth,
    height: dockHeight,
    x: Math.floor((screenWidth - dockWidth) / 2),
    y: screenHeight - dockHeight - 20, // 20px offset from bottom
    frame: false, // Frameless
    transparent: true, // Transparent for glassy effect
    skipTaskbar: true, // Don't show in dock/taskbar
    type: 'dock', // Linux-specific window type hint
    alwaysOnTop: true,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: false,
      contextIsolation: true,
    }
  });

  win.loadFile('renderer/index.html');
  
  // Ensure it stays at the bottom when resizing or switching workspaces
  win.setAlwaysOnTop(true, 'screen-saver');
}

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});

// IPC Handlers for communication between Renderer and Backend
ipcMain.handle('change-wallpaper', async (event, imagePath) => {
  return await wallpaperManager.setWallpaper(imagePath);
});

ipcMain.handle('launch-app', (event, command) => {
  dockManager.launch(command);
});
