const form = document.querySelector(".js-form");
const input = form.querySelector("input");
const greeting = document.querySelector(".js-greetings");

const USER_LOCALSTORAGE = "currentUser";
const SHOWING_CN = "showing";

function printGreeting(text) {
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerHTML = `Hello ${text}`;
}

function loadName() {
    const currentUser = localStorage.getItem(USER_LOCALSTORAGE);

    if (currentUser === null) {
        
    }
    else {
        printGreeting(currentUser);
    }
}

function init() {
    loadName();
}

init();