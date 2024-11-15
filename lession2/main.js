// function

// 1. Declaretion function
function sayHello(name){
    // logic code
    return `Xin chào ${name}`;// template string; '' ""
}

var result = sayHello('chinhpd5');
// console.log(result);

// 2. expression function
var sayHello1 = function (name){
    return `Chào mừng bạn ${name}`;
}

// console.log(sayHello1('chinhpd5'));

// 3. arrow function
var sayHello2 = (name,age) => {
    return `Bạn: ${name}, tuổi: ${age}`
}

// console.log(sayHello2("chinhpd5",20));

var sayHello3 = name => `Tạm biệt ${name}`;

// console.log(sayHello3('chinhpd5'));

// default parameter: giá trị mặc định cho tham số của hàm

var sum = (a=0,b=20) => a+b;

console.log(sum(10,15));







