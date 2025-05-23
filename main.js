const { app, BrowserWindow } = require("electron");
const { autoUpdater } = require("electron-updater");

const NavigationWindow = () => {
  const window = new BrowserWindow({
    width: 600,
    height: 600,
    // titleBarStyle: "hidden",
  });
  window.loadFile("Renderer/template.html");

  mainWindow.webContents.on("did-finish-load", () => {
    autoUpdater.checkForUpdatesAndNotify();
  });
};

// AutoUpdater events
autoUpdater.on("update-available", () => {
  dialog.showMessageBox({
    type: "info",
    title: "Update available",
    message: "A new update is available. Downloading now...",
  });
});

autoUpdater.on("update-downloaded", () => {
  dialog
    .showMessageBox({
      type: "question",
      buttons: ["Restart", "Later"],
      defaultId: 0,
      message: "Update ready. Restart now?",
    })
    .then((returnValue) => {
      if (returnValue.response === 0) autoUpdater.quitAndInstall();
    });
});

app.whenReady().then(() => {
  NavigationWindow();
});
