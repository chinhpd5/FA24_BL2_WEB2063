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

// console.log(sum(1,2,3,4,5));
// console.log(sum(1,2,3,4,5,6,7,8,9));

//spread ... : phân rã từ cái cũ

var arr1 = [1,2];
var arr2 = [3,4];

// console.log(arr1.concat(arr2));

var newArr = [...arr1, ...arr2];
// console.log(newArr);

var obj1 = {
    name1: "chinhpd5",
    age: 20
}

var obj2 ={
    name: "chinhpd6"
}

var newObj = {...obj1, ...obj2};
// console.log(newObj);

var a = 1; //number - biến tham trị
var b = a; // 1
a = 2; // 2
// console.log(b); // 1

var a = {value: 1}; // object - biến tham chiếu
var b = a; // gán vị trí ô nhớ của a cho b <=> a,b cùng ô nhớ
a.value = 2; // khi a thay đổi thì b cũng thay đổi theo
// console.log(b.value); // 2

// Biến tham trị và biến tham chiếu JS

// Biến tham trị
// khi copy(gán 1 biến: number string boolean)
// gán giá trị của biến đó

// Biến tham chiến
// khi copy(gán 1 biến: array object)
// gán vị trí nhớ của biến đó


var a = {
    value: 1, // cấp 1: OK
    child:{
        valueChild :1 // cấp 2: Không thể
    }
}; 
// var b = {...a}; // spread
// var {...b} = a; // rest

// deep clone
var b = JSON.parse(JSON.stringify(a))
// object -(JSON.stringify)> JSON -(JSON.parse)> object

a.child.valueChild = 2; 

// console.log(a);
// console.log(b);

// Nullish ??
var myName="chinhpd5"; // undefined null
// myName = myName ?? 'name default' // cách 1
myName ??= 'name default' // cách 2
// console.log(myName);

// optional chaining ?.
myObject = {
    name: "chinhpd5",
    age: 30,
    child: {
        name: "chinhpd6"
    }
}

console.log(myObject.child);// undefined

console.log(myObject.child?.name); // undefined

// if(myObject.child){
//     console.log(myObject.child.name); // lỗi
//     if(myObject.child.name){

//     }
// }
console.log(123);





















