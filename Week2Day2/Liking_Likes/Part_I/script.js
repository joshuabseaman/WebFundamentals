console.log("page loaded...");

var likeAmount = document.querySelector("#total");

function liked(id) {
    element = document.querySelector(id);
    likeAmount.innerText ++;
}