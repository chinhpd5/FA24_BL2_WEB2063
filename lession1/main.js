// Biến trong JS
// var let const

// Quy tắc đặt tên biến
// 1. camelCase
var myName = 'chinhpd5';

// 2. PascalCase
var MyName = 'chinhpd5'

var name ='chinhpd5';
var name = 'chinhpd6';
// console.log(name);

let age = 20;
age = 21;
// console.log(age);

//const 
const PI=3.14;
// PI = 3;
// console.log(PI);

// scope: phạm vi - khả năng truy cập 1 biến ở 1 phạm vi khác
// global scope
let yourName ='chinhpd5';// var let giống nhau

{
    // phạm vi khác
    // console.log(yourName);
}

// block scope(if else, switch case, for)

{
    var yourAge = 20; //var: có thể truy xuất bên ngoài 1 block scope
    let yourAge1 = 21; //let: KHÔNG thể xuất bên ngoài 1 block scope
}

// console.log(yourAge);
// console.log(yourAge1);

// local scope (function)
function test(){
    var home ='Hà Nội'; // var và let đều KHÔNG thể truy xuất bên ngoài 1 local scope
}

// console.log(home);







