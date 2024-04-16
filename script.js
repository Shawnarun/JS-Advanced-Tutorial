/***Objects -> A Collection of related properties or methods
 can represent real world objects (Animal, Places, People)***/


/*this -> Reference to the object where is used */

/* Constructors -> Special Method for defining the properties
and methods of objects
*/

//classes
//static keyword
//inheritance
//Super
//Getters & Setters
//Destructring
//Nested Objects
//Arrays of Objects
//Sorting


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


function Person(firstName,lastName,age){
    this.firstName=firstName,
    this.lastName=lastName,
    this.age=age,
    this.sayhello=function(){console.log(`Hi I am ${this.firstName} ${this.lastName}`)}
}

const person1 = new Person("Shawn","Arunjith",28);
person1.sayhello();