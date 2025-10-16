console.log(`1`);


setTimeout(function (){
     console.log(`ads`);
 }, 1000);

console.log(`2`);






//THEN у Promise (вирішує візуальну складову)

// new Promise((resolve) => {
//     setTimeout(() =>{
//         let x= 1;
//         console.log(x);
//         resolve(x);
//     }, 1000)
// })
//
//
//     .then((x) =>{
//     return new Promise((resolve) => {
//         setTimeout(() =>{
//             x++
//             console.log(x);
//             resolve(x);
//         }, 1000);
//     });
//     })
//
//
//
//     .then((x) =>{
//         new Promise((resolve) => {
//             setTimeout(() =>{
//                 x++
//                 console.log(x);
//             }, 1000);
//         });
//     })



// resolve - викор. коли все добре, reject - викор. коли виникла помилка

// resolve - виступає мостом передачі між Promise на блок then
// reject - виступає мостом передачі між Promise, коли виникла помилка, на блок catch


new Promise((resolve, reject) => {
    setTimeout(() =>{
        let x= 1;
        console.log(x);
        resolve(x);
    }, 1000)
})
    .then((value) =>{
        return new Promise((resolve, reject) => {
            setTimeout(() =>{
                value++
                console.log(value);
                if (false){
                    reject (`oooooo`)
                }else {
                    resolve(value);
                }
            }, 1000);
        });
    })
    .catch(reason =>{ // true => помилка `oooooo`
        console.log(reason);

    })

    .then(value =>{ // false => значення resolve(value)
        console.log(value);

    })