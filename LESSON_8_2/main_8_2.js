//Оператор опціональної послідовності

let user = {
    name: 'jon',
    wife: {

    },

    foo: function (){}
}

user?.foo()?.name;

//ES6 Features

// - короткий запис, назва зовнвшньої змінної = назві внутрішньої змінної

let name = `nazar`;
let age = 24;

let person = {
    name,
    age
}
console.log(person);

// - деструктиризація бєкту: створення зовнішньої змінної

let person2 = {
    namePerson2: `vova`,
    agePerson2: 25,

    foo: function (){
        console.log(`foo`);
    }
}


let {namePerson2, agePerson2, foo} = person2;


console.log(namePerson2);
console.log(agePerson2);
foo();

// - деструктиризація бєкту: створення зовнішньої змінної при цьому змінюємо назву (посилання не змінне) змінної

let user2 = {
    name: 'jon',
    age: 25,
    wife: {
        name: `anna`
    },

    bar: function (){
        console.log(`bar`);
    }
}

let {name: nameUser2, age: ageUser2, wife: {name:nameWifeUser2}} = user2;

console.log(nameUser2);
console.log(ageUser2);
console.log(nameWifeUser2);

console.log(user2.name === nameUser2); //true

// Масиви

let numbers = [1, 2, 3];

let [a, b] = numbers;
console.log(a, b);



let numbers2 = [11, 22, 33];

let [aa, , bb] = numbers2;
console.log(aa, bb);


const users = [
    {
        name: 'Іван',
        age: 25
    },
    {
        name: 'Марія',
        age: 30
    },
    {
        name: 'Петро',
        age: 22
    },
    {
        name: 'Олена',
        age: 28
    },
    {
        name: 'Микола',
        age: 35
    }
];

console.log(users);

let [user11, user22] = users;
let {name: nameUser11, age: ageUser11} = user11;


console.log(user11);
console.log(user22);

console.log(nameUser11);
console.log(ageUser11);


// Spred - поверхнева копія


let user111 = {
    name: 'Alan',
    age: 35
}

let userCopy = {...user111};
console.log(userCopy);

// Prototyping

console.log({});
console.log({}.__proto__);


let user5 = {
    name: `lion`,
    age: 25
}

let copy = Object.create(user5);
console.log(copy);

console.log(copy.name);
console.log(copy.age);


copy.id = 1;
console.log(copy);

console.log(copy.hasOwnProperty(`name`)); // false (не належить copy)
console.log(copy.hasOwnProperty(`id`)); // true (належить copy)


copy.age = 30;
console.log(copy);

console.log(copy.hasOwnProperty(`age`)); // true ( тепер належить copy)

// Descriptors - дозволяє задавати для полів обєкта додаткову інформацію (характеристики)

let user6 = {
    firstName: `Taras`,
    lastName: 'Abramov'
}

user6.firstName = `Roman`;

for (let user6Key in user6) {
    console.log(user6Key);
}

console.log(user6.id = 0);

Object.defineProperty(user6, 'id',
    {
        value: 1, // значення ключа
        writable: true, // перевизначення ключа
        enumerable: true, // ітерація ключів
        configurable: true // застосування Descriptors знову
    }
)

console.log(user6.id)