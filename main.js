const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const fs = require('fs');


/** Artorias App 
 * settins ⚙️ 
 * moai🗿
 * tabs 📂🗂️📁
 * Calendrier🗓️
 * Convertisseur d'unité ⚖️
 * Clipboard manager📋
 * block note interpreteur markdown / tableau blanc 🖌️
 * integrer compilateur yuzu 🛠️
 * createur template projet 💾🧱
 * loggeur d'entrer user 🧮
 * visualisateur de structure de donnée 📊
 * gestionnaire de mots de passe crypter 🔐
 * 
 * Quand on lance l'app on arrive sur un dashboard
 * une barre en haut, la barre des onglet
 * un menu qui comme vscode, icon tu clique, gestion de l'outils
 * 
*/

const createWindow = () => {
    const win = new BrowserWindow({
        width: 1920,
        height: 1080,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
            contextIsolation: true,
            nodeIntegration: false,
            sandbox: true
        }
    });

    win.loadFile('src/index.html');
    win.setMenuBarVisibility(false);
}

app.whenReady().then(() => {
    createWindow();
    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })

})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})

ipcMain.handle('load-page', async (event, namemenu) => {
    const filepath = path.join(__dirname, "src/tools/" + namemenu + ".html");
    try {
        return fs.readFileSync(filepath, 'utf-8');
    } catch (err) {
        console.error("Error when reading file", err);
        return '<p>Error when reading file system :c</p>';
    }
})