


//Time interval
//Module

/****************************************************************/
/***Objects -> A Collection of related properties or methods
 can represent real world objects (Animal, Places, People)***/


/*this -> Reference to the object where is used */

// const person={
//     firstName : "Gajanan",
//     lastName:"Silva",
//     age:30,
//     isEmployed:true,
//     sayHello: function(){console.log(`Hi I am ${this.firstName}`)}
// }
// const person2={
//     firstName : "Shawn",
//     lastName:"Arunjith",
//     age:28,
//     isEmployed:false,
// }
// person.sayHello();
// console.log(person.firstName)

/****************************************************************/




/* Constructors -> Special Method for defining the properties
and methods of objects
*/

// function Person(firstName,lastName,age){
//     this.firstName=firstName,
//     this.lastName=lastName,
//     this.age=age,
//     this.sayhello=function(){console.log(`Hi I am ${this.firstName} ${this.lastName}`)}
// }

// const person1 = new Person("Shawn","Arunjith",28);
// person1.sayhello();






/****************************************************************/

//classes
/* (ES6 feature) providea a more structured and cleaner way
 top work with objects compare to traditional constructor 
 functions */


//  class Person{

//     constructor(firstName,lastName,age){
//         this.firstName=firstName,
//             this.lastName=lastName,
//             this.age=age
//     }

//     sayHello(){
//         console.log(`Hi I am ${this.firstName} ${this.lastName}`)}
        

//  }


//  const person1 = new Person("Shawn","Arunjith",28);
//  console.log(person1.firstName);
//  person1.sayHello();


/****************************************************************/


/*static keyword - > keyword that defines properties or methods that
belongs to a classes itself rather than the objects created 
from the class*/

// class MathUtil{
//     static PI =3.145;

//     static getDiamater(radius){
//         return radius *2;
//     }
// }
// const a= new MathUtil();

// console.log(MathUtil.PI)
// console.log(MathUtil.getDiamater(7))

/****************************************************************/

/*inheritance -> allows a new class to inherit propeeties and methods 
fron an existing class(parent -> child)
helps with code reusabilities
*/

/* Super - > keyword is used in classes to call the constructor 
or access the properties and methods of parent
this - > object
super -> parent */

// class Animal{
//     alive=true;

//     constructor(name,age){
//         this.name=name;
//         this.age=age;
//     }

//     eat(){
//         console.log(`This ${this.name} is eating`)
//     }
//     sleep(){
//         console.log(`This ${this.name} is sleeping`)
//     }
// }

// class Rabit extends Animal{

//     constructor(name,age,runSpeed){
//         super(name,age);
//         this.runSpeed=runSpeed;
//     }
 
// }

// class Fish extends Animal{
   
//     constructor(name,age,swimSpeed){
//         super(name,age);
//         this.swimSpeed=swimSpeed;
//     }

// }

// class Hawk extends Animal{
   
//     constructor(name,age,flySpeed){
//         super(name,age);
//         this.flySpeed=flySpeed;
//     }

// }

// const rabit1 = new Rabit("bunny",2,50.5);
// const fish1 = new Fish();
// const hawk1 = new Hawk();

// console.log(rabit1.age)





/****************************************************************/

/*Getters & Setters*/

// class Rectangle{
//     constructor(width,height){
//         this.width=width;
//         this.height=height;
//     }

//     set width(newWidth){
//         if(newWidth>0){
//             this._width= newWidth;
//         }
//         else{
//             console.error("Width must be positive number");
//         }
//     }

//     set height(newheight){
//         if(newheight>0){
//             this._height= newheight;
//         }
//         else{
//             console.error("Height must be positive number");
//         }
//     }

//     get width(){
//         return this._width;
//     }

//     get height(){
//         return this._height;
//     }
// }

// const r1= new Rectangle(15 , 25);

// console.log(r1.height);
// console.log(r1.width);








/****************************************************************/

/*Destructuring - > extract values from arrays and objects,
then assign them to variables in a convenient way
*/
/*********************  Example 1***************** */

// let a=15;
// let b=21;

// [a , b] = [b ,a] ;
// console.log(a);
// console.log(b)


/*********************  Example 2***************** */
// const  colors=["red" , "green" , "blue", "black", "white"];
// [colors[0], colors[4]] = [colors[4] , colors[0]];

// console.log(colors);


/*********************  Example 3***************** */

// const[firstColor,secondColor,thirdColor, ...extraColors] = colors;
// console.log(firstColor);
// console.log(secondColor);
// console.log(thirdColor);
// console.log(extraColors);

/*********************  Example 4***************** */


// const student={
//     firstName:"Shawn",
//     lastName:"Arunjith",
//     age:28
// }

// // const{firstName,lastName,age}=student;
// // console.log(firstName);
// // console.log(lastName);
// // console.log(age)


// function displayPerson({firstName,lastName,age}){
//         console.log(firstName);
//         console.log(lastName);
//         console.log(age)
// }

