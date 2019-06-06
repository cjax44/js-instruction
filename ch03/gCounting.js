const readline = require('readline-sync');

function gSpotter(str) {
    let numG = 0;
    for (let count = 0; count < str.length; count++) {
        if (str[count] == "g") {
            numG = numG + 1;
        }
    }
    console.log(`The gSpotter has found ${numG} G's in your sentence.`)
}

gSpotter(readline.question(`Enter a sentence to count G's:`));

