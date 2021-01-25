import { app, BrowserWindow, screen } from "electron";
import * as path from "path";

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require("electron-squirrel-startup")) {
  // eslint-disable-line global-require
  app.quit();
}

const createWindow = () => {
  // Create the browser window.
  const { width, height } = screen.getPrimaryDisplay().workAreaSize;
  const displays = screen.getAllDisplays();

  let mainWindow = new BrowserWindow({
    width,
    height,
    fullscreen: true,
    frame: false,
    titleBarStyle: "hidden",
  });

  mainWindow.loadFile(path.join(__dirname, "../src/index.html"));

  const externalDisplay = displays.find(display => {
    return display.bounds.x !== 0 || display.bounds.y !== 0;
  });

  if (externalDisplay) {
    const win = new BrowserWindow({
      x: externalDisplay.bounds.x + 50,
      y: externalDisplay.bounds.y + 50,
      fullscreen: true,
      frame: false,
      titleBarStyle: "hidden",
    });
    win.loadFile(path.join(__dirname, "../src/secondary.html"));
  }

  // Open the DevTools.
  //mainWindow.webContents.openDevTools();

  mainWindow.on("close", () => {
    mainWindow = null;
    app.quit();
  });
};

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on("ready", createWindow);

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and import them here.

//attach event handler here

// Close on mouse move or keyboard entry