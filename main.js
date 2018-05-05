const {app, BrowserWindow} = require('electron')
  const path = require('path')
  const url = require('url')
  
  function createWindow () {
    const env = process.env.NODE_ENV.valueOf(); 
    // Create the browser window.
    win = new BrowserWindow({width: 800, height: 600})
    
    const pathUrl = url.format({
      pathname: env === 'development' ? 'localhost:8080' :  path.join(__dirname, 'public', 'index.html'),
      protocol: env === 'development' ? 'http:' : 'file:',
      slashes: true
    })

    // and load the index.html of the app.
    win.loadURL(pathUrl)

    // Open the DevTools.
    win.webContents.openDevTools()

  }
  
  app.on('ready', createWindow)