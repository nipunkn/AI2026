

const { BrowserWindow } = require("electron");
const path = require("path");

let mainWindow;

function createMainWindow() {
  mainWindow = new BrowserWindow({
    width: 460,
    height: 680,
    resizable: false,
    frame: false,              
    backgroundColor: "#000000",
    show: false,               
    webPreferences: {
      preload: path.join(__dirname, "../app/preload.js"),
      contextIsolation: true,
      nodeIntegration: false
    }
  });

  mainWindow.loadFile(path.join(__dirname, "../app/index.html"));

  
  mainWindow.once("ready-to-show", () => {
    mainWindow.show();
  });

  
  mainWindow.on("closed", () => {
    mainWindow = null;
  });

  return mainWindow;
}

function getMainWindow() {
  return mainWindow;
}

module.exports = {
  createMainWindow,
  getMainWindow
};
