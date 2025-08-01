const { useState } = require("react");

let gameSeq = [];
let userSeq = [];

let btns = ["yellow", "red" , "purple", "green"]

let started = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function() {
    if (started == false) {
        console.log("Game is Started.");
        started = true;
        levelUp();
    }
})

function gameFlash(btn) {
    btn.classList.add("flash")
    setTimeout(function () {
        btn.classList.remove("flash")
    }, 1000);
}

function userFlash(btn) {
    btn.classList.add("userflash")
    setTimeout(function () {
        btn.classList.remove("userflash")
    }, 500);
}

function levelUp() {
    level++;
    h2.innerText = `Level ${level}`

    let randIdx = Math.floor(Math.random()*3);
    let randColor = btns[randIdx]
    let randBtn = document.querySelector(`.${randColor}`)
    // console.log(randIdx)
    // console.log(randColor)
    // console.log(randBtn)
    gameSeq.push(randColor)
    console.log(gameSeq)
    gameFlash(randBtn)
}

function checkAns() {
    // console.log("User level")
    let idx = level-1;

    if (userSeq[idx] == gameSeq[idx]) {
        if (userSeq.length == gameSeq.length){
            levelUp();
        }
        console.log("Same value");
    } else {
        h2.innerText = `Game Over! Press any key to Start Again.`
    }
}

function btnPress() {
    console.log(this)
    let btn = this
    userFlash(btn)
    
    userColor = btn.getAttribute("id");
    userSeq.push(userColor);

    checkAns();
}

let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns) {
    btn.addEventListener("click", btnPress)
}