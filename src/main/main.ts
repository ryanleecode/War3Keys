import { format } from 'url';
import {
  default as installExtension,
  REACT_DEVELOPER_TOOLS,
  REDUX_DEVTOOLS,
} from 'electron-devtools-installer';

import { BrowserWindow, app } from 'electron';
import * as path from 'path';

const isDevelopment = process.env.NODE_ENV !== 'production';

if (isDevelopment) {
  require('electron-context-menu')({
    prepend: (params, browserWindow) => [
      {
        label: 'Rainbow',
        visible: params.mediaType === 'image',
      },
    ],
  });
  require('electron-debug')({ devToolsMode: 'undocked' });
}

let mainWindow;

async function createMainWindow() {
  const window = new BrowserWindow({
    webPreferences: {
      webSecurity: false,
    },
    show: false,
  });
  if (isDevelopment) {
    await installExtension(REACT_DEVELOPER_TOOLS);
    await installExtension(REDUX_DEVTOOLS);
    window.webContents.openDevTools();
    window.loadURL(`http://localhost:${process.env.ELECTRON_WEBPACK_WDS_PORT}`);
  } else {
    window.loadURL(
      format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file',
        slashes: true,
      }),
    );
  }

  window.on('closed', () => {
    mainWindow = null;
  });

  window.webContents.on('devtools-opened', () => {
    window.focus();
    setImmediate(() => {
      window.focus();
    });
  });

  return window;
}

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', async () => {
  if (mainWindow === null) {
    mainWindow = await createMainWindow();
  }
});

app.on('browser-window-created', (e, window) => {
  window.setMenu(null);
});

app.on('ready', async () => {
  mainWindow = await createMainWindow();
  const splash = new BrowserWindow({
    title: 'War3Keys',
    width: 300,
    height: 350,
  });
  splash.loadURL(
    format({
      pathname: path.join(__dirname, 'splash.html'),
      protocol: 'file',
      slashes: true,
    }),
  );

  mainWindow.once('ready-to-show', () => {
    splash.destroy();
    mainWindow.show();
  });
});
