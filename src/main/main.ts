import * as url from 'url';
import {
  default as installExtension,
  REACT_DEVELOPER_TOOLS,
  REDUX_DEVTOOLS,
} from 'electron-devtools-installer';
import ElectronContextMenu from 'electron-context-menu';
import ElectronDebug from 'electron-debug';
import { BrowserWindow, app, Menu } from 'electron';
import * as path from 'path';
import { initSplashScreen, OfficeTemplate } from 'electron-splashscreen';
import isDev from 'electron-is-dev';
import {
  createSchemaLink,
  createIpcExecutor,
} from 'graphql-transport-electron';
import { ipcMain } from 'electron';
import { createSchema } from './server';
import { createConnection } from 'typeorm';
import { dbOptions } from './db.config';

declare const __static: string;

if (isDev) {
  ElectronContextMenu({
    prepend: () => [],
  });
  ElectronDebug({ devToolsMode: 'undocked' });
}

let mainWindow: BrowserWindow | null;

async function createMainWindow() {
  const window = new BrowserWindow({
    webPreferences: {
      nodeIntegration: true,
    },
    show: false,
    minWidth: 560,
    minHeight: 300,
  });

  if (isDev) {
    await installExtension(REACT_DEVELOPER_TOOLS);
    await installExtension(REDUX_DEVTOOLS);
    window.webContents.openDevTools();
    window.loadURL(`http://localhost:${process.env.ELECTRON_WEBPACK_WDS_PORT}`);
  } else {
    window.loadURL(
      url.format({
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
  if (!isDev) {
    Menu.setApplicationMenu(null);
  }
  const dbPath = !isDev
    ? app.getAppPath().replace('app.asar', 'war3keys.sqlite')
    : path.join(__dirname, '..', '..', 'war3keys.sqlite');
  const connection = await createConnection(dbOptions(dbPath, isDev));
  const em = connection.createEntityManager();

  const schema = createSchema(em);
  const link = createSchemaLink({ schema, context: () => ({}) });
  createIpcExecutor({ link, ipc: ipcMain });

  mainWindow = await createMainWindow();
  const hideSplashscreen = initSplashScreen({
    mainWindow,
    url: OfficeTemplate,
    width: 500,
    height: 300,
    productName: 'War3Keys',
    icon: path.join(__static, 'icon.png'),
    website: 'github.com/drdgvhbh/War3Keys',
    text: 'Initializing ...',
  });

  mainWindow.once('ready-to-show', () => {
    mainWindow!.show();
    if (!isDev) {
      mainWindow!.removeMenu();
    }
    hideSplashscreen();
  });
});
