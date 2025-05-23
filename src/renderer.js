//import * as tabs from './tabs.js'
import * as menus from './menus.js'

document.getElementById('tools-selector').childNodes.forEach(element => {
    element.addEventListener('click', () => {
        menus.select_icon(element);
        
        menus.loadmenu(element.childNodes[3].innerHTML);
    })
})