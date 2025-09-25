//#sH8c4er
// – Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript,
// зробіть так, щоб при натисканні на кнопку зникав елемент з id=”text”.

let div = document.createElement(`div`);
div.id = `text`;

div.style.width = `200px`;
div.style.height = `200px`;
div.style.background = `black`;


let button = document.createElement(`button`);
button.innerText = `BUTTON`;


document.body.append(div, button);


button.onclick = function (){
    div.removeAttribute('id');
}

//#j693ca8
// – створити інпут, який приймає вік людини, та кнопку, яка підтверджує дію. При натисканні на кнопку зчитати інформацію з
// інпуту та перевірити вік, чи менше він за 18, та повідомити про це користувача

let formAge = document.forms.age;

formAge.onsubmit = function (ev){
    ev.preventDefault();
    if (this.age.value <= 18){
        console.log(`менше 18`);
    } else {
        console.log(`більше 18`);
    }
}

//#ymAmN2xJ
// Створити форму з трьома полями для name, surname, age та кнопкою. При натисканні на кнопку зчитати дані з полів,
// та вивести об’єкт в документ.
// Іншими словами : заповнили форму, натиснули кнопку, під формою з’явився блок з вашим об’єктом

let formPerson = document.forms.person;

formPerson.onsubmit = function (ev){
    ev.preventDefault();

    let divPerson = document.createElement(`div`);
    divPerson.innerText = `${this.name.value} ${this.surname.value} - ${this.age.value}`;

    document.body.appendChild(divPerson);
}


//#2VaLt4vDczH
// є сторінка, на якій є блок, в кому знаходиться цифра. Написати код, який при кожному
// перезавантажені сторінки буде додавати до неї +1

let currentNumber = +localStorage.getItem(`number`);
currentNumber += 1;

localStorage.setItem(`number`, currentNumber);

document.getElementById(`number`).innerText = currentNumber;

//#LhSfdhM3
// Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховище,
// в масив sessionsList зберігається інформація про дату та час відвідування сторінки.
// Є  сторінка sessionsListPage.html (назва довільна), при відвідуванні якої потрібно відмалювати всю інформацію
// про відвідування сторінки index.html.
// Інфу НЕ виводити в консоль, а малювати в DOM

let date = new Date();
console.log(date);

let sessionsValue = {day: date.getDay(), time: date.getTime()};
console.log(sessionsValue);

let sessionsValueJSON = JSON.stringify(sessionsValue);
console.log(sessionsValueJSON);

localStorage.setItem(`sessionsList`, sessionsValueJSON);


//#Jg0gPO00
// створити конвертор ваги з кг в фунти. дані заповнюються через інпут.
// При введенні даних обрахунок стається миттєво, без натискань додаткових кнопок

let convertor = document.forms.convertor;

let divFt = document.getElementById(`ft`);

convertor.oninput = function (ev){
    ev.preventDefault();

    let ft = this.kg.value * 2.2;

    divFt.innerText = `${ft} FT`;

}

//#RbQGnH5DuC
// В localStorage зберігаються масиви. Вам потрібно зробити функцію, які дістає
// потрібний вам масив з localStorage та додає в нього об’єкт
// сигнатура функції –
// addToLocalStorage(arrayName:string,objToAdd:any{}):void

function addToLocalStorage(arrayName, objToAdd) {
    if (!localStorage.getItem(arrayName)){
        throw new Error(`no key in LS`);
    }

    let array = JSON.parse(localStorage.getItem(arrayName)); //дістаємо існуючий масив із ЛС за ключом
    array.push(objToAdd); //додаємо у масив новий елемент

    let arrayJSON = JSON.stringify(array); //переводимо оновлений (із новим елементом) масив у JSON
    localStorage.setItem(arrayName, arrayJSON); //додаємо оновлений масив у ЛС
}

addToLocalStorage(`sessionsList`, {name: `ggg`});

//#kUSgFqWY
//  Створити 3 інпута та кнопку. Один визначає кількість рядків, другий – кількість ячеєк, третій – вміст ячеєк.
// При натисканні кнопки вся ця інформація зчитується і формується табличка з відповідним вмістом.

let table = document.getElementById(`table`);


let tableForm = document.forms.tableform;


tableForm.onsubmit= function (ev) {
    ev.preventDefault();

    let lineValue = +tableForm.line.value;
    let columnValue = +tableForm.column.value;
    let informValue = tableForm.inform.value;

    for (let i = 0; i < lineValue; i++) {
        let tr = document.createElement(`tr`);

        for (let j = 0; j < columnValue; j++) {
            let td = document.createElement(`td`);
            td.innerText = informValue;
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
}



