// function


// 1. decleration function
function sayHello(name){
    // logic code
    return `Chào mừng bạn ${name}`;// template string
}

var result = sayHello("chinhpd5");
// console.log(result);

// 2. expression function
var sayHello2 = function (name){
    return `Rất vui khi gặp bạn ${name}`;
}
// console.log(sayHello2('chinhpd5'));

// 3. arrow function
var sayHello3 = (name) => {
    return `Tạm biệt bạn ${name}`
}
// console.log(sayHello3("chinhpd5"));

var test = a => `a: ${a}`

// console.log(test(20));




