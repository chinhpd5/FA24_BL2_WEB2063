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

// showInfo2(myObject)

// REST ... : Phần còn lại

myArray = [1,2,3,4];

var [a,...rest] = myArray;

// console.log(a);
// console.log(rest);

sum = (total,...rest) => {
    // console.log(total);
    // console.log(rest);
   
    rest.forEach((i)=>{
        total += i;
    })

    return total;
}

// console.log(sum(1,2,3,4));
// console.log(sum(1,2,3,4,5,6,7,8));

myObject = {
    name: "chinhpd5",
    age: 20,
    child: {
        name : "chinhpd6"
    }
}

var {name,...restObj} = myObject

// console.log(name);
// console.log(restObj);

// Spread ... : Phân rã

var arr1 = [1,2]
var arr2 = [3,4]

var newArr = [...arr1, ...arr2];

// console.log(newArr);

var obj1 = {
    name1: "chinhpd5"
}

var obj2 ={
    name: "chinhpd6",
    age: 30
}

var newObj = {...obj1, ...obj2};
// console.log(newObj);

/**
 * a = 1; // number - tham trị
 * b = a; // 1
 * a = 2; // 2
 * b // 1
 */

/**
 * a = {value: 1}; // object - tham chiếu
 * b = a; // copy vị trí nhớ của biến a
 * a.value = 2; // 2
 * b.value // 2
 */

// Biến tham trị và biến tham chiếu trong JS

// Biến tham trị (tham về giá trị): string number boolean
// khi gán 1 biến có kiểu: string number boolean thì sẽ copy giá trị

// Biến tham chiếu ( tham về vị trí nhớ)
// khi gán 1 biến có kiểu: array object thì sẽ copy vị trí nhớ

var a = {
    key: 1, 
    child:{
        value : 1
    }
};
// var b = {...a}; // spread
// var {...b} = a; // rest
// a.child.value = 2;


//deepclone
var b = JSON.parse(JSON.stringify(a));
// object -(JSON.stringify)> json -(JSON.parse)> object
a.child.value = 2
console.log(a);// 2
console.log(b);// 1











