// Biến trong JS

//var let const

const PI = 3.14;
// PI = 3;

// Phải khởi tạo giá trị cho const
// KHÔNG thể gán lại giá trị cho const

// 1. camelCase
var myName; // sử dụng JS

// 2. PascalCase
var MyName;

// var let
var myName = "chinhpd5";
var myName = "chinhpd6";

// console.log(myName);

let myAge = 30;
myAge = 20;

// scope: phạm vi

// 1. global scope
// khi 1 biến (var, let) được khai báo phạm vị global có thể sử dụng ở mọi nơi
let myHome = "Hà Nội"; // global

{
    // scope
    // console.log(myHome);
}

// 2. block scope (if else, for, switch case ,...)

{
    // scope
    var myLove = 'Mai'; // var có thể truy xuất từ bên ngoài của 1 scope(phạm vi)
    let myLove2 = "Hoa"; // let KHÔNG thể truy xuất từ bên ngoài của 1 scope(phạm vi)
}

// console.log(myLove);
// console.log(myLove2);
 
// 3. local scope (function)
function test(){
    let mySchool ='FPoly';// var và let KHÔNG thể truy xuất từ bên ngoài của 1 scope(phạm vi)
}

// console.log(mySchool);




