//#8Nmt60ZT
// – створити блок,
// – додати йому класи wrap, collapse, alpha, beta
// – додати стилі (довільні значення) : колір фону, колір тексту, розмір тексту
// – додати цей блок в body.
// – клонувати його повністю, та додати клон в body.


let div = document.createElement(`div`);
div.classList.add(`wrap`, `collapse`, `alpha`, `beta`);

div.innerText = `NAZAR`;

div.style.background = `red`;
div.style.color = `black`;
div.style.fontSize = `20px`;

document.body.appendChild(div);

let cloneDiv = div.cloneNode(true);
document.body.appendChild(cloneDiv);

//#OPLI89c9G
// – Є масив:
// [‘Main’,’Products’,’About us’,’Contacts’]
// Зробити ul в середині якої будуть лежати елементи масиву (кожен в своєму li)


let array = [`Main`,`Products`,`About us`,`Contacts`];

let ul = document.createElement(`ul`);
document.body.appendChild(ul);

for (const element of array) {
    let li = document.createElement(`li`);
    li.innerText = element;
    ul.appendChild(li);
}

//#jeBqHV525U5
// – Є масив
// let coursesAndDurationArray = [
//     {title: ‘JavaScript Complex’, monthDuration: 5},
//     {title: ‘Java Complex’, monthDuration: 6},
//     {title: ‘Python Complex’, monthDuration: 6},
//     {title: ‘QA Complex’, monthDuration: 4},
//     {title: ‘FullStack’, monthDuration: 7},
//     {title: ‘Frontend’, monthDuration: 4}
// ];
// Для кожного елементу масиву зробити блок, в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.

let coursesAndDurationArray = [
    {title: `JavaScript Complex`, monthDuration: 5},
    {title: `Java Complex`, monthDuration: 6},
    {title: `Python Complex`, monthDuration: 6},
    {title: `QA Complex`, monthDuration: 4},
    {title: `FullStack`, monthDuration: 7},
    {title: `Frontend`, monthDuration: 4}

];

for (const coursesAndDurationArrayElement of coursesAndDurationArray) {

    let div = document.createElement(`div`);
    div.innerText = `${coursesAndDurationArrayElement.title} - ${coursesAndDurationArrayElement.monthDuration}`

    document.body.appendChild(div);

}

//#Kx1xgoKy8
// – Є масив
// let coursesAndDurationArray = [
//     {title: ‘JavaScript Complex’, monthDuration: 5},
//     {title: ‘Java Complex’, monthDuration: 6},
//     {title: ‘Python Complex’, monthDuration: 6},
//     {title: ‘QA Complex’, monthDuration: 4},
//     {title: ‘FullStack’, monthDuration: 7},
//     {title: ‘Frontend’, monthDuration: 4}
// ];
//
// За допомоги скріпта для кожного елементу масиву зробити <div class=’item’> ,
// в якому буде <h1 class=’heading’>  з title  елементу, та <p class=’description’> з monthDuration елементу.
// Завдання робити через цикли.

let div2 = document.createElement(`div`);

document.body.appendChild(div2);

for (const coursesAndDurationArrayElement of coursesAndDurationArray) {
    let div = document.createElement(`div`);
    div.classList.add(`item`);
    div2.appendChild(div);

    let h1 = document.createElement(`h1`);
    h1.innerText = coursesAndDurationArrayElement.title;
    h1.classList.add(`heading`);

    let p = document.createElement(`p`);
    p.innerText = coursesAndDurationArrayElement.monthDuration;
    p.classList.add(`description`);

    div.append(h1, p);
}

//– Є масив coursesArray котрий лежить в arrays.js (на цей момент ви вже знаєте де він знаходиться)
// Створити для кожного елементу масиву свій блок, блок розділити блоками,
// в яких будуть зберігатись значення окремих властивостей, для властивості modules зробити список з елементами
// Приклад структури знаходиться у файлі example.png, який лежить в папці з поточним файлом

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

let div3 = document.createElement(`div`);
div3.classList.add(`course`)
document.body.appendChild(div3);


for (const course of coursesArray) {
    let h1 = document.createElement(`h1`);
    h1.innerText = course.title;

    let div1 = document.createElement(`div`);
    div1.classList.add(`information`);

    let div2 = document.createElement(`div`);
    div2.classList.add(`modules`);


    div3.append(h1, div1, div2)


    let monthDuration = document.createElement(`div`);
    monthDuration.innerText = course.monthDuration;

    let hourDuration = document.createElement(`div`);
    hourDuration.innerText = course.hourDuration;

    div1.append(monthDuration, hourDuration);

    let ul = document.createElement(`ul`);
    div2.appendChild(ul);


    for (const module of course.modules) {
        let li = document.createElement(`li`);
        li.innerText = module;
        ul.appendChild(li);
    }


}






