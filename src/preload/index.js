import { contextBridge,ipcRenderer } from 'electron'
import { electronAPI } from '@electron-toolkit/preload'
const api = {}



if (process.contextIsolated) {
  try {
    contextBridge.exposeInMainWorld('electron',  electronAPI )
    contextBridge.exposeInMainWorld('api', api)


    contextBridge.exposeInMainWorld('key', {
      startKeystrokeCapture: () => {
        // Implementation in renderer.js
      },
      saveKeystrokeData: (data) => ipcRenderer.send('keystroke-data', data),
    });
    

  } catch (error) {
    console.error(error)
  }
} else {
  window.electron = electronAPI
  window.api = api
}
