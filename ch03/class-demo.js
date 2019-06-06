// Very basic way to define a function

const square = function(x) {
    return (x * x);
}

const makeNoise = function() {
    console.log("doink");
}

const power = function(base, exponent) {
    let result = 1;
    for (let count = 0; count < exponent; count++) {
        result *= base;
    }
    return result;
};

console.log(power(2,10));
console.log(square(7));
makeNoise();
