let board = " ";
let size = 9;
for (let i =0; i < size; i++) {
    for (let n=0; n < size; n++) {
        if ((i + n) % 2 == 0) {
        board += " ";
        }
        else {
            board += "#";
        }
    }
    board += "\n";
}

console.log(board);