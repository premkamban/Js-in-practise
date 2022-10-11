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

let count = 0;
document.getElementById("hello").addEventListener('click', () => {
    document.getElementById('counter').innerHTML = ++count;
});

/* HOC */

/*Task vs microtask :
1) Task is least priority like timers, event handlers
2) queue microtask
3) one every event loop iteration a set of task is excuted from task queue but microtask is exceuted completley until the microtask queue is empty
4) post empting the microtaskqueue task queue is cleared.
*/
