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
var sayHello2 = (name,age,home) => {
    return `Tạm biệt ${name}`
}

// console.log(sayHello2('chinhpd5'));

var sayHello3 = age => `Tuổi: ${age}`;

// console.log(sayHello3(20));

// Detructuring

var myArray = [1,2,3];

// console.log(myArray[1]); // 2

var [a,,c] = myArray;

// console.log(a);// 1
// // console.log(b);// 2
// console.log(c);// 3

var myObject = {
    name: 'chinhpd5',
    age: 30,
    child: {
        name: "chinhpd6"
    }
}

// console.log(myObject.name); //"chinhpd5"
// console.log(myObject.age); // 30

var {name, age, child: {name : childName}} = myObject;
// console.log(name);
// console.log(age);
// console.log(childName);

function test(data){
    console.log(data.name);
    console.log(data.age);
    console.log(data.child.name);
}

// test(c)

function tesDestructuring({name, age, child: {name : childName}} ){
    console.log(name);
    console.log(age);
    console.log(childName);
}

// tesDestructuring(myObject)

// Rest ... : Phần còn lại (tạo ra 1 mảng hay Object mới)

myArray = [1,2,3,4,5];

var [a,...rest] = myArray;

// console.log(a);
// console.log(rest);

var sum = (total,...restPara) =>{
    // console.log(total);
    // console.log(restPara);
    // let total =0;
    restPara.forEach((item)=>{
        total += item;
    })
    return total;
}

// console.log(sum(1,2,3,4,5));
// console.log(sum(1,2,3,4,5,6,7,8,9));

myObject = {
    name: 'chinhpd5',
    age: 30,
    child: {
        name: "chinhpd6"
    }
}

var {name, ...newObject} = myObject;

console.log(name);
console.log(newObject);














