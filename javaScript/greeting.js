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

function handleSubmit(event) {
    event.preventDefault();

    const currentValue = input.value;

    printGreeting(currentValue);
    saveName(currentValue);
}

function askForName() {
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit", handleSubmit);
}

function saveName(name) {
    localStorage.setItem(USER_LOCALSTORAGE, name);
}

function loadName() {
    const currentUser = localStorage.getItem(USER_LOCALSTORAGE);

    if (currentUser === null) {
        askForName();
    }
    else {
        printGreeting(currentUser);
    }
}

function init() {
    loadName();
}

init();
