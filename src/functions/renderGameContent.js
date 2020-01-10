//import React from 'react';
import ReactDOM from 'react-dom';

import Home from '../places/Home.js';
import Castle from '../places/Castle.js';
import Shop from '../places/Shop.js';
import ShopCategory from '../places/ShopCategory.js';
import ShopShow from '../places/ShopShow.js';
import Bank from '../places/Bank.js';
import Quest from '../places/Quest.js';

export default function renderGameContent (act) {
    let action = act.split(',')[0].toLowerCase();
    if (action === 'home') {
        ReactDOM.render(
            Home(act.split(',')[1])
        , document.getElementById('gamecontent'));
        return true;
    }
    if (action === 'castle') {
        ReactDOM.render(
            Castle(act.split(',')[1])
        , document.getElementById('gamecontent'));
        return true;
    }
    if (action === 'shop') {
        ReactDOM.render(
            Shop(act.split(',')[1])
        , document.getElementById('gamecontent'));
        return true;
    }
    if (action === 'shopcategory') {
        ReactDOM.render(
            ShopCategory(act.split(',')[1])
        , document.getElementById('gamecontent'));
        return true;
    }
    if (action === 'shopshow') {
        ReactDOM.render(
            ShopShow(act.split(',')[1])
        , document.getElementById('gamecontent'));
        return true;
    }
    if (action === 'bank') {
        ReactDOM.render(
            Bank()
        , document.getElementById('gamecontent'));
        return true;
    }
    if (action === 'quest') {
        ReactDOM.render(
            Quest()
        , document.getElementById('gamecontent'));
        return true;
    }
    return false;
}