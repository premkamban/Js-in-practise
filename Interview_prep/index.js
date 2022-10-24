/*
Machine coding round
1) comment widget 
2) Todo list app -  like JIRA board
3) Food ordering app - sorting, sarchin, taging
4) E-mail webapp
5) Sudoku Game
6) Snake game*/

//1) Hoisting in let and const
/*
if let is not re-assigned or created like:
let a = 10;
let a = 5;
then its an syntax error

let variables are not added in window object

this.<let-variable> is undefined
*/
// console.log(a);
// console.log(b);
// console.log(c);
// var a = 10;
// let b = 11;
//const c = 12;

/* let variable can't be shadowed
let a = 0;
{
    var a = 10;
}*/

//temporal dead zone - there are in the scope by not declared

//2) block scope
// {
//     var a = 1000;
//     var j = 20;
//     // const c = 30;
// }
// var a = 1200;
// console.log(a);

// function one() {
//     var b = 900;
//     function two() {
//         var a = 7
//         function three() {
//             console.log(a, b);
//         }
//         three();
//     }
//     two();
// }
// one();

// function x() {
//     for (var i = 1; i <= 5; i++) {
//         function outerCloure(i) {
//             setTimeout(() => { console.log(i) }, i * 1000);
//         }
//         outerCloure(i);
//     }
//     console.log("Timer started:");
// }

// x();

//Funtion statement aka Fun declaration

// let count = 0;
// document.getElementById("hello").addEventListener("click", () => {
//   document.getElementById("counter").innerHTML = ++count;
// });

/* HOC */

/*Task vs microtask :
1) Task is least priority like timers, event handlers
2) queue microtask
3) one every event loop iteration a set of task is excuted from task queue but microtask is exceuted completley until the microtask queue is empty
4) post empting the microtaskqueue task queue is cleared.
*/
// let user = {
//   name: "prem",
//   age: 30,
//   something: () => {
//     console.log(this.name);
//   },
// };
// this.name = 5;

//arrow function does not points to immediate parent it points to global this
// arrow point to parent function

// user.something();

// const user1 = {
//   firstname: "Premand",
//   getname() {
//     const firstname = "easybuy";
//     console.log(firstname);
//     return this.firstname;
//   },
// };
// console.log(user1.getname());

// class Outer {
//   constructor() {
//     this.unq = {
//       name: "prem",
//       getname: function () {
//         return this.name;
//       },
//     };
//   }
//   getname() {
//     return this.unq;
//   }
// }
// const obj = new Outer();
// console.log(obj.getname());

/*
*
1)The prototype gives access to the prototype of function using function.

Syntax: (function.prototype) 

1.1 ) The prototype property is set to function when it is declared. All the functions have a prototype property

2)proto gives access to the prototype of the function using the object.
2.1) proto property that is set to an object when it is created using a new keyword. All objects behavior newly created have proto properties
Syntax: (object.__proto__)*/

// function responseToUser(me) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(`Subscribe to ${me}`);
//     }, 2000);
//   });
// }

// function responseToCommmunity(me) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(`Subscribe to ${me}`);
//     }, 2000);
//   });
// }

// function responseToliker(me) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       reject(`Subscribe to ${me}`);
//     }, 2000);
//   });
// }

/*
Promise.all([])
Promise.race([])
Promise.allSettled()  */

// Promise.allSettled([
//   responseToUser("User"),
//   responseToCommmunity("Commnity"),
//   responseToliker("Liker"),
// ])
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log("Error: Promise failed", err);
//   });

function Show(time) {
  console.log(`${this.nm} is from ${this.place} from ${time}`);
}

const obj = {
  nm: "Prem",
  place: "Chennai",
};

Show.call(obj, "today");
