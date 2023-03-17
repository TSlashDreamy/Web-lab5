"use strict";

let alreadyDone = false;

// DOM elements
let copyright = document.getElementById("copyright");
let copyrightEl = document.getElementById("cop_text");
let ownerEl = document.getElementById("owner_text");

console.log(copyrightEl);
console.log(ownerEl);

// Content states
let copPreviousState = copyrightEl.textContent;
let ownPreviousState = ownerEl.textContent;

copyright.addEventListener("mouseover", () => {
    if (alreadyDone) return;

    copyright.style.opacity = 0;
    setTimeout(function(){
        copyrightEl.textContent = "Replicated by";
        ownerEl.textContent = "Chaika Taras | KNS-11";
        copyright.style.opacity = 1;
        alreadyDone = true;
        }, 200);
    console.log("in");
})

copyright.addEventListener("mouseout", () => {
    if (!alreadyDone) return;

    copyright.style.opacity = 0;
    setTimeout(function(){
        copyrightEl.textContent = copPreviousState;
        ownerEl.textContent = ownPreviousState;
        copyright.style.opacity = 1;
        alreadyDone = false;
    }, 200);
    console.log("out");
})
