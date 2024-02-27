const { app, BrowserWindow } = require('electron');

const createWindow = () => {
  const win = new BrowserWindow({
    width: 407,
    height: 600,
    autoHideMenuBar: true,
    icon: 'icon.png',
  });

  win.loadFile('index.html');
};

app.whenReady().then(() => {
  createWindow();
});
