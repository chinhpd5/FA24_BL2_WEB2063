// function

// 1. Decleration function

function sayHello(name) {
    // logic code
    // return 'Xin chào ${name}'
    return `Xin chào ${name}`; // template string
}

var result = sayHello('chinhpd5');

// console.log(result);

// 2. Expression function
var sayHello1 = function (name){
    return `Chào mừng bạn ${name}`;
}

// console.log(sayHello1('chinhpd5'));

// 3. Arrow function 
var sayHello2 = (name) => {
    return `Tạm biệt ${name}`
}

// console.log(sayHello2('chinhpd5'));

var sayHello3 = age => `Tuổi: ${age}`;

console.log(sayHello3(20));



