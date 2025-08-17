//#dYQNrBV
// Створити змінні. Присвоїти кожному з них значення: ‘hello’,’owu’,’com’, ‘ua’, 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
// Вивести кожну змінну за допомогою: console.log

let q =`hello`;
let w = `owu`;
let e = `com`;
let r = `ua`;
let t = 1;
let y = 10;
let u = -999;
let i = 123;
let o = 3.14;
let p = 2.7;
let a = 16;
let s = true;
let d = false;


console.log(typeof q, q);
console.log(w);
console.log(e);
console.log(r);
console.log(typeof t, t);
console.log(y);
console.log(u);
console.log(i);
console.log(o);
console.log(p);
console.log(a);
console.log(typeof s, s);
console.log(d);

//#6Qb97gsv
// – Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ.
// З’єднати їх в одну змінну person (Не об’єкт, просто за допомогою конкатенації)


let firstName = `Nazar`;
let middleName = `Volodymirovych`;
let lastName = `Yusypovych`;

let person = `${firstName} ${middleName} ${lastName}`;
console.log(person);

//#4N0y5tufA
// – За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.

let aa = 100;
let bb = `100`;
let cc = true;

console.log(typeof aa);
console.log(typeof bb);
console.log(typeof cc);

//#ruUtWDUI
// Додаткове для тих, хто цікавився prompt`oм
// – За допомогою 3-х різних prompt() отримати 3 слова які являються вашими Імʼям, По-батькові та роками. Та вивести в консоль

let myName = prompt(`What is your name?`);
let myLastName = prompt(`What is your lastname?`);
let myAge = +prompt(`How old are you?`);


console.log(myName);
console.log(myLastName);
console.log(myAge );

