const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('api', {
    loadmenu: async (namemenu) => {
        return await ipcRenderer.invoke('load-page', namemenu)
    }
})