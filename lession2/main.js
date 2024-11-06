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

// console.log(sum(1,2,3,4,5));
// console.log(sum(1,2,3,4,5,6,7,8,9));

// spread: ... phân rã mảng hoặc object

var arr1 = [1,2];
var arr2 = [3,4];

var newArr = [...arr1,...arr2];
// console.log(newArr);

var obj1 = {
    name1:"chinhpd5"
}

var obj2 = {
    name: "chinhpd6",
    age: 20
}

var newObj = {...obj1, ...obj2}

// console.log(newObj);
var a = 1; // number -> Biến tham trị
var b = a; //1
a = 2;
//b = 1

var a = {value: 1} // object  -> Biến tham chiếu
var b = a; // gán vị trí ô nhớ của biến a cho biến b
a.value = 2;
// b.value = 2

// Biến tham trị và biến tham chiếu

// 1. Biến tham trị:
// Khi mà copy 1 biến (string number boolean) 
// thì JS chỉ copy giá trị của biến đó

// 2. Biến tham chiếu:
// Khi copy(gán) 1 biến (array, object)
// thí JS gán vị trí nhớ của biến


var a = {
    value: 1,
    child: {
        value : 2
    }
} // object  -> Biến tham chiếu
// var b = {...a}; // spread nếu object hoặc array chỉ có 1 cấp
// var {...b} = a;// rest nếu object hoặc array chỉ có 1 cấp
var b = JSON.parse(JSON.stringify(a));
// deep clone // tìm hiểu thêm 
// object -(JSON.stringify)> JSON -(JSON.parse)> object

a.child.value2 = 2; // thêm 1 phần tử vào a

console.log(a);
console.log(b);





















