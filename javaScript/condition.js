if ("10" === 10) {
    console.log("if");
}
else if ("10" === "10") {
    console.log("if-else");
}
else {
    console.log("else");
}
/*
true && true = true
true && false = false
false && true = false
false && false = false

true || true = true
true || false = true
false || true = true
false || false = false
*/

const title = document.querySelector("#title");

const CLICKED_CLASS = "clicked";

function handleClick() {
    title.classList.toggle(CLICKED_CLASS);
}

function init() {
    title.addEventListener("click", handleClick);    
}

init();

