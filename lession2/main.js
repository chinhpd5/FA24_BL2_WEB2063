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

// console.log(greeting("chinhpd5"));

// default parameter: giá trị mặc định của tham số
var sum = (a=0,b=0) => a+b;

// console.log(sum(10,20));

// destructuring
var myArray = [1,2,3,4];

// console.log(myArray[1]);// 2

var [a,,c,d] = myArray; // destructuring làm việc với array

// console.log(a);//1
// // console.log(b);//2
// console.log(c);// 3
// console.log(d);// 4
//

var myInfo = {
    name: "chinhpd5",
    age: 20,
    child: {
        name: "chinhpd6"
    }
}

// destructuring làm việc với object
var {name,age, child: {name: childName}} = myInfo;

// console.log(name);
// console.log(age);
// console.log(childName);

// function test(data){
//     console.log(data.name);
//     console.log(data.age);
//     console.log(data.child.name);
// }

// test(myInfo)

function testDestructuring({name,age, child: {name: childName}}){
    console.log(name);
    console.log(age);
    console.log(childName);
}

testDestructuring(myInfo)








