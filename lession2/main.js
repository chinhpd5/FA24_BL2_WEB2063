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

// console.log(sum(10,15));

// Destructuring
var myArray = [1,2,3,4];

// console.log(myArray[1]);// 2
var [a,,c,d] = myArray; //Destructuring làm việc với mảng

// console.log(a);
// // console.log(b);
// console.log(c);
// console.log(d);

var myInfo = {
    name: "chinhpd5",
    age: 20,
    child: {
        name: "chinhpd6"
    }
}

// console.log(myInfo.name);
var {name,age,child: {name: childName}} = myInfo; //Destructuring làm việc với object

// console.log(name);
// console.log(age);
// console.log(childName);

function test(data){
    console.log(data.name);
    console.log(data.age);
    console.log(data.child.name);
}
// test(myInfo)
function testDestructuring({name,age,child: {name: childName}}){
    console.log(name);
    console.log(age);
    console.log(childName);
}
testDestructuring(myInfo)










