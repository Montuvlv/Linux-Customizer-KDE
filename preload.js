const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('linuxAPI', {
  setWallpaper: (imagePath) => ipcRenderer.invoke('change-wallpaper', imagePath),
  launchApp: (command) => ipcRenderer.invoke('launch-app', command),
  selectFile: () => ipcRenderer.invoke('select-file'), // If we want to add an Electron dialog later
});
