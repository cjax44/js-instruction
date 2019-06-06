let n = 1;
for (let i = 0; i < 101; i++) {
    if (n % 3 == 0) {
        console.log("Fizz");
    } else if (n % 5 == 0) {
        console.log("Buzz")
    } else 
    console.log(n);
    n++;

}