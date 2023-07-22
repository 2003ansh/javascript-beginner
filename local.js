// console.log(localStorage)

// // set items in local storage.This means that you can store data in the browser and it will persist even after the browser window is closed.
// // it will store data in key value pair
// // localStorage.setItem('name', 'mario').here name is key and mario is value

// localStorage.setItem('name', 'mario');
// // localStorage.setItem('age', 50);
// // localStorage.setItem('name', 'luigi');
// // localStorage.setItem('age', 40);
// console.log(localStorage)
// // localStorage.setItem('id', '1234');

// // get data from local storage.this will return the value of the key
// console.log(localStorage.getItem('age'))

// // updating data.this means that if we want to update the value of the key then we can do it by using setItem method.this will update the value of the key.

// //remove item from local storage.this will remove the key value pair from the local storage
// // localStorage.removeItem('name');whre name is the key and it will remove the key value pair from the local storage.

// localStorage.removeItem('name')
// console.log(localStorage)

// // clear local storage.this will clear all the key value pair from the local storage
// localStorage.clear();
// console.log(localStorage)

//  // how to store array in local storage
//  // array of objects
//  // we can store array of objects in local storage by using JSON.stringify method.It will convert the array of objects into string and then we can store it in local storage.

 let vehicles = [{name: 'car', wheels: 4}, {name: 'bike', wheels: 2}, {name: 'cycle', wheels: 2}]

 console.log( vehicles)

 let stringofvechiles = JSON.stringify(vehicles)
    console.log(stringofvechiles)

    localStorage.setItem('vehicle', stringofvechiles)
    console.log(localStorage)
// localStorage.removeItem('vehicles')
    // get data from local storage in object form
    let storedata = localStorage.getItem('vehicle')
    console.log(typeof storedata)
    console.log(storedata)
    let objectofdata = JSON.parse(storedata)
    console.log(typeof objectofdata)
    console.log(objectofdata)
let i=0

    localStorage.setItem(`Activity${i}`, 'apple')

    