import renderGameContent from './renderGameContent.js';
import renderDialog from './renderDialog.js';

export default function handleClick (clicked, action) {
    let todo = {
        "action": action.split(":")[0],
        "params": action.split(":")[1].split("|")
    }
    window.history.replaceState('handleClick()', 'CryptMMO:'+todo.action, '/'+todo.action+"➖param➰"+JSON.stringify(todo.params));
    if (todo.action === "render") {
        let resp = renderGameContent(todo.params[0]);
        if (resp === true) return null;
    }
    renderDialog("This feature is not yet implemented, try again in near future.\nDebug info:\n"+JSON.stringify(todo), "Not yet implemented");
}