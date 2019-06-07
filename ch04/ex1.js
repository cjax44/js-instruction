const readline = require('readline-sync');

function range(start, end) {
    let rangeArr= [];
    for (i = Number(start); i <= Number(end); i++) {
        rangeArr.push(i)
   } return rangeArr;
}

function sum(range) {
    let n = 0;
    for (i = 0; i < range.length; i++) {
        n = n + range[i];
    } console.log(`The sum is ${n}`)
}

let firstNum = readline.question("Enter first number in a range of numbers");
let secondNum = readline.question("Enter second number in range");

console.log(range(firstNum, secondNum));
sum(range(firstNum, secondNum));