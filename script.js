// // console.log("Welcome bro")
// // var score = 34;
// // var score = 56;//redeclare
// // console.log(score)
// // let points = 23;
// // console.log(points)
// // const value = 50;
// // console.log(value)
// // console.log("hello coders")
// // let firstname = 'wow';
// // let lastname = 'momo'
// // console.log(firstname, lastname)
// // let fullname = firstname + lastname
// // console.log(fullname)
// // let fullName = `I want to  become ${firstname} ${lastname}`
// // console.log(fullName)
// // //getting string by character
// // console.log(fullName.toUpperCase())
// // console.log(lastname.indexOf("o"))
// // let hobbies = '      coding reading running';
// // console.log(hobbies)
// // let ressult = hobbies.trim()
// // console.log(ressult)
// // console.log(ressult.indexOf('g'))
// // console.log(ressult.lastIndexOf('abxd'))
// // let num = 10;
// // console.log(fullName + num)
// // let age = 55;
// // console.log(age == "55")
// // console.log(age === "55") //strict equality

// // //control flow
// // for (let i = 1; i <= 10; i++) {
// //     console.log("Run this task", i)
// // }

// // let dishes = ['biriyani', 'chana-chat', 'pani-poori'];
// // //access the array value
// // console.log(dishes[0])
// // for (let i = 0; i < dishes.length; i++) {
// //     console.log(dishes[i])
// // }
// // //iteration and value of i
// // // 0,1,2and so on
// // let j = 1
// // while (j <= 5) {
// //     console.log("while loop", j)
// //     j++;
// // }
// // console.log('***********************')
// // let k = 0
// // while (k < dishes.length) {
// //     console.log(dishes[k])
// //     k++;
// // }
// // console.log(dishes.length)
// // // if else ,else if
// // let budget = 7000;
// // if (budget > 8000) {
// //     console.log("yes")
// // }
// // else if (budget > 6000) {
// //     console.log('ok')
// // }
// // else { console.log('no') }
// // // logical operators &&,noot !, or ||
// // console.log('********************//////////////**************')
// // let password = "anshuman@2003"
// // if (password.length >= 5 && password.includes('@')) {
// //     console.log("passowrd is strong")
// // }
// // else[console.log('passwoed id weak')]

// // // FUNCTIONS
// // console.log('************************FUNCTION************************')
// // function nameoffunction() {
// //     let an = 'hyy i am anshuman'
// //     console.log("you are running code present inside the function")
// //     return an;
// // }
// // x = nameoffunction()
// // console.log(x)

// // //function expression
// // let fun = function () {
// //     console.log('this is an example of function expression')
// // }
// // fun()
// // //passing values (arguments and parameters)
// // let invitation = function (name = 'deafault', time = 'night') {
// //     console.log(`Welcome ${name} you are invited at ${time}`)
// // }
// // invitation('anshuman', 'night')
// // invitation('anshuman', 8)
// // // arrow function
// // let invitations = name => `welcome ${name} to this event`
// // console.log(invitations('coders'))
// // // high order function

// // let uppercase = function (str) {
// //     return str.toUpperCase();
// // }
// // let lowercase = function (str) {
// //     return str.toLowerCase();
// // }
// // let transformer = function (str, fn_name) {
// //     return fn_name(str);
// // }
// // console.log(transformer('hello', uppercase))
// // console.log(transformer('HELLO', lowercase))
// // //Function returning another function
// // let compliment = function (msg) {
// //     //console.log(msg)
// //     return function (name) {
// //         console.log(`${msg} ${name}`)
// //     }
// // }
// // o = compliment('you are a good codder');
// // console.log(o)
// // o('name')
// // // Set time out and setInterval
// // // setTimeout(functionname,delay,arg1,arg2,...)
// // console.log('/************setTimeOut and Setinterval*********/')
// // function greeting(name1) {
// //     console.log(`Welcome ${name1} to our coder dost family`)
// //     //return 5;
// // }

