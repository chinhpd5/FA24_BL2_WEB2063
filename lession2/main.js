// Function

// chuỗi '' "" ``
// 1. Decleration function
function sayHello(name) {
  return `Xin chào ${name}`; // backtick // template string ``
  // return 'Xin chào ' + name;  // ''
}

// console.log(sayHello("chinhpd5"));

// 2. Expression function
const sayHello1 = function (name) {
  return `Chào mừng bạn ${name}`
}

// console.log(sayHello1("chinhpd5"));

// 3. Arrow function
const sayHello2 = (name, age) => {
  return `Bạn : ${name}, tuổi: ${age}`
}

// câu lệnh rút gọn của arrow function

const sayHello3 = name => `Bạn : ${name}`;

// console.log(sayHello2("chinhpd5",20));

// default parameter
const sum = (a = 0,b = 0) => a+b;

// console.log(sum(2,3));

// destructuring

// mảng
const myArray = [1,2,3];
// console.log(myArray[1]); // 2

const [a,,c] = myArray;
// console.log(a);
// // console.log(b);
// console.log(c);

// objetc

const myObject = {
  name: "chinhpd5",
  age: 20,
  child: {
    name: "chinhpd6",
    age: 10
  }
}

// console.log(myObject.name);
var {name,age,child: {name : childName}} = myObject;

// console.log(name);// chinhpd5
// console.log(age);
// console.log(childName); // chinhpd6


function showInfo(data){
  console.log(data.name);// chinhpd5
  console.log(data.age);
  console.log(data.child.name); // chinhpd6
}

// showInfo(myObject)
function showInfo1({name,age,child: {name : childName}}){
  console.log(name);// chinhpd5
  console.log(age);
  console.log(childName); // chinhpd6
}


