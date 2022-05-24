console.log("page loaded...");

var username = document.querySelector("#username");
var requestAmount = document.querySelector("#requests");
var connectionAmount = document.querySelector("#connections");

function accept(id) {
    var element = document.querySelector(id);
    element.remove();
    requestAmount.innerText --;
    connectionAmount.innerText ++;
}

function decline(id) {
    var element = document.querySelector(id);
    element.remove();
    requestAmount.innerText --;
}

function edit() {
    username.innerText = "any other name";
}