const { app, BrowserWindow } = require("electron");

const NavigationWindow = () => {
  const window = new BrowserWindow({
    width: 600,
    height: 600,
    titleBarStyle: "hidden",
  });
  window.loadFile("Renderer/template.html");
};

app.whenReady().then(() => {
  NavigationWindow();
});
