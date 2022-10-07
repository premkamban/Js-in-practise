//1) Hoisting in let and const
/*
if let is not re-assigned or created like:
let a = 10;
let a = 5;
then its an syntax error

let variables are not added in window object

this.<let-variable> is undefined
*/
console.log(a);
// console.log(b);
// console.log(c);
var a = 10;
let b = 11;
//const c = 12;

/* let variable can't be shadowed
let a = 0;
{
    var a = 10;
}*/

//temporal dead zone - there are in the scope by not declared

//2) block scope
{
    var a = 1000;
    var j = 20;
    // const c = 30;
}
var a = 1200;
console.log(a);
