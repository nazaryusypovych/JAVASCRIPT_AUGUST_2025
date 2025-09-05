//#dFeorS3m7u
// – Знайти та вивести довжину наступних стрінгових значень
//  ‘hello world’
// ‘lorem ipsum’
// ‘javascript is cool’



let a =`hello world`;
console.log(a.length);

let b = `lorem ipsum`;
console.log(b.length);

let c = `javascript is cool`;
console.log(c.length);

//#8lld9HMxXWB
// – Перевести до великого регістру наступні стрінгові значення
//       ‘hello world’, ‘lorem ipsum’, ‘javascript is cool’


console.log(a.toUpperCase());
console.log(a);

console.log(b.toUpperCase());
console.log(b);

console.log(c.toUpperCase());
console.log(c);

//#ClDsAm7xba7
// – Перевести до нижнього регістру наступні стрінгові значення
//       ‘HELLO WORLD’, ‘LOREM IPSUM’, ‘JAVASCRIPT IS COOL’

let aa = `HELLO WORLD`;
let bb = `LOREM IPSUM`;
let cc = `JAVASCRIPT IS COOL`;


console.log(aa.toLowerCase());
console.log(aa);

console.log(bb.toLowerCase());
console.log(bb);

console.log(cc.toLowerCase());
console.log(cc);

//#0b89BkYZwu
// – Є “брудна” стрінга let str = ‘ dirty string   ‘ . Почистити її від зайвих пробілів.

let str = ` dirty string   `;

console.log(str.length);

let str2 = str.substring(1,13);
console.log(str2.length);
console.log(str2);
console.log(str.length);

//#bfoJuse4ZzP
// – Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = ‘Ревуть воли як ясла повні’;
//     let arr = stringToarray(str); [‘Ревуть’, ‘воли’, ‘як’, ‘ясла’, ‘повні’]

let str3 = `Ревуть воли як ясла повні`;

stringToarray = (str) => str.split(` `);

let arr = stringToarray(str3);
console.log(arr);

//#Rbr5kEQ
// – є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об’єкти в масиві на стрінгові.

let arrayNumber = [10,8,-7,55,987,-1011,0,1050,0];

let arrayStringNumber = arrayNumber.map(value => value + ``);
console.log(arrayStringNumber);

//#5hqyKTfmc
// – створити функцію sortNums(array,direction), яка приймає масив чисел, та сортує його від більшого до меншого,
// або навпаки  – залежно від значення аргументу direction.
// let nums = [11,21,3];
// sortNums(nums,’ascending’) // [3,11,21]
// sortNums(nums,’descending’) // [21,11,3]

let nums = [11,21,3];


sortNums = (array,direction) =>{
    if (direction === `ascending`){
        array.sort((a, b) => a-b);

    }else if (direction === `descending`){
        array.sort((a, b) => b-a);
    }
}



sortNums(nums,`ascending`);
console.log(nums);

sortNums(nums,`descending`);
console.log(nums);

//#yo06d74c1C
// – є масив
//
// let coursesAndDurationArray = [
//
//     {title: ‘JavaScript Complex’, monthDuration: 5},
//
//     {title: ‘Java Complex’, monthDuration: 6},
//
//     {title: ‘Python Complex’, monthDuration: 6},
//
//     {title: ‘QA Complex’, monthDuration: 4},
//
//     {title: ‘FullStack’, monthDuration: 7},
//
//     {title: ‘Frontend’, monthDuration: 4}
//
// ];
//
//  — відсортувати його за спаданням за monthDuration
//  — відфільтрувати, залишивши тільки курси з тривалістю понад 5 місяців
//  — за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}

let coursesAndDurationArray = [
    {title: `JavaScript Complex`, monthDuration: 5},
    {title: `Java Complex`, monthDuration: 6},
    {title: `Python Complex`, monthDuration: 6},
    {title: `QA Complex`, monthDuration: 4},
    {title: `FullStack`, monthDuration: 7},
    {title: `Frontend`, monthDuration: 4}
];