// displayPerson(student);






/********************************************************** */
/* Nested Objects */

// const person={
//     fullname:"Shawn",
//     age:30,
//     isStudent:true,
//     hobbies: ["Singing","Video Games","Coding"],
//     address: {
//         street : "Old rest house Road",
//         city:"Batticalo",
//         country:"Srilanka",
//         contact:{
//             officeNumber:"+9458658",
//             mobileNumber:"+96587855"
//         }

//     }
// }


// console.log(person.fullname);
// console.log(person.hobbies[0]);
// console.log(person.address.country);
// console.log(person.address.contact.mobileNumber);


// class Person{
//     constructor(name,age, ...address){
//         this.name=name;
//         this.age=age;
//         this.address= new Address(...address)
//     }
// }

// class Address{
//     constructor(street,city,country){
//         this.street=street;
//         this.city=city;
//         this.country=country;
//     }
// }


// const person1= new Person("Shawn",28,"Main Road","Batticaloa","Sri Lanka");

// console.log(person1.address.city)


// person={
//     name:"Shawn",
//     age:28,
//     address:{
//         street:"main Road",
//         city:"batticaloa",
//         country:"Srilanka"
//     }

// }



/********************************************************** */
//Arrays of Objects

// const fruits=[{name: "apple",color:"red",calories:95},
//             {name: "orange",color:"orange",calories:45},
//             {name: "banana",color:"yellow",calories:105},
//             {name: "coconut",color:"white",calories:156}]

// // fruits.push({name: "graphs",color:"purple",calories:250})
// // fruits.pop();
// // fruits.splice(1,2);

// //forEach()
// fruits.forEach(fruit=> console.log(fruit.name));

// //map()
// const fruitNames = fruits.map(fruit=>fruit.calories);

// //fillter()
// const lowCalories = fruits.filter(fruit=>fruit.calories <100);

// //reduce()
// const maxFruit = fruits.reduce((max,fruit)=>
//                                  fruit.calories > max.calories ?
//                                  fruit : max );

// console.log(maxFruit)



/********************************************************** */

/*sort() -> Sort elements Strings in lexicographic order
lexicographic - > (alphabate, numbers , sympole) as string

 */


// let students =["Shawn","Arunjith1",,"Aarunjith2","Niroshan","Thayuran","Kalai"];

// let numbers=[1,10,2,4,3,5,8,7,6]

// const people =[{name:"Shawn",age:"28",gpa:3.5},
//                 {name:"Thayuran",age:"26",gpa:3.4},
//                 {name:"Kalai",age:"25",gpa:4.0},
//                 {name:"Gajanan",age:"30",gpa:3.9},

// ]

// people.sort((a,b)=>b.gpa - a.gpa);

// console.log(people)

/********************************************************** */
//fisher-yates algorithm

// const cards =['A',2,3,4,5,6,7,8,9,10,'J','Q','K'];

// shuffle(cards);
// console.log(cards)

// function shuffle(array){

//         for(let i=array.length -1; i >0 ;i--){
//             const random =Math.floor(Math.random() * (i +1));  

//             [array[i],array[random]] = [array[random],array[i]] ;
//         }
// }



/*********************************************************************/

/*Date*/

//Date(year,Month,day,miniute, second , ms)
// const date = new Date();

// const year = date.getFullYear();
// const month = date.getMonth();
// const day = date.getDate();
// const miniutes =  date.getMinutes();
// const daysOfWeeks = date.getDay();

// console.log(year)
// console.log(month)
// console.log(day)
// console.log(miniutes)
// console.log(daysOfWeeks)

/*********************************************************************/


/*Closure - > A function defined inside of another ,
the inner function has access to the variables and scope of
the outer function*/ 


// function outer(){

//   let msg ="Hello";

//     function inner(){
//             console.log(msg);
//     }
//     inner();
// }




// outer();

/*********************************************************************/


/* setTimeout -> function in JS that allows you to schedule the excution 
of a function after an amount of time (ms)

setTimeout(callback , delay)*/


// function sayHi(){
//     window.alert("Hello");
// }

// let timeoutId;

// function startTimer(){
//     timeoutId = setTimeout(()=> window.alert("Hello"),3000);
//     console.log("STARTED");
// }

// function clearTimer(){
//     clearTimeout(timeoutId);
//     console.log("CLEARED");
// }


/*********************************************************************/

function updateClock(){

        const now = new Date();
        let hour = now.getHours().toString().padStart(2,0);

        const meridiem = hour >=12 ? "PM":"AM";
        hour = hour % 12 || 12;


        const minute =now.getMinutes().toString().padStart(2,0);
        const seconds =now.getSeconds().toString().padStart(2,0);

        const timeString= `${hour}:${minute}:${seconds} ${meridiem}`;

        document.getElementById("clock").textContent=timeString;
}

updateClock();
setInterval(updateClock,1000);