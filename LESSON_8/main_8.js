//#iz6emEsP2BA
// – є масив
// let coursesAndDurationArray = [
//     {title: ‘JavaScript Complex’, monthDuration: 5},
//     {title: ‘Java Complex’, monthDuration: 6},
//     {title: ‘Python Complex’, monthDuration: 6},
//     {title: ‘QA Complex’, monthDuration: 4},
//     {title: ‘FullStack’, monthDuration: 7},
//     {title: ‘Frontend’, monthDuration: 4}
// ];
//
// за допомогою map перетворити кожен елемент на наступний тип {id,title,monthDuration
// Зробити все ВИКЛЮЧНО за допомогою інлайн конструкції


let coursesAndDurationArray = [
    {title: `JavaScript Complex`, monthDuration: 5},
    {title: `Java Complex`, monthDuration: 6},
    {title: `Python Complex`, monthDuration: 6},
    {title: `QA Complex`, monthDuration: 4},
    {title: `FullStack`, monthDuration: 7},
    {title: `Frontend`, monthDuration: 4}
];


let mapCourses = coursesAndDurationArray.map((value, index) => {
    return {id: index+1, title: value.title, monthDuration: value.monthDuration};
})

console.log(mapCourses);


//#AiN5CoUQ
// Створити функцію, яка робить глибоку копію об’єкта.
// Додати перевірки на undefined, null, NaN.
// Подумати і реалізувати логіку, в якій кінцевий об’єкт буде мати функції, які в нього були до цього моменту.


let user = {
    name: `azar`,
    age: 25
}

// let strUser = JSON.stringify(user);
// console.log(strUser);
//
// let deepCopyUser = JSON.parse(strUser);
// console.log(deepCopyUser);


function getDeepCopy(object) {
    if(object !== undefined || null || NaN){
        return JSON.parse(JSON.stringify(object));
    }
}

console.log(getDeepCopy(user));

