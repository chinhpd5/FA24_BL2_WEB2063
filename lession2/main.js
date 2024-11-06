// function 
// 1. declaretion function

function sayHello(name){
    // logic code
    return `xin chào bạn ${name}`;// template string
}

const result = sayHello('chinhpd5');
// console.log(result);


// 2. expression function

var sayHello2 = function(name){
    return `Chào mừng bạn ${name}`
}

// console.log(sayHello2('chinhpd5'));

// 3. arrow function

var sayHello3 = (name) => {
    return `Tạm biệt ${name}`
}

// console.log(sayHello3('chinhpd5'));

// nếu chỉ có 1 tham số có thể lược bỏ ()
// nếu trong logic code của function chỉ có 1 câu lệnh return
// lược bỏ => và return
var sayHello4 = name => `Hello ${name}`;

// console.log(sayHello4('chinhpd5'));


