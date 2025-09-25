//#LhSfdhM3

let sessionsListJSON = localStorage.getItem(`sessionsList`);
console.log(sessionsListJSON);

let sessionsList = JSON.parse(sessionsListJSON);
console.log(sessionsList);



let div = document.createElement(`div`);

div.innerText = `day ${sessionsList.day} - time ${sessionsList.time}`;

document.body.appendChild(div);
