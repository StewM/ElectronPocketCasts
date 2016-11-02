const electron = require('electron')
// Module to control application life.
const app = electron.app
// Module to create native browser window.
const BrowserWindow = electron.BrowserWindow
// Module to register and use global shortcuts
const globalShortcut = electron.globalShortcut

const path = require('path')
const url = require('url')


// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow

function createWindow () {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    width: 1024,
    height: 720,
    webPreferences: {
      nodeIntegration: false,
      webSecurity: false,
      allowRunningInsecureContent: true,
      allowDisplayingInsecureContent: true
    }
  })

  // and load the index.html of the app.
  mainWindow.loadURL('http://play.pocketcasts.com/web')

  // Play/Pause button
  const playPause = globalShortcut.register('MediaPlayPause', () => {
    console.log('MediaPlayPause is pressed')
  })

  if (!playPause) {
    console.log('MediaPlayPause registration failed')
  }

  // Stop Button
  const stop = globalShortcut.register('MediaStop', () => {
    console.log('MediaStop is pressed')
  })

  if (!stop) {
    console.log('MediaStop registration failed')
  }

  // Next Track Button
  const nextTrack = globalShortcut.register('MediaNextTrack', () => {
    console.log('MediaNextTrack is pressed')
  })

  if (!nextTrack) {
    console.log('MediaNextTrack registration failed')
  }

  // Previous Track Button
  const prevTrack = globalShortcut.register('MediaPreviousTrack', () => {
    console.log('MediaPreviousTrack is pressed')
  })

  if (!prevTrack) {
    console.log('MediaPreviousTrack registration failed')
  }

  // Open the DevTools.
  //mainWindow.webContents.openDevTools()

  // Emitted when the window is closed.
  mainWindow.on('closed', function () {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null
  })
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow()
  }
})

app.on('will-quit', () => {
  // Unregister all shortcuts.
  globalShortcut.unregisterAll()
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
