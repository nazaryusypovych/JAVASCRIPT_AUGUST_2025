
//Розширення конструкторів через prototype, підміна this через call /apply/ bind

function User (name, age){
    this.name = name;
    this.age = age;
}

// user1 = new User (`azar`, 25);
// console.log(user1);
//
// user1.greeting = function (){
//     console.log(`my name is ${this.name}`);
// }
// console.log(user1);
// user1.greeting();



//prototype

let user2 = new User (`vova`, 22);
console.log(user2);

User.prototype.greeting = function (arg){
    console.log(`${arg} my name is ${this.name}`);
}
console.log(user2);
user2.greeting(`hi`);



////підміна this через apply
let user3 = new User (`petro`, 33);
console.log(user3);

user3.foo = function (arg) {
    console.log(`${arg} my age is ${this.age}`);
}

user3.foo(`Hellow!`);

let user4 = new User (`roman`, 43);
console.log(user4);

user3.foo.apply(user4, [`olla!`]);




////підміна this через call
let user5 = new User (`alan`, 53);
console.log(user5);

user3.foo.call(user5, `Привіт!`);

////підміна this через bind
let user6 = new User (`xxx`, 11);
console.log(user6);

user6.bar = function (arg) {
    return `${arg} my age is ${this.age}`;
}


let user7 = new User (`fil`, 63);
console.log(user7);

let greetingCopi = user6.bar.bind(user7, `ПРИВЕТ`); // КОПІЯ ФУНКЦІЇ BAR

console.log(greetingCopi());
