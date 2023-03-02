///////////////////////// 1. Function Declaration \\\\\\\\\\\\\\\\\\\\\\\\\

// function foo(abc) {
//     return abc;
// }

// foo("Hello World!");



////////////////////////// 2. Function Expression \\\\\\\\\\\\\\\\\\\\\\\\\\

// let fname = prompt("Name:")
// let time = prompt("Time:")

// const foo = function (time, fname) {
//     if (time > 5 && time <= 12 ) {
//         alert(`Good Morning!, ${fname}`)
//     }

//     else if (time > 12 && time <= 17) {
//         alert(`Good Afternoon!, ${fname}`)
//     }

//     else {
//         alert(`Good Night!, ${fname}`)
//     }
// }

// foo(time, fname);



/////////////////////////// 3. Arrow Function \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

// let fname = prompt("Name:")
// let time = prompt("Time:")

// const hello = (f, t) => t > 8 && t < 18 ? alert(`Good morning, ${f}`) : alert(`Good night, ${f}`);

// hello(fname, time)

 

/////////////////////////// Homework \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

let q = prompt("10 + 10 = ?");
let a = prompt("20 - 10 = ?");
let k = prompt("5 * 5 = ?");
let b = prompt("30 / 3 = ?");


const math = function (q, a, k, b) {
    if (q == 20) {
        alert("True  10 + 10 = 20")
    }
    else {
        alert("False  10 + 10 = 20")
    }
    if (a == 10) {
        alert("True  20 - 10 = 10")
    }
    else {
        alert("False  20 - 10 = 10")
    }
    if (k == 25) {
        alert("True  5 * 5 = 25")
    }
    else {
        alert("False  5 * 5 = 25")
    }
    if (b == 10) {
        alert("True  30 / 3 = 10")
    }
    else {
        alert("False  30 / 3 = 10")
    }
}

math(q, a, k, b);