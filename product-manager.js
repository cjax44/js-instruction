let javaBook = {
    code: "java",
    description: "Murach's Java Programming",
    price: 57.5
};

console.log("code" in javaBook);
console.log("test" in javaBook);
console.log(Object.keys(javaBook));


let mysqlBook = {
    code: "mysql",
    description: "Murach'e MySQL",
    price: 55
}

let books =[javaBook, mysqlBook];