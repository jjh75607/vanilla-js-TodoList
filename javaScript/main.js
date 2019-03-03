/*
alert('hello, World');
console.log('hello, World');

//변수를 초기화 하거나 생성할때 let
let a = 221;
let b = a - 5;
console.log(a, b);

//상수
const c = 1;
// c = 3; <-- error
// 왠만하면 const 키워드를 사용하여 식별자를 선언하고, 값이 변하는 식발자일 경우 let 키워드를 이용하여 선언하자.

//변수
const string = "문자열";
const boolean = true; //or false
const number = 1;
const float = 3.14;

console.log(string, boolean, number, float)

//배열 (값으로 변수, 숫자, 불리언 다 가능)
const test = "test";
const dayOfWeek = ["mon", "tue", "wed", "thu", "fri", "sat", "sun", 123, true, test];

console.log(dayOfWeek[0]); //월요일

//object, 안에 값으로 object or array도 가능
const info = {
    name: "name",
    age: 999,
    male: "male",
    alive: true,
};

info.name = "soon jae";
console.log(info.name);

//function
function hello(name) {
    return `my name is ${name}`;
}

const myName = hello("soon jae");

console.log(g);


const calculator = {
    plus: function(n1, n2)  {
        return n1 + n2;
    },
    minus: function(n1, n2) {
        return n1 - n2;
    },
    division: function(n1, n2) {
        return n1 / n2;
    },
    multiply: function(n1, n2) {
        return n1 * n2;
    }
}

const result = calculator.plus(4, 3);
console.log(result);
*/

const title = document.getElementById("title");
title.innerHTML = "change text";
title.style.color = "red";

title = document.querySelector("#title");
console.log(title);