// // //setTimeout(greeting,5000,'anshuman') //5000 = 5sec
// // //console.log(c)

// // // setInterval(functionname,delay,arg1,arg2,..)----> it is used to print many times after a uniform delay.
// // //setInterval(greeting,3,'tapu')
// // // objects
// // console.log('/*Introduction to objects in javascript***********/')
// // let car = {
// //     color: 'black',
// //     model: '2022',
// //     company: 'honda'
// // }
// // console.log(car);
// // //Accesing the javvascript object properties
// // console.log(car['color']);
// // console.log(car['company']);
// // console.log(car.model)
// // let proprtyname = 'color'
// // console.log(car[proprtyname])
// // // Modifya the object 
// // car.color = 'red';
// // car.model = 8795;
// // console.log(car)
// // console.log(car[proprtyname])
// // //Delete properties of object
// // let obj1 = {
// //     prop1: 'value1',
// //     prop2: 'value2',
// //     prop3: 'value3',
// // }
// // console.log(obj1)
// // delete obj1['prop1']
// // console.log(obj1)
// // // method and object
// // let person = {
// //     agecalculator: function (birthyear = 2008) {
// //         let age = 2023 - birthyear;
// //         return age;
// //     }
// // }
// // console.log(person.agecalculator(2003))

// // // this keyword
// // let Person = {
// //     firstname: 'Anshuman nayak',
// //     lastname: 'nayak',
// //     city: 'ctc',
// //     dob: 2003,
// //     education: 'web dev',
// //     getseummary: function () {
// //         return `${this.firstname} ${this.lastname} - dob:${this.dob} lives in ${this.city} education qualification is:${this.education}`
// //     }
// // }
// // console.log(Person.getseummary())
// // Person.city = 'bbsr'
// // delete Person['dob']
// // console.log(Person.getseummary())
// // //forEach method of array

// // let food = ['biriyani', 'roll', 'bara'];
// // for (let i = 0; i < food.length; i++) {
// //     console.log(food[i])
// // }

// // food.forEach(function (elemt) {
// //     console.log(elemt)
// // })

// // //obj inside array
// let blocklist = [{ username: 'anshuman', reason: 'smart' }, { username: 'john', reason: 'copy' }];
// console.log(blocklist);
// console.log('/***************************/')

// for (let i = 0; i < blocklist.length; i++) {
//     console.log(blocklist[i].username, blocklist[i].reason)
// }
// blocklist.forEach(function(elements){
//     console.log(elements)
//     console.log(`Name ${elements.username} reason ${elements.reason}`)
// })


// // //Math objects built in objects in javascript
// // console.log(Math)
// // console.log(Math.ceil(7.9));
// // let random = Math.random()
// // //console.log(Math.round(random*55))
// // console.log(Math.trunc(random * 100000000))

// // //call and apply method
// // let mainPlane = {
// //     airplane: "Fly India",
// //     code: 'F1',
// //     bookings: [],
// //     book: function (flightno, name) {
// //         console.log(`${name} Booked flight on ${this.airplane} with flight number ${this.code}${flightno} `)

// //         this.bookings.push({
// //             Flightname: `${this.airplane}`,
// //             nameofpassengers: `${name}`, flightNumber: `${this.code} ${flightno}`     //array having objects.Here booking is an array and it conatains various obj such as flightname,nameofpassengers,etc
// //         })
// //     }
// // }
// // mainPlane.book(553, 'carlos')
// // mainPlane.airplane = ("Air India")
// // console.log(mainPlane)
// // mainPlane.book(554, 'carlos')
// // mainPlane.book(555, 'carlos')
// // mainPlane.book(556, 'carlos')
// // console.log(mainPlane)
// // console.log(mainPlane.bookings['flightNumber'])
// // mainPlane.bookings.forEach(elements => {
// //     console.log(elements.Flightname);
// // });
// // //   delete mainPlane.bookings[0]
// // //   mainPlane.bookings.forEach(elements => {
// // //     console.log(elements.Flightname);
// // //   });
// // //   console.log(mainPlane)
// // //   delete mainPlane.bookings[0]

