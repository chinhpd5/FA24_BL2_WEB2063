// Function

// 1. declaretion function
function sayHello(name){
    // logic code
    return `Xin chào ${name}`;// template string
}

const result = sayHello('chinhpd5');
// console.log(result);

// 2. expression function
var sayHello2 = function(name){
    return `Chào mừng bạn ${name}`;
}

// console.log(sayHello2('chinhpd5'));

// 3. arrow function
var sayHello3 = (name)=>{
    return `Chào bạn ${name}`
}

// console.log(sayHello3("chinhpd5"));

var test = a => `a: ${a}`;
console.log(test(10));




