//#XjJuucOMR0
// – Створити функцію конструктор для об’єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об’єктами new User(….)


function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;

}

let user1 = new User(1, `nazar`, `ser`, `nazar@ukr.net`, 6245);
let user2 = new User(2, `jak`, `hat`, `jac@ukr.net`, 8974);
let user3 = new User(3, `pam`, `lio`, `pam@ukr.net`, 2587);
let user4 = new User(4, `rayan`, `gaz`, `rayan@ukr.net`, 1472);
let user5 = new User(5, `alan`, `nani`, `alan@ukr.net`, 5698);
let user6 = new User(6, `roman`, `fan`, `roman@ukr.net`, 2236);
let user7 = new User(7, `patrik`, `swan`, `patrik@ukr.net`, 6698);
let user8 = new User(8, `robert`, `hait`, `robert@ukr.net`, 3214);
let user9 = new User(9, `sia`, `drak`, `siat@ukr.net`, 1142);
let user10 = new User(10, `han`, `zag`, `han@ukr.net`, 5565);


let users = [];

users.push(user1);
users.push(user2);
users.push(user3);
users.push(user4);
users.push(user5);
users.push(user6);
users.push(user7);
users.push(user8);
users.push(user9);
users.push(user10);

console.log(users);

//#2ikXsE2WiKZ
// – Взяти масив з  User[] з попереднього завдання, та відфільтрувати, залишивши тільки об’єкти з парними id (filter)

let filterUser = users.filter(value => value.id %2 === 0);
console.log(filterUser);

//#pOeHKct
// – Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

let sortUser = users.sort((a, b) => b.id - a.id);
console.log(sortUser);

//#nkMXISv
// – створити конструктор для об’єктів Client з полями id, name, surname , email, phone, order
// (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об’єктами Client


function Client(id, name, surname, email, phone, order) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
    this.order = order;

}

let clients = [

    new Client(1, `nazar`, `ser`, `nazar@ukr.net`, 6245, [{title: `tv`, price: 10258}, {title: `phone`, price: 15879}]),
    new Client(2, `jak`, `hat`, `jac@ukr.net`, 8974, [{title: `computer`, price: 30987}, {title: `phone`, price: 15879}]),
    new Client(3, `pam`, `lio`, `pam@ukr.net`, 2587, [{title: `computer`, price: 40987}]),
    new Client(4, `rayan`, `gaz`, `rayan@ukr.net`, 1472, [{title: `phone`, price: 6879}]),
    new Client(5, `alan`, `nani`, `alan@ukr.net`, 5698, [{title: `phone`, price: 25987}]),
    new Client(6, `roman`, `fan`, `roman@ukr.net`, 2236, [{title: `tv`, price: 9258}, {title: `phone`, price: 21889}]),
    new Client(7, `patrik`, `swan`, `patrik@ukr.net`, 6698, [{title: `tv`, price: 8258}, {title: `phone`, price: 9889}]),
    new Client(8, `robert`, `hait`, `robert@ukr.net`, 3214, [{title: `phone`, price: 9889}]),
    new Client(9, `sia`, `drak`, `siat@ukr.net`, 1142, [{title: `phone`, price: 18887}]),
    new Client(10, `han`, `zag`, `han@ukr.net`, 5565, [{title: `phone`, price: 8741}])

]


console.log(clients);

//#8abtVjRv
// – Взяти масив (Client [] з попереднього завдання). Відсортувати його за кількістю товарів в полі order по зростанню. (sort)


let sortClients = clients.sort((a, b) => b.order.length - a.order.length);
console.log(sortClients);



//#vV9a6584I5
// – Створити функцію конструктор, яка дозволяє створювати об’єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість,
// об’єм двигуна. додати в об’єкт функції:
//     — drive () – яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//     — info () – яка виводить всю інформацію про автомобіль в форматі `назва поля – значення поля`
//     — increaseMaxSpeed (newSpeed) – яка підвищує значення максимальної швидкості на значення newSpeed
//     — changeYear (newValue) – змінює рік випуску на значення newValue
//     — addDriver (driver) – приймає об’єкт який “водій” з довільним набором полів, і додає його в поточний об’єкт car

