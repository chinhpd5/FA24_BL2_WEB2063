// Function

// 1. Declaretion function
function sayHello(name){
    // logic code
    return `Xin chào ${name}`;//+ '${name}';// template string ; '' ""
}

let result = sayHello("chinhpd5");
// console.log(result);

// 2. expression function
var sayHello1 = function (name){
    return `Chào mừng bạn ${name}`;
}

// console.log(sayHello1("chinhpd5"));

// 3. arrow function
var sayHello2 = (name) => {
    return `Tạm biệt ${name}`
}

// console.log(sayHello2("chinhpd5"));

var greeting = name => `Họ và tên : ${name}`;

console.log(greeting("chinhpd5"));




