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
        alert("True")
    }

    else if (q < 20) {
        alert("False")
    }

    else if (q > 20) {
        alert("False")
    }

    else if ("") {
        alert("Iltimos javobingizni yozing")
    }

    else if (a == 10) {
        alert("True")
    }

    else if (a < 10) {
        alert("False")
    }

    else if (a > 10) {
        alert("False")
    }

    else if ("") {
        alert("Iltimos javobingizni yozing")
    }

    else if (k == 25) {
        alert("True")
    }

    else if (k < 25) {
        alert("False")
    }

    else if (k > 25) {
        alert("False")
    }

    else if ("") {
        alert("Iltimos javobingizni yozing")
    }

    else if (b == 10) {
        alert("True")
    }

    else if (b < 10) {
        alert("False")
    }

    else if (b > 10) {
        alert("False")
    }

    else {
        alert("Iltimos javobingizni yozing")
    }
}

math(q, a, k, b);