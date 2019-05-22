const electron = require('electron');
const url = require('url');
const path = require('path');

const {app, BrowserWindow} = electron;

console.log('Your App Path: + ', app.getAppPath());

let mainWindow;
// listen for app to be ready 
app.on('ready',function(){
    // create new window
    mainWindow = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true
        }
    });
    // load html 
    console.log('path: ', __dirname)
    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'mainWindow.html'),
        protocol: 'file:',
        slashes: true
    }));
});