let board = " ";
let size = 1000;
for (let i =0; i < size; i++) {
    for (let n=0; n < size; n++) {
        if ((i + n) % 2 == 0) {
        board += "0";
        }
        else {
            board += "1";
        }
    }
    board += "\n";
}

console.log(board);