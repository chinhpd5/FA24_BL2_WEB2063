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

// Rest ... : Phần còn lại (tạo ra (sử dụng) 1 mảng hay Object mới)

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

// console.log(name);
// console.log(newObject);

// spread: ... Phân rã (sử dụng trên 1 mảng hoặc object cũ)

var arr1 =[1,2]
var arr2 =[3,4]

// console.log(arr1.concat(arr2));

var newArr = [...arr1, ...arr2];
// console.log(newArr);

var obj1 = {
    name : "chinhpd5"
}

var obj2 = {
    name : "chinhpd6",
    age: 20
}

var newObj = {...obj2,...obj1}

// console.log(newObj);

var a = 1; // number -> biến tham trị
var b = a; // 1 -> copy giá trị của a cho b
a = 2;
// console.log(b);// 1

//
var a = { value : 1}  // object -> biến tham chiếu
var b = a; // copy vị trí ô nhớ của a và b -> a và b cùng vị trí nhớ
a.value = 2; // khi a thay đổi thì b cũng thay đổi theo 
// console.log(b.value); //2

// Biến tham trị và biến tham chiếu

// Biến tham trị  (giá trị)
// Khi copy(gán) : number string boolean chỉ copy giá trị

// Biến tham chiếu : vị trí nhớ
// khi copy(gán): array hay object copy vị trí tham chiếu

var a = { 
    value : 1,
    child: {
        // cấp 2
        childValue: 1
    }
}  // object -> biến tham chiếu
// var b = {...a}; // phẫn rã á: spread
// var {...b} = a; // rest
var b = JSON.parse(JSON.stringify(a));

// Object -(JSON.stringify)> JSON -(JSON.parse)> Object

a.child.childValue = 2; // 2

// console.log(b); // 1

// rest hoặc spread chỉ copy được cấp độ 1
// từ cấp độ 2 của object copy biến tham chiếu
// deep clone

// Nullish ??: nếu giá trị bằng null hoặc undefined -> trả về giá trị nằm sau ??
var name1;
// name1 = name1 ?? 'name default'// cách 1
name1 ??= 'default';// cách 2
// console.log(name1); // undefined

// optional chaining ?.

myObject = {
    name: 'chinhpd5',
    age: 30,
    // child: {
    //     name: "chinhpd6"
    // }
}

console.log(myObject.child);

console.log(myObject.child?.name);
// console.log(123);

// if(myObject.child){
//     if(myObject.child.name){

//     }
// }




















