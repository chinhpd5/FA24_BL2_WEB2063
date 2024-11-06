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

// default parameter: giá trị mặc định của tham số
function sum(a=0,b=0){
    return a + b
}

// console.log(sum(10));

// destructuring
var myArray = [1,2,3,4];

// console.log(myArray[1]);//2
var [a,,c,d] = myArray;

// console.log(a);
// // console.log(b);
// console.log(c);
// console.log(d);

var myObject = {
    name: "chinhpd5",
    age: 30,
    child: {
        name: "chinhpd6"
    }
}

// console.log(myObject.name);

var {name, age, child: {name: childName}} = myObject;

// console.log(name);
// console.log(age);
// console.log(childName);

// rest ... : phần còn lại

myArray = [1,2,3,4];

var [a,b,...rest] = myArray;

// console.log(a);
// console.log(b);
// console.log(rest);

myObject = {
    name: "chinhpd5",
    age: 30,
    child: {
        name: "chinhpd6"
    }
}

var {name, ...restObj} = myObject;

// console.log(name);
// console.log(restObj);

sum = (result,...rest)=>{
    // console.log(rest);
    // var result = 0;
    rest.forEach((item)=>{
        result += item;
    })

    return result;
}   

console.log(sum(1,2,3,4,5));
console.log(sum(1,2,3,4,5,6,7,8,9));