//  — відсортувати його за спаданням за monthDuration
let sortMonthDuration = coursesAndDurationArray.sort((a, b) =>{
    return b.monthDuration - a.monthDuration
});
console.log(sortMonthDuration);


// — відфільтрувати, залишивши тільки курси з тривалістю понад 5 місяців
let filterCurse = coursesAndDurationArray.filter(value => {
    return value.monthDuration > 5
});
console.log(filterCurse);


//  — за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
let mapCurse = coursesAndDurationArray.map((value, index) => {
    return {title: value.title, monthDuration: value.monthDuration, id: index+1}
});
console.log(mapCurse);

//#4LJn7zBx
// взяти з arrays.js масив coursesArray
// –написати пошук всіх об’єктів, в яких в modules є sass
// –написати пошук всіх об’єктів, в яких в modules є docker

let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];

// –написати пошук всіх об’єктів, в яких в modules є sass
let findSass = coursesArray.filter(value => value.modules.includes(`sass`));
console.log(findSass);

// –написати пошук всіх об’єктів, в яких в modules є docker
let findDocker = coursesArray.filter(value => value.modules.includes(`docker`));
console.log(findDocker);

//#bolvdlhP
//
//  описати колоду карт (від 6 до туза без джокерів). Більшу частину колоди можна описати з використанням циклу
//
// Після опису, використовуючи функції масивів:
//
//  – знайти піковий туз
//
//  – всі шістки
//
//  – всі червоні карти
//
//  – всі буби
//
//  – всі трефи від 9 та більше
//
//
//
// Приклад моделі об’єкту карти:
//
// {
//
//     cardSuit: ”, // ‘spade’, ‘diamond’,’heart’, ‘clubs’
//
//     value: ”, // ‘6’-’10’, ‘ace’,’jack’,’queen’,’king’
//
//     color:”, // ‘red’,’black’


let cardSuit= [ `spade`, `diamond`,`heart`, `clubs`];

let cardValue = [`6`, `7`, `8`, `9`, `10`, `ace`,`jack`,`queen`,`king`];



let cards = [];


for (const value of cardValue) {
    for (const suit of cardSuit) {
        let color = ``;
        if (suit === `spade` || suit === `clubs`){
            color = `black`;
        } else {
            color = `red`
        }
        cards.push({
            value: value,
            suit: suit,
            color: color
        });
    }
}

console.log(cards);

//– знайти піковий туз
let clubsAce = cards.filter(card => card.suit === `clubs` && card.value ===`ace`);
console.log(clubsAce);

//– всі шістки
let allSix = cards.filter(card => card.value ===`6`);
console.log(allSix);

//– всі червоні карти
let allRed = cards.filter(card => card.color ===`red`);
console.log(allRed);

//- всі буби
let allClubs = cards.filter(card => card.suit ===`clubs`);
console.log(allClubs);

//– всі трефи від 9 та більше
let someSpade = cards.filter(card => card.suit ===`spade` && card.value !== `6` && card.value !== `7` && card.value !== `8`);
console.log(someSpade);

//#EP5I1UUzAX
//
// Взяти описану колоду карт, та за допомогою reduce “упакувати” всі карти по “мастях” в об’єкт
//
// Приклад моделі кінцевого об’єкту
//
// {
//
//     spades:[],
//
//     diamonds:[],
//
//     hearts:[],
//
//     clubs:[]
//
// }

let reduceCard = cards.reduce((accumulator, card) =>{
    if(card.suit === `spade`){
        accumulator.spades.push(card);
    }else if(card.suit === `diamond`){
        accumulator.diamonds.push(card);
    }else if(card.suit === `heart`){
        accumulator.hearts.push(card);
    }else if(card.suit === `clubs`){
        accumulator.clubs.push(card);
    }
    return accumulator;
}, {spades:[], diamonds:[], hearts:[], clubs:[]});

console.log(reduceCard);