function Car (model, producer, year, maxSpeed, EngineVolume){
    this.model = model;
    this.producer = producer;
    this.maxSpeed = maxSpeed;
    this.EngineVolume = EngineVolume;

    this.drive = function (){
        console.log(`їдемо зі швидкістю ${maxSpeed} на годину`);
    }

    this.info = function () {
        for (const element in this) {
            console.log(element, this[element]);
        }
    }

    this.increaseMaxSpeed = function (newSpeed) {
        this.maxSpeed = newSpeed;
    }

    this.changeYear = function (newValue) {
        this.EngineVolume = newValue;
    }

    this.addDriver = function (driver) {
        this.driver = driver;
    }

}

let car = new Car (`bmw`, `bmw-company`, 2015, 250, 2.5);
console.log(car);

car.drive();

car.info();

car.increaseMaxSpeed(260);
console.log(car);

car.changeYear(2020);
console.log(car);

car.addDriver([{name: 'nazar', age: 25}]);
console.log(car);


//#5kla3yMpgp
// – (Те саме, тільки через клас)
// Створити клас, який дозволяє створювати об’єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість,
// об’єм двигуна. додати в об’єкт функції:
//     — drive () – яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//     — info () – яка виводить всю інформацію про автомобіль в форматі `назва поля – значення поля`
//     — increaseMaxSpeed (newSpeed) – яка підвищує значення максимальної швидкості на значення newSpeed
//     — changeYear (newValue) – змінює рік випуску на значення newValue
//     — addDriver (driver) – приймає об’єкт, який “водій” з довільним набором полів, і додає його в поточний об’єкт car



class CarClass {

    constructor(model, producer, year, maxSpeed, EngineVolume) {
        this.model = model;
        this.producer = producer;
        this.maxSpeed = maxSpeed;
        this.EngineVolume = EngineVolume;

    }

    drive (){
        console.log(`їдемо зі швидкістю ${maxSpeed} на годину`);
    }

    info () {
        for (const element in this) {
            console.log(element, this[element]);
        }
    }

    increaseMaxSpeed (newSpeed) {
        this.maxSpeed = newSpeed;
    }

    changeYear (newValue) {
        this.EngineVolume = newValue;
    }

    addDriver (driver) {
        this.driver = driver;
    }

}


//#zg6Fifnqig
// – створити клас/функцію конструктор попелюшка з полями ім’я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Створити об’єкт класу “принц” за допомоги класу який має поля ім’я, вік, туфелька яку він знайшов.
// За допомоги циклу знайти, яка попелюшка повинна бути з принцом.
// ! Додатково, знайти необхідну попелюшку за допомогою функції масиву find та відповідного колбеку

class Cinderella {

    constructor(name, age, sizeFoot) {
        this.nane = name;
        this.age = age;
        this.sizeFoot = sizeFoot;
    }
}

let cinderellas = [
    new Cinderella(`anna`, 21, 31),
    new Cinderella(`alla`, 28, 32),
    new Cinderella(`eva`, 25, 33),
    new Cinderella(`diana`, 27, 34),
    new Cinderella(`katya`, 24, 35),
    new Cinderella(`fiona`, 28, 36),
    new Cinderella(`nina`, 23, 37),
    new Cinderella(`tina`, 26, 38),
    new Cinderella(`jesika`, 27, 39),
    new Cinderella(`yana`, 28, 40),

]

console.log(cinderellas);


class Prince {
    constructor(name, age, sizeFind) {

        this.nane = name;
        this.age = age;
        this.sizeFind = sizeFind;
    }
}

let prince = new Prince(`nazar`, 25, 37);

console.log(prince);



for (const cinderella of cinderellas) {
    if (cinderella.sizeFoot === prince.sizeFind){
        prince.wife = cinderella;
    }
}

console.log(prince);

let findCinderella = cinderellas.find(value => value.sizeFoot === prince.sizeFind);
console.log(findCinderella);

