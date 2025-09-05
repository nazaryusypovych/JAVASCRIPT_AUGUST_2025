//Замикання

function userBulder(name, age) {
    let user = {name, age};

    return{
        getUser (){
                return user.name;
            },
        getAge (){
            return user.age;
        },
        setUser (age){
            return user.age = age;
        }
        }

    }


let user1 = userBulder(`nazar`, 55);


console.log(user1.getAge());
console.log(user1.getUser());



user1.setUser(25);
console.log(user1.getAge());



// Рекурсія - заміна циклу

function iterator(arr, i) {
    console.log(arr[i]);
    i++;
    if(i < arr.length){
        iterator(arr, i);
    }
}

iterator([1, 2, 3], 0);


// Рекурсія - розкладання масиву


let array = [1,2,3, 4, [55, 66, 77]];

let innerArray = [];

function flater(arr) {
    for (const element of arr) {
        if (Array.isArray(element)){
            flater(element);
        }else {
            innerArray.push(element);
        }
    }
}

flater(array);
console.log(innerArray);