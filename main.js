const { app, BrowserWindow, ipcMain, screen } = require('electron');
const path = require('node:path');

const wallpaperManager = require('./backend/wallpaper');
const dockManager = require('./backend/dock');

function createWindow() {
  const { width: screenWidth, height: screenHeight } = screen.getPrimaryDisplay().workAreaSize;
  const dockWidth = 650; // Increased width for more apps
  const dockHeight = 100;

  const win = new BrowserWindow({
    width: dockWidth,
    height: dockHeight,
    x: Math.floor((screenWidth - dockWidth) / 2),
    y: screenHeight - dockHeight, 
    frame: false,
    transparent: true,
    skipTaskbar: true,
    type: 'dock',
    alwaysOnTop: true,
    resizable: false,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: false,
      contextIsolation: true,
    }
  });

  win.loadFile('renderer/index.html');
  
  win.setAlwaysOnTop(true, 'screen-saver');
  win.setVisibleOnAllWorkspaces(true);
}

app.whenReady().then(() => {
  setTimeout(createWindow, 500);

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});

ipcMain.handle('change-wallpaper', async (event, imagePath) => {
  return await wallpaperManager.setWallpaper(imagePath);
});

ipcMain.handle('launch-app', (event, command) => {
  dockManager.launch(command);
});
