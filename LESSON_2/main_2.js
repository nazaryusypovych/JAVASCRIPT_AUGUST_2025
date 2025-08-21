//#67kfznmiMl
// – Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль

let array = [1, 2, 3, 4, `vavo`, `hi`, `dad`, true, false, `jon`];

console.log(array[0]);
console.log(array[1]);
console.log(array[2]);
console.log(array[3]);
console.log(array[4]);
console.log(array[5]);
console.log(array[6]);
console.log(array[7]);
console.log(array[8]);
console.log(array[9]);

console.log(array.length);


//#LARqoUj5I
// – Створити 3 об’єкти які описують книги. Поля об’єкту : title ,pageCount, genre.


let book1 = {
    title: 'Чума',
    pageCount: 256,
    genre: 'роман'
};

let book2 = {
    title: 'Острів скарбів',
    pageCount: 364,
    genre: 'роман'
};


let book3 = {
    title: 'Пуаро',
    pageCount: 278,
    genre: 'детектив'
};

console.log(book1);
console.log(book2);
console.log(book3);



//#sA3Gg1sCp
// – Створити 3 об’єкти, які описують книги. Поля об’єкту : title ,pageCount, genre, authors.
// Поле “автори” – являється  масивом. Кожен автор має поля name та age.


book1.author = {
    name: 'Альбер Камю',
    age: 57
};

console.log(book1);

book2.author = {
    name: 'Джек Олівер',
    age: 56
};

console.log(book2);

book3.author = {
    name: 'Агата Крісті',
    age: 78
};

console.log(book3);

//#jCHFnEbdmFd
//
// – Створити масив з 10 об’єктами, які описують сутніть “користувач”.
// Поля: name, username,password. Вивести в консоль пароль кожного користувача


let users = [
    {name: 'vova', username: `das`, password: 1258},
    {name: 'nazar', username: `kas`, password: 8725},
    {name: 'jon', username: `bes`, password: 6324},
    {name: 'sena', username: `kaka`, password: 7259},
    {name: 'tina', username: `riat`, password: 3589},
    {name: 'pol', username: `makal`, password: 1425},
    {name: 'leo', username: `pin`, password: 6398},
    {name: 'helen', username: `gob`, password: 8597},
    {name: 'nik', username: `quet`, password: 7123},
    {name: 'kiti', username: `dian`, password: 8792},
];


console.log(users[0]);
console.log(users[1]);
console.log(users[2]);
console.log(users[3]);
console.log(users[4]);
console.log(users[5]);
console.log(users[6]);
console.log(users[7]);
console.log(users[8]);
console.log(users[9]);



//#coYydZuaeEB
// – описати масив, в якому буде зберігатись інформація про температуру вранці, вдень і ввечері за термін в 7 днів.
// Як зробити цей масив – вам потрібно подумати. Нормальних варіантів опису – 2.
// Варіант, коли в вас буде одновимірний масив з 21 значенням виключаємо одразу

let temperWeek = [
    {morning: 8, afternoon: 22, evening: 9},
    {morning: 5, afternoon: 25, evening: 6},
    {morning: 3, afternoon: 16, evening: 10},
    {morning: 5, afternoon: 18, evening: 12},
    {morning: 8, afternoon: 19, evening: 10},
    {morning: 10, afternoon: 25, evening: 9},
    {morning: 11, afternoon: 20, evening: 8}
];


console.log(temperWeek);

//#bAUsaq6LI
// – Є змінна х, якій ви надаєте довільне числове значення.
// Якщо змінна x не дорівнює нулю, виведіть ‘Вірно’, інакше виведіть ‘Невірно’. Перевірте  скрипт при a, що дорівнює 1, 0, -3

let x = 0;

if (x !== 0){
   console.log(`Вірно`);
}else {
    console.log(`Невірно`);
}



//#3ckURgvs
// – Дано змінну time яка рівна числу від 0 до 59.
// Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю або четверту частину години).

let time = 55;

if(time >= 0 && time < 14){
    console.log(`1 чверть`);
} else if (time >= 15 && time < 29){
    console.log(`2 чверть`);
}else if (time >= 30 && time < 45) {
    console.log(`3 чверть`);
}else if (time >= 45 && time < 59){
    console.log(`4 чверть`);
};



//#UMoNq4biWGe
// – У змінній day дано якесь число від 1 до 31.
// Потрібно визначити, у яку половину (декаду) місяця потрапляє це число (у першу, другу чи третю).

let day = 11;

if(day >= 0 && day <= 10){
    console.log(`1 декада`);
} else if (day > 10 && day <= 20){
    console.log(`2 декада`);
}else if (day > 20 && time <= 31) {
    console.log(`3 декада`);
};


//#KzrtqyQ
// – Скласти розклад на тиждень за домопогою switch.
// Користувач вводить порядковий номер дня тижня і на екрані відображається інфа,
// що заплановано на цей день (можна замість плану на день, назву дня англійською).


let weekDay = 1;

switch (weekDay) {
    case 1:
        console.log(`Monday`);
        break
    case 2:
        console.log('Tuesday');
        break
    case 3:
        console.log(`Wednesday`);
        break
    case 4:
        console.log(`Thursday`);
        break
    case 5:
        console.log(`Friday`);
        break
    case 6:
        console.log(`Saturday`);
        break
    case 7:
        console.log(`Sunday`);
        break
};


//#uwsz1RnTQJ1
// – Користувач вводить або має два числа.
// Потрібно знайти та вивести максимальне число з тих двох .
// Також потрібно врахувати, коли введені рівні числа.

let number1 = 1;
let number2 = 2;

if (number1 > number2){
    console.log(number1);
}else if (number1 < number2){
    console.log(number2);
} else if (number1 === number2){
    console.log(`Рівні`);
};




//#iBvqtjEm
// – є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код, який
//  буде присвоювати змінній х значення “default”,  якщо ви намагаєтесь присвоїти в неї falsy-значення
//  (хибноподібні, тобто ті, які приводиться до false, а це 0 null undefined і тд).

let xx = 0;

if (xx === false || xx === 0 || xx === null || xx === undefined || xx === NaN){
    xx = `default`;
}

console.log(xx);




//#awLXL6TBzg
// з файлу arrays.js ( лежить у вкладеннях)  взяти масив coursesAndDurationArray.
// За допомогою іф перевірити кожен його елемент на тривалість навчання.
// У випадку, якщо тривалість довша за 5 місяців, вивести в консоль “Супер”.


let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

if ( coursesAndDurationArray[0][`monthDuration`] > 5){
    console.log(`Супер`);
} else {
    console.log(`Несупер`);
};

if ( coursesAndDurationArray[1][`monthDuration`] > 5){
    console.log(`Супер`);
} else {
    console.log(`Несупер`);
};

if ( coursesAndDurationArray[2][`monthDuration`] > 5){
    console.log(`Супер`);
} else {
    console.log(`Несупер`);
};

if ( coursesAndDurationArray[3][`monthDuration`] > 5){
    console.log(`Супер`);
} else {
    console.log(`Несупер`);
};

if ( coursesAndDurationArray[4][`monthDuration`] > 5){
    console.log(`Супер`);
} else {
    console.log(`Несупер`);
};

if ( coursesAndDurationArray[5][`monthDuration`] > 5){
    console.log(`Супер`);
} else {
    console.log(`Несупер`);
};