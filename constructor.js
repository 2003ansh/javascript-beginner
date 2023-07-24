// Object oriented programming in JavaScript
// Constructor function and the "new" operator
// We can not use arrow function as constructor function
// Arrow function does not have "this" keyword.so we can not use "this" keyword in arrow function
// Arrow function does not have prototype property
// call "construc" function with "new" keyword

//steps to create constructor function
// 1. create a function which contains properties and methods
// 2. function name should be start with capital letter

let Car = function (color, speed) {
    this.color = color;
    this.speed = speed;
}



//Prototype
// Prototype is a property of function
Car.prototype.getSpeed = function () {
    console.log(this.speed);
} //=>here getspeed is a method of Car function which will be applicale for all the objects of Car function

Car.prototype.company = "BMW"; //=>here company is a property of Car function which will be applicale for all the objects of Car function
console.log(Car.prototype)

let car1 = new Car("red", 100);
console.log(car1);
car1.color = "blue";
console.log(car1);
let car2 = new Car("green", 200);
console.log(car1,car2);
car1.getSpeed();
car2.getSpeed();
console.log(car1.company);
console.log(car2.company);
console.log(car2.__proto__) //=>here __proto__ is a property of car2 object which is a prototype of Car function


// console.log(car1.__proto__ === CAR.__proto__); //=>true this is not correct way to check prototype

console.log(car1.__proto__ === car2.prototype); //=>true this is not correct way to check prototype

console.log(car1.__proto__.isPrototypeOf(Car)); //=>true this is correct way to check prototype

//we use __proto__ to access object prototype means we can access prototype of Car function by using __proto__ property of car1 object.


// Es6 class(this is syntactical sugar of constructor function)

//class declaration


class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    getAge() {
        console.log(this.age);
    }
}

let person1 = new Person("sachin", 40);
console.log(person1);
person1.getAge(); 

// get and set keyword  (getter and setter)
// get and set keyword is used to access and modify private properties of class

class Person1 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    ages(){
        return this.age;
    }
    get names() {
        console.log(this.name);
        return this.name;
    }
    set changename(name) {
        this.name = name;
    }
}

let person2 = new Person1("sach", 10);
console.log(person2);
console.log(person2.ages());

 person2.names // =>here we can access private property of class by using getter method
person2.changename = "sachin69"; // =>here we can modify private property of class by using setter method
console.log(person2);

//inheritance

class Person3 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    ages(){
        return this.age;
    }
    get names() {
        console.log(this.name);
        return this.name;
    }
    set changename(name) {
        this.name = name;
    }
}
class Student extends Person3{
    constructor(name,age,roll){
        super(name,age);
        this.rollno=roll;
        console.log(this.rollno);
    }
}
let student1=new Student("ansu",19,1);
console.log(student1);
console.log(student1.ages());

console.log(student1.names);
student1.changename="ansu69";
console.log(student1);

//channing methods
//channing methods means we can call multiple methods in a single line

class bankAcoount{
    constructor(name,accno,movement){
        this.name=name;
        this.accno=accno;
        this.movement=[];
    }
    deposit(amount){
        this.movement.push(amount);
        // this.balance+=amount;
        return this;
    }
    withdraw(amount){
        this.movement.push(-amount);
        // this.balance-=amount;
        return this;
    }
    getmovement(){
        return this.movement;
    }
}
let account1=new bankAcoount("sachin",123);
console.log(account1.deposit(100));
account1.withdraw(50);
console.log(account1);
 console.log(account1.deposit(100).withdraw(50));
console.log(account1.getmovement())
 // to add some new properties in child class we have to use super keyword in child class constructor and this keyword in child class constructor