// // //   console.log(mainPlane)
// // mainPlane.bookings.splice(2, 1);
// // console.log(mainPlane)
// // 'use strict'
// // let childplane = {
// //     airplane: 'child plane',
// //     code: 'cp',
// //     bookings: [],
// // }
// // let abc = mainPlane.book;
// // abc.call(childplane,666,'ansh')
// // console.log(mainPlane)
// // abc.call(childplane, 665, 'zack')
// // console.log(childplane)
// // abc.call(mainPlane, 699, 'anshuman')
let cba = {
    p1: 'Anshuman',
    p2: 'nayak',
    p3: 'sillicon',
    studentrecord: [],
    p5: function (roll) {
        console.log(`${this.p1} ${this.p2} having roll no:${roll} pursing btech in ${this.p3} `)
        this.studentrecord.push({ 
            Students_name:`${this.p1} ${this.p2}`,
            Student_Id:roll,
            CLg:`${this.p3}`    
        })
    }
}
cba.p5(3)
cba.p5(6)
console.log(cba.studentrecord)
let xyz = {
    p1: 'Shruti',
    p2: 'nayak',
    p3: 'sillicon',
    studentrecord: [],
    // p5: function (roll) {
    //     console.log(`${this.p1} ${this.p2} having roll no:${roll} pursing btech in ${this.p3} `)
    //     this.studentrecord.push({ 
    //         Students_name:`${this.p1} ${this.p2}`,
    //         Student_Id:roll,
    //         CLg:`${this.p3}`    
    //     })
    // }
}

console.log(xyz)
//let qwe=cba.p5;
cba.p5.call(xyz,9)
console.log(xyz.studentrecord)      //---> we can use a function which  is present inside a different object inside our oobject by this way.we dont need to write the function once again

// // // binds

function greet(h){
console.log(`Welcome ${this.firstname} ${this.lastname} on coder dost ${h}`)
}

let user ={
    firstname:'Neha',
    lastname:'dupia'
}
let greets=greet.bind(user);
console.log(user)
greets(6)

// // //pass by value in array
// // let arr=[1,2,3,4,5];
// // // let getref=arr;
// // // console.log('original array',arr);
// // // console.log('copy array',getref)
// // // getref[3]=6
// // // console.log('original array',arr);
// // // console.log('copy array',getref)   //-------->while simply assining the arr to getref,when we change the getref the value of arr also changes
// // // to solve this we use pass by value
// // let getval=[...arr]
// // console.log('original array',arr);
// // console.log('copy array',getval)
// // getval[2]=8
// // console.log('original array',arr);
// // console.log('copy array',getval)
// // *for in loop */
// let car={
//     model:2022,
//     color:'Black',
//     company:'toyota'
// }

// console.log(car)
// let x=[];
// let i=0;
// for(let key in car){
//     console.log(key)
//     x[i]=car[key];
//     i++;
// }                       //------>it is used to acces each elemnt present inside a object
// console.log(x)

// // const cities=['NY','LA','TX']
// // const lowerCased =[];
// // cities.forEach((ele)=>
// //     lowerCased.push(ele.toLowerCase())
// // )
// // console.log(lowerCased)

// // // const cities=['NY','LA','TX']
// // // const lowerCased =[];
// // // cities.forEach((city)=>lowerCased.push(city))
// // // console.log(lowerCased)

const person={
    name:'p1',
    getname:function(){
        console.log(this.name)
    }
}
const p2={name:'p2'}
let asd=person.getname.bind(p2)
console.log(asd())
  p2.l=person.getname
  let dsa=p2.l.bind(person)
  dsa()
//  p2.l.bind(person)
//  person.getname.bind(p2)
//  console.log(p2.l())
// console.log(p2.l())
// console.log(p2)
// console.log(person.getname())
// let care=person.getname
// console.log(care.call(p2))

