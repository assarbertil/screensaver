"use strict";
exports.__esModule = true;
var electron_1 = require("electron");
var path = require("path");
// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require("electron-squirrel-startup")) {
    // eslint-disable-line global-require
    electron_1.app.quit();
}
var createWindow = function () {
    // Create the browser window.
    var _a = electron_1.screen.getPrimaryDisplay().workAreaSize, width = _a.width, height = _a.height;
    var displays = electron_1.screen.getAllDisplays();
    var mainWindow = new electron_1.BrowserWindow({
        // width,
        // height,
        fullscreen: true,
        frame: false,
        titleBarStyle: "hidden"
    });
    mainWindow.loadFile(path.join(__dirname, "../src/index.html"));
    var externalDisplay = displays.find(function (display) {
        return display.bounds.x !== 0 || display.bounds.y !== 0;
    });
    console.log(displays);
    // What is supposed to suport multiple monitors
    displays.forEach(function (v) {
        if (electron_1.screen.getPrimaryDisplay().id == v.id)
            return;
        var win = new electron_1.BrowserWindow({
            x: v.bounds.x,
            y: v.bounds.y,
            fullscreen: true,
            frame: false,
            titleBarStyle: "hidden"
        });
        win.loadFile(path.join(__dirname, "../src/secondary.html"));
    });
    // Open the DevTools.
    //mainWindow.webContents.openDevTools();
    // Close every window on single close
    mainWindow.on("close", function () {
        mainWindow = null;
        electron_1.app.quit();
    });
};
// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
electron_1.app.on("ready", createWindow);
// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
electron_1.app.on("window-all-closed", function () {
    if (process.platform !== "darwin") {
        electron_1.app.quit();
    }
});
electron_1.app.on("activate", function () {
    // On OS X it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (electron_1.BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});
// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and import them here.
