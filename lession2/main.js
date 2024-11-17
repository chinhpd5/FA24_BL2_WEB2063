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
// testDestructuring(myInfo)

// rest ... phần còn lại

myArray = [1,2,3,4];

var [a,...rest] = myArray;

// console.log(a); // 1
// console.log(rest); // [2,3,4]

sum = (a,...rest)=>{
    // console.log(a);
    // console.log(rest);
    // return;
    // let total = 0;
    for(var i =0 ;i< rest.length; i++){
        a += rest[i];
    }
    // return total;
    return a;
}

// console.log(sum(1,2,3,4,5));
// console.log(sum(1,2,3,4,5,6,7,8,9));

myInfo = {
    name: "chinhpd5",
    age: 20,
    child: {
        name: "chinhpd6"
    }
}

var {name,...restObj} = myInfo

// console.log(name);
// console.log(restObj);


// spread ... : phân rã

var arr1 = [1,2];
var arr2 = [3,4,5];
// [1,2,3,4,5];

// console.log(arr1.concat(arr2));

var newArr = [...arr1, ...arr2];
// console.log(newArr);

var obj1 = {
    name:"chinhpd5",
    age: 20
}

var obj2 = {
    name: "chinhpd6"
}

var newObj = {...obj1, ...obj2} // spread
// console.log(newObj);

var a = 1; // number -> Biến tham trị
var b = a; // b = 1 // gán giá trị của a cho b
a = 2;// a thay đổi -> b vẫn giữ nguyên
// console.log(b); // 1

//===========
var a = {value : 1}; // object -> Biến tham chiếu
var b = a; // gán vị trí nhớ của a cho b; a và b cùng ô nhớ
a.value = 2; // khi a thay đổi -> b cũng thay đổi theo a
// console.log(b.value); //2

// Biến tham trị || Biến tham chiếu
// Biến tham trị
// khi gán (copy) biến (string number boolean) -> copy giá trị của biến đó

// Biến tham chiếu
// khi gán (copy) biến (array object) -> gán vị trí nhớ của biến đó

var a = {
    value : 1,
    child: {
        valueChild: 1
    }
}; 
// var b = {...a}; // spread 
// var {...b} = a; // rest

var b = JSON.parse(JSON.stringify(a));// deep clone

// object -(JSON.stringify)> JSON -(JSON.parse)> Object

// rest spread: copy nông, chỉ copy được cấp độ 1
// deep copy

a.child.valueChild = 2;

// console.log(b);// 1

// nullish ??: undefined hoặc null -> giá trị mặc định sử dụng ??

var myName;
// myName = myName ?? 'default name'; // cách 1
myName ??= 'name';
// console.log(myName);


// optional chaining ?.
myInfo = {
    name: "chinhpd5",
    age: 20,
    // child: {
    //     name: "chinhpd6"
    // }
}

console.log(myInfo.child);//undefined
console.log(myInfo.child?.name);// undefined -> code phía sau tiếp tục được thực hiện

// if(myInfo.child){
//     console.log(myInfo.child.name); 
//     if(myInfo.child.name){
//         console.log(myInfo.child.name.abc); 
//     }
// }

console.log(123); // logic đằng sau



















