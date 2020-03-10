import React from 'react';
import ReactDOM from 'react-dom';
import ShowDrawer from './functions/ShowDrawer.js';
import 'typeface-roboto';
//import * as serviceWorker from './serviceWorker';
import renderGameContent from './functions/renderGameContent.js';
import SignIn from './places/SignIn.js';
import user from './functions/user.js';
import renderDialog from './functions/renderDialog.js';

try {
    let fetchedUser = user();
    if (fetchedUser.loggedin) {
        ReactDOM.render(
            <ShowDrawer />
        , document.getElementById('root'));
        renderGameContent('home');
    } else {
        ReactDOM.render(
            <SignIn />
            , document.getElementById('root'));
    }
} catch (e) {
    console.error(e);
    renderDialog("Error with initializing game roots, try cleaning cookies.", "Engine crashed!", 'alert');
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
