const { app, BrowserWindow } = require("electron");

function createWindow() {
  // Create the browser window
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  // Load the index.html file
  win.loadFile("index.html");
}

// Event handler for when the app is ready
app.whenReady().then(createWindow);

// Quit the app when all windows are closed
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

// Create a new window if the app is activated but no windows are open
app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
