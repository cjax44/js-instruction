const readline = require('readline-sync');

function range(start, end) {
    let rangeArr= [];
    for (i = Number(start); i <= Number(end); i++) {
        rangeArr.push(i)
   } return rangeArr;
}

function flipIt(arr) {
    newArr = [];
    for (i = arr.length - 1; i >= 0; i--) {
        newArr.push(arr[i]);       
    } return newArr;
}
let firstNum = readline.question("Enter first number in a range of numbers");
let secondNum = readline.question("Enter second number in range");

let normArray = range(firstNum, secondNum);

flipIt(normArray);
console.log(newArr);