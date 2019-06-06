const readline = require('readline-sync');

let cont = "y";
let grade = "";

  while (cont == "y") {
   grade = readline.question(`Enter a number grade`); 
      if (grade >= 90) {
        console.log("Your grade is an A")
      } else if (grade >= 80 && grade < 90) {
        console.log("Your grade is a B")
      } else if (grade >= 70 && grade < 80) {
        console.log("Your grade is a C")
      } else if (grade >= 60 && grade < 70) {
        console.log("Your grade is a D")
      } else if (grade < 60) {
        console.log("You failed you miserable twit")
      }
    cont = readline.question("Would you like to continue?")
}