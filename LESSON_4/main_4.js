//#I2XsG6f
// – створити функцію, яка обчислює та повертає площу прямокутника зі сторонами  а і б

function areaRectangle(a, b) {
    return a*b;
}

console.log(areaRectangle(2, 2));

//#ETGAxbEn8l
// – створити функцію, яка обчислює та повертає площу кола з радіусом r

function areaCircle(r) {
    return 3.14 * r *r;
}

console.log(areaCircle(2));

//#Mbiz5K4yFe7
// – створити функцію, яка обчислює та повертає площу циліндру висотою h, та радіусом r

function areaCylinder(r, h) {
    return 3.14 * r *r * h;
}

console.log(areaCylinder(2, 2));

//#SIdMd0hQ
// – створити функцію, яка приймає масив та виводить кожен його елемент


let array = [1, 2, 3, `vova`, `nazar`];


function getArray(array) {
    for (let arrayElement of array) {
        console.log(arrayElement);
    }
}

getArray(array);

//#59g0IsA
// – створити функцію, яка створює параграф з текстом та виводить його через document.write.
// Текст задати через аргумент

function getText(text) {
    document.write(`<p>${text}</p>`);
}

getText(`Nazar`);

//#hOL6126
//
// – створити функцію, яка створює ul з трьома елементами li та виводить його через document.write.
// Текст li задати через аргумент всім однаковий

function getLi(text) {
    document.write(`<lu>`);
    for (let i = 0; i < 3; i++) {
        document.write(`<li>${text}</li>`);
    }
    document.write(`</lu>`);
}

getLi(`Vova`);



//#0Kxco1edSN
// – створити функцію, яка створює ul з  елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл) та виводить його через document.write

function getLis(text, li) {
    document.write(`<lu>`);
    for (let i = 0; i < li; i++) {
        document.write(`<li>${text}</li>`);
    }
    document.write(`</lu>`);
}

getLis(`FOX`, 8);


//#gEFoxMMO
// – створити функцію, яка приймає масив примітивних елементів (числа,стрінги,булеві),
// та будує для них список (ul li) та виводить його через document.write

function getArrayLi(array) {
    document.write(`<lu>`);
    for (let element of array) {
        document.write(`<li>${element}</li>`);
    }
    document.write(`</lu>`);
}

getArrayLi(array);



//#bovDJDTIjt
// – створити функцію, яка приймає масив об’єктів з наступними полями id,name,age , та виводить їх в документ.
// Для кожного об’єкту окремий блок.

let users = [
    {id: 1,name: `nazar`,age: 24},
    {id: 2,name: `vova`,age: 22}
];


function getUser(array) {
    for (let arrayElement of array) {
        document.write(`<div>${arrayElement.id} ${arrayElement.name} -  ${arrayElement.age}</div>`);
    }
}

getUser(users);


//#pghbnSB
// – створити функцію яка повертає найменьше число з масиву

let arrayNumbers = [1, 2, 3, -1, 6, 0];

function getMinNumber(array) {
    let min = array[0];
    for (let arrayElement of array) {
        if (arrayElement < min ){
            min = arrayElement;
        }

    }
    return min;
}

console.log(getMinNumber(arrayNumbers));

//#EKRNVPM
// – створити функцію sum(arr), яка приймає масив чисел, сумує значення елементів масиву та повертає його.
// Приклад sum([1,2,10]) //->13

 let sum = [1, 2, 10];


function getSumNumbers(numbers) {
    let basket = 0;
    for (let number of numbers) {
        basket = basket + number;
    }
    return basket;
}

console.log(getSumNumbers(sum));



//#kpsbSQCt2Lf
// – створити функцію swap(arr,index1,index2). Функція міняє місцями значення у відповідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]

let arr = [11,22,33,44];


function swap (arr,index1,index2){
    let temp = arr[index1]; // temp = 11
    arr[index1] = arr[index2];
    arr[index2] = temp;
}


swap(arr,0,1);
console.log(arr);



//#mkGDenYnNjn.html
//  Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:’USD’,value:25},{currency:’EUR’,value:42}],’USD’) // => 400


function exchange(sumUAH,currencyValues,exchangeCurrency) {
    for (const currencyValue of currencyValues) {
        if (currencyValue.currency === exchangeCurrency) {
            return  sumUAH / currencyValue.value
        }

    }
}


console.log(exchange(10000, [{currency: `USD`, value: 25}, {currency: `EUR`, value: 42}], `USD`));