import React from 'react';
import ReactDOM from 'react-dom';

import Home from '../places/Home.js';
import Castle from '../places/Castle.js';
import Shop from '../places/Shop.js';
import ShopCategory from '../places/ShopCategory.js';
import ShopShow from '../places/ShopShow.js';
import Bank from '../places/Bank.js';
import Quest from '../places/Quest.js';
import ShowInventoryItem from '../places/ShowInventoryItem.js';
import Hero from "../places/Hero.js";
import Inventory from "../places/Inventory.js";
import InventoryCategory from "../places/InventoryCategory.js";
import Battle from "../places/Battle.js";
import AttackUser from "../places/AttackUser.js";
import Walk from "../places/Walk.js";


import TheScanner_index from '../places/TheScanner/index.js';

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
    if (action === 'showinventoryitem') {
        ReactDOM.render(
            ShowInventoryItem(act.split(',')[1])
        , document.getElementById('gamecontent'));
        return true;
    }
    if (action === 'thescanner/index') {
        ReactDOM.render(
            <TheScanner_index />
        , document.getElementById('root')); // I think that it should be root/gamecontent...
        return true;
    }
    if (action === 'hero') {
        ReactDOM.render(
            <Hero />
        , document.getElementById('gamecontent'));
        return true;
    }
    if (action === 'inventory') {
        ReactDOM.render(
            <Inventory />
        , document.getElementById('gamecontent'));
        return true;
    }
    if (action === 'inventorycategory') {
        ReactDOM.render(
            InventoryCategory(act.split(',')[1])
        , document.getElementById('gamecontent'));
        return true;
    }
    if (action === 'battle') {
        ReactDOM.render(
            <Battle />
        , document.getElementById('gamecontent'));
        return true;
    }
    if (action === 'attackuser') {
        ReactDOM.render(
            <AttackUser id={act.split(',')[1]} />
        , document.getElementById('gamecontent'));
        return true;
    }
    if (action === 'walk') {
        ReactDOM.render(
            <Walk />
        , document.getElementById('gamecontent'));
        return true;
    }
    return false;
}
