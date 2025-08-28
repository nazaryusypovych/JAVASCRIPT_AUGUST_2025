//#WpkK0ZH1
// –створити масив з:
// – з 5 числових значень
// – з 5 стічкових значень
// – з 5 значень стрічкового, числового та булевого типу
// – та вивести його в консоль


let array1 = [1, 2, 3, 4, 5];
console.log(array1);

let array2 = [`qq`, `ww`, `ee`, `rr`, `tt`];
console.log(array2);

let array3 = [1, 2, `ss`, `dd`, true];
console.log(array3);

//#4aDbSgh
// — Створити пустий масив. Наповнити його будь-якими значеннями, звертаючись до конкретного індексу. Вивести в консоль

let array = [];

array[array.length] = 1;
array[array.length] = 2;
array[array.length] = `fff`;
array[array.length] = true;


console.log(array);
console.log(array[1]);

//#qLQLJSeN7i
// – є масив [2,17,13,6,22,31,45,66,100,-18] :
// 1. перебрати його циклом while
// 2. перебрати його циклом for
// 3. перебрати циклом while та вивести  числа тільки з непарним індексом
// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
// 5. перебрати циклом while та вивести  числа тільки парні  значення
// 6. перебрати циклом for та вивести  числа тільки парні  значення
// 7. замінити кожне число, кратне 3, на слово “okten”
// 8. вивести масив у зворотньому порядку.
// 9. всі попередні завдання (окрім 8), але у зворотньому циклі (задом наперед)

let newArray = [2,17,13,6,22,31,45,66,100,-18];

//1

let i = 0;
while (i < newArray.length){
    console.log(newArray[i]);
    i++;
}

console.log(`----------`);

//2

for (let element of newArray) {
    console.log(element);
}

console.log(`----------`);

//3
let a = 0;
while (a < newArray.length){
    if (newArray[a] % 2 !== 0) {
        console.log(newArray[a]);
    }
    a++;
}

console.log(`----------`);

//4
for (let element of newArray) {
    if(element % 2 !== 0) {
        console.log(element);
    }
}

console.log(`----------`);

//5
let b = 0;
while (b < newArray.length){
    if (newArray[b] % 2 === 0) {
        console.log(newArray[b]);
    }
    b++;
}

console.log(`----------`);

//6
for (let element of newArray) {
    if(element % 2 === 0) {
        console.log(element);
    }
}
console.log(`----------`);

//7
for (i = 0; i < newArray.length; i++){
    if(newArray[i] % 3 === 0) { // 6, 45, 66, -18
        newArray[i] = 'okten';
    }
}

console.log(newArray);

// 8

let reverseNewArray = [];

for (i = newArray.length - 1; i >= 0; i--){ // Зворонтэ виведення масиву, без зміни оригінального масиву
    reverseNewArray.push(newArray[i]);
}

console.log(reverseNewArray);
