import { app, BrowserWindow } from "electron";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
    },
  });

  win.loadFile("index.html");
};

const startApp = async () => {
  try {
    await app.whenReady();
    createWindow();
    console.log("App started on platform", process.platform);

    app.on("activate", () => {
      if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
      }
    });
  } catch (error) {
    console.error("Failed create window:", error);
  }
};

startApp();

app.on("window-all-closed", () => {
  console.log("App closed");
  if (process.platform !== "darwin") {
    app.quit();
  }
});

import("update-electron-app")();
