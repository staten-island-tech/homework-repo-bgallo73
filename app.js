//HW 1

/* let x = 2 + '2';//x = 22

let x = 2 + 2 + '2';
//x = 42

let x = 2 + true;
//x = 3

let x = 2 + true + '2';
//x = 32

let x = true + '2';
//x = true2

let x = Number('2');
//x = 2

let x = Number('Hello');
//x = NaN
console.log(typeof(x)); //x = Number

let x = Boolean(1, 5, 10000, 'hello');
//x = true

let x = Boolean(0, '', null)
//x = false

let x = '';
if ((x !== undefined) || (x !== null) || (x !== 0)) {
} */



//HW 2

/* const color = 'red';

switch(color){
    case 'red':
        console.log('Color is red');
        break;
    case 'blue':
        console.log('Color is blue');
        break;
    default:
        console.log('Color is not red or blue');
        break;
}

switch(new Date(). getDay()){
    case 0:
        day = 'Sunday';
        break;
    case 1:
        day = 'Monday';
        break;
    case 2:
        day = 'Tuesday';
        break;
    case 3:
        day = 'Wednesday';
        break;
    case 4:
        day = 'Thursday';
        break;
    case 5:
        day = 'Friday';
        break;
    case 6:
        day = 'Saturday';
        break;
}

console.log(`Today is ${day}`); */



//HW 3
/* 
function greet(firstName = 'joe', lastName = 'mama'){
    if(typeof firstName === 'undefined'){firstName = 'joe'}
    if(typeof lastName === 'undefined'){lastName = 'mama'}
    console.log('hey');
    return 'hey' + firstName + ' ' + lastName;
}

greet();
console.log(greet());

const square = function(x = 3){
    return x*x;
};

console.log(square());


(function(name){
    console.log('hey' + name)
})('chad');

const todo = {
    add: function(){
        console.log('add todo');
    },
    edit: function(id){
        console.log(`Edit todo ${id}`);

    }
}

todo.delete = function(){
    console.log('delete todo');
}

todo.add();
todo.edit(22);
todo.delete(); */



//HW 4

// var a = 1;
// let b = 2;
// const c = 3;

// function test(){
//     var a = 4;
//     let b = 5;
//     const c = 6;
//     console.log('Function scope: ', a, b, c);
// }

// test();

// if(true) {
//     //block scope
//     var a = 4;
//     let b = 5;
//     const c = 6;
//     console.log('If scope:', a, b, c);
// }

// for(let a = 0; a < 10; a++) {
//     console.log(`Loop: ${a}`);
// }

// console.log('Global scope: ', a, b, c);


//HW 5

//empty parentheses
// () => 42;

//single parameter, () optional
// (x) => 42;
// x => 42;

//multiple parameter, () required
/* (x, y) => 42; */

//statements
//function expression produces a value, function statement performs an action
//with arrow functions, you need curly braces and return
// var feedTheCat = (cat) => {
//     if(cat === 'hungry') {
//         return 'Feed the cat';
//     } else {
//         return 'Do not feed the cat.';
//     }
// }

//if a function is in a block, must use return statement
// var addValues (x, y) => {
//     return x + y;
// }

//object literal need wrapping parentheses
// x => ({y:x});


//HW 6

// const num1 = 100;
// const num2 = 50;
// let val;

//simple math with numbers
// val = num1 + num2;
// val = num1 - num2;
// val = num1 * num2;
// val = num1 / num2;
// val = num1 % num2;

//math object
// val = Math.PI;
// val = Math.E;
// val = Math.round(2.4);
// val = Math.ceil(2.4);
// val = Math.floor(2.8);
// val = Math.sqrt(64);
// val = Math.abs(-3);
// val = Math.pow(8, 2);
// val = Math.min(2, 33, 4, 1, 55, 6, 3, -2);
// val = Math.max(2, 33, 4, 1, 5, 55, 6, 3, -2);
// val = Math.random();
// val = Math.floor(Math.random() * 20 + 1);

// console.log(val);