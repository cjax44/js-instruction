const readline = require('readline-sync');

function isEven(x) {

    if (x == 1) {
        console.log("The number is odd.")
    } else if (x == 0) {
        console.log("The number is even.")
    } else {

    x = x - 2;
    return isEven(x);
}}

isEven(readline.question(`Enter a number to see if it's even or odd... THROUGH RECURSION:`));