// Function

// 1. Declaretion function
function sayHello(name){
    // logic code
    return `Xin chào ${name}`;//+ '${name}';// template string ; '' ""
}

let result = sayHello("chinhpd5");
// console.log(result);

// 2. expression function
var sayHello1 = function (name){
    return `Chào mừng bạn ${name}`;
}

// console.log(sayHello1("chinhpd5"));

// 3. arrow function
var sayHello2 = (name) => {
    return `Tạm biệt ${name}`
}

// console.log(sayHello2("chinhpd5"));

var greeting = name => `Họ và tên : ${name}`;

// console.log(greeting("chinhpd5"));

// default parameter: giá trị mặc định của tham số
var sum = (a=0,b=0) => a+b;

// console.log(sum(10,20));

// destructuring
var myArray = [1,2,3,4];

// console.log(myArray[1]);// 2

var [a,,c,d] = myArray; // destructuring làm việc với array

// console.log(a);//1
// // console.log(b);//2
// console.log(c);// 3
// console.log(d);// 4
//
var myInfo = {
    name: "chinhpd5",
    age: 20,
    child: {
        name: "chinhpd6"
    }
}

// destructuring làm việc với object
var {name,age, child: {name: childName}} = myInfo;

// console.log(name);
// console.log(age);
// console.log(childName);

// function test(data){
//     console.log(data.name);
//     console.log(data.age);
//     console.log(data.child.name);
// }
// test(myInfo)

function testDestructuring({name,age, child: {name: childName}}){
    console.log(name);
    console.log(age);
    console.log(childName);
}

// testDestructuring(myInfo)

// REST: ... Phần còn lại

myArray = [1,2,3,4];

var [a,...rest] = myArray;

// console.log(a); // 1
// console.log(rest); // [2,3,4]

sum = (a,...rest)=>{
    // console.log(a);
    // console.log(rest);
    // return
    // let total = 0;
    rest.forEach((item)=>{
        // console.log(item);
        a+=item;
    })
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

var {name, ...restObj} = myInfo;
// console.log(name);
// console.log(restObj);

// spread: ... Phân rã

var arr1 = [1,2];
var arr2 = [3,4];

// console.log(arr1.concat(arr2));
var newArr = [...arr1, ...arr2];
// console.log(newArr);

var obj1 ={
    name: "chinhpd5",
    age: 20
}

var obj2 ={
    name: "chinhpd6"
}

var newObj = {...obj1, ...obj2}
// console.log(newObj);

var a = 1;// number -> biến tham trị
var b = a; //b=1 // gán giá trị
a = 2; //2
// console.log(b); // 1

//==============
var a = {value: 1} // object -> biến tham chiếu
var b = a; // gán vị trí nhớ của a cho b -> a và b cùng ô nhớ
a.value = 2 //khi thay đổi a thì b cũng bị thay đổi theo
// console.log(b.value); //2

// Biến tham trị và biến tham chiếu

// Biến tham trị (string number boolean)
// khi gán biến cho 1 biến khác
// => gán giá trị

// Biến tham chiếu (array, object)
// khi gán biến cho 1 biến khác
// => gán vị trí nhớ(tham chiếu) của biến

var a = {value : 1}
// var b = {...a};//spread
var {...b} = a; // rest

a.value = 2;
// console.log(b.value);

// nullish: ??  có giá trị undefined ,null
var myName;

// myName = myName ?? 'default name';// cách 1
myName ??= 'name' // cách 2

// console.log(myName);

// optional chaining: ?. 
myInfo ={
    name: "chinhpd5",
    age: 20,
    // child: {
    //     name: "chinhpd6"
    // }
}

console.log(myInfo.child); //undefined
console.log(myInfo.child?.name);// -> undefined
// tiếp tục chạy các câu lệnh tiếp theo

// if(myInfo.child){
//     console.log(myInfo.child.name);// -> lỗi
//     if(true){
//         //logic
//         if(true){

//         }
//     }
// }
console.log(123);




















