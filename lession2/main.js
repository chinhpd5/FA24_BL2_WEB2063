// Function

// 1. declaretion function
function sayHello(name){
    // logic code
    return `Xin chào ${name}`;// template string `` '' ""
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
// console.log(test(10));

// default parameter : giá trị mặc định của tham số
var sum = (a=0,b=0) => a+b;

// console.log(sum(10,20));

// destructuring
var myArray = [1,2,3,4];

// console.log(myArray[1]); // 2

var [a,b,,d] = myArray;

// console.log(a);
// console.log(b);
// // console.log(c);
// console.log(d);
var myObject = {
    name: "chinhpd5",
    age: 20,
    child: {
        name: "chinhpd6"
    }
}

// console.log(myObject.name);// chinhpd5

var {name,age,child:{name: childName}} = myObject;

// console.log(name);
// console.log(age);
// console.log(childName);

function showInfo(data){
    console.log(data.name);
    console.log(data.age);
    console.log(data.child.name);
}

// showInfo(myObject)

function showInfo1({name,age,child:{name: childName}}){
    console.log(name);
    console.log(age);
    console.log(childName);
}

// showInfo1(myObject)

// rest parameter ... : phần còn lại

myArray = [1,2,3,4];

var [a,...rest] = myArray;

// console.log(a);
// console.log(rest);

myObject = {
    name: "chinhpd5",
    age: 20,
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


















