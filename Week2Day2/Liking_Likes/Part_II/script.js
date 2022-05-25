console.log("page loaded");

var firstpost = document.querySelector("#post-1");
var secondpost = document.querySelector("#post-2");
var thirdpost = document.querySelector("#post-3");

function likedNeil(id) {
    element = document.querySelector(id);
    firstpost.innerText ++;
}

function likedNichole(id) {
    element = document.querySelector(id);
    secondpost.innerText ++;
}

function likedJim(id) {
    element = document.querySelector(id);
    thirdpost.innerText ++;
}