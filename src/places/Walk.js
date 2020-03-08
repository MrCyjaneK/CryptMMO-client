import React from 'react';
import { useState } from 'react';
import Button from '@material-ui/core/Button';

//TODO:
// User should be able to take 50 steps daily,
//if user is taking a step he can get:
//    - Experience
//    - Money (Crypt)
//    - Items \
//    - Enemy  \
//    - ?????   \___ To 3 of them, user should be able to select if he want it or not.


const backgrounds = shuffle([
    "/images/general/winter-1.jpg",
    "/images/general/winter-2.jpg"
])

export default function Walk() {
    const [text, setText] = useState("");
    const [buttonText, setButtonText] = useState("Take a step");
    const [buttonEnabled, setButtonEnabled] = useState(1);
    return (
        <div>
            <img alt="" src={backgrounds[0]} width={window.innerWidth-50} />
            <p>{text}</p>
            <Button id="takeastepbtn" variant="contained" color="secondary" disabled={!buttonEnabled} onClick={(() => { takeAStep(setText,setButtonText,setButtonEnabled) })}>
                {buttonText}
            </Button>
        </div>
    )
}

function takeAStep(setText,setButtonText,setButtonEnabled) {
    setText("This is some cool text that you wouldn't understand #TODO, make post() request here");
    // I KNOW THAT IT COULD BE DONE IN A LOOP OK?
    setButtonEnabled(0);
    setTimeout(() => {setButtonText(10)},0*1000)
    setTimeout(() => {setButtonText(9)} ,1*1000)
    setTimeout(() => {setButtonText(8)} ,2*1000)
    setTimeout(() => {setButtonText(7)} ,3*1000)
    setTimeout(() => {setButtonText(6)} ,4*1000)
    setTimeout(() => {setButtonText(5)} ,5*1000)
    setTimeout(() => {setButtonText(4)} ,6*1000)
    setTimeout(() => {setButtonText(3)} ,7*1000)
    setTimeout(() => {setButtonText(2)} ,8*1000)
    setTimeout(() => {setButtonText(1)} ,9*1000)
    setTimeout(() => {setButtonText(0)} ,10*1000)
    setTimeout(() => {setButtonEnabled(1)} ,11*1000)
    setTimeout(() => {setButtonText("Take another one")} ,11*1000)
}




// https://stackoverflow.com/a/6274381
/**
 * Shuffles array in place.
 * @param {Array} a items An array containing the items.
 */
function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}
