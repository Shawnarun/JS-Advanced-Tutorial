


//Super
//Getters & Setters
//Destructring
//Nested Objects
//Arrays of Objects
//Sorting

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

class Animal{
    alive=true;

    eat(){
        console.log(`This ${this.name} is eating`)
    }
    sleep(){
        console.log(`This ${this.name} is sleeping`)
    }
}

class Rabit extends Animal{
    name="rabit";
 
}

class Fish extends Animal{
    name="fish";

}

class Hawk extends Animal{
    name="hawk";

}

const rabit1 = new Rabit();
const fish1 = new Fish();
const hawk1 = new Hawk();

rabit1.sleep();
fish1.eat();
