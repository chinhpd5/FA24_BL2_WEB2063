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

// Default parameter : giá trị mặc định cho tham số
var sum = (a, b=0) => a+b ;

// console.log(sum(5)); // NaN // 0

// Destructuring

var myArray = [1,2,3,4];

// console.log(myArray[1]); //2

var [a,b,,d] = myArray;
// console.log(a); // 1
// console.log(b); // 2
// // console.log(c); // undefined
// console.log(d); // 4

var myObject = {
    name: "chinhpd5",
    age: 20,
    child: {
        name : "chinhpd6"
    }
}

// console.log(myObject.name);
// console.log(myObject.age);

var {name,age, child:{name : childName}} = myObject;
// console.log(name);
// console.log(age);
// console.log(childName);

function showInfo (data){
    console.log(data.name);
    console.log(data.age);
    console.log(data.child.name);
}

// showInfo(myObject)

function showInfo2 ({name,age, child:{name : childName}}){
    console.log(name);
    console.log(age);
    console.log(childName);
}

showInfo2(myObject)








