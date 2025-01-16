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

// object

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

// Rest ... (Phần còn lại)

const myArray1 = [1,2,3,4,5];
const [first,...rest] = myArray1;

// console.log(first); // 1
// console.log(rest); // [2,3,4,5]

function sum1 (a,...rest){
  // let total = 0;
  rest.forEach((item)=>{
    a += item 
  })
  console.log(a);
}

// sum1(1,2,3,4,5)
// sum1(1,2,3,4,5,6,7,8,9)

const myObject1 = {
  name: "chinhpd5",
  age: 20,
  child: {
    name: "chinhpd6",
    age: 10
  }
}

var {name,...newObj} = myObject1;

// console.log(name);
// console.log(newObj);

// spread ... (phân rã)

var arr1 = [1,2,3]
var arr2 = [4,5,6]

// [1,2,3,4,5,6]

// console.log(arr1.concat(arr2));

const newArr = [...arr1, ...arr2];

// console.log(newArr);

const myObject2 = {
  name: "chinhpd5",
  age: 20,
  child: {
    name: "chinhpd6",
    age: 10
  }
}

const newInfo ={
  ...myObject2, // spread
  home: "Hà Nội" 
}

// console.log(newInfo);
// copy

var x = 1;
var y = x; // 1
x = 2;

// console.log(x); // 2
// console.log(y); // 1

var x = {value: 1}; // object -> biến tham chiếu
var y = x;// gán vị trí nhớ của x cho y

x.value = 2; // khi x thay đổi thì y cũng thay đổi theo do cùng trỏ đến 1 địa chỉ ô nhớ

// console.log(x); // 2
// console.log(y); // 2


// Biến tham trị (number, string, boolean)

/**
 * Khi biến có kiểu (number, string, boolean)
 * Khi gắn 1 biến cho 1 biến khác gán "GIÁ TRỊ"
 * 
 */

// Biến tham chiếu (array, object)
/**
 * Khi biến có kiểu (array, object)
 * Khi gán biến cho biến khác, biến tham chiếu (gán vị trị nhớ) cho biến kia
 */

var x = {value : 1};
var y = {...x} // spread

x.value = 2;
console.log(x);
console.log(y);


