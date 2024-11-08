// Biến trong JS

// 1. camelCase
var myName; // ưu tiên sử dụng

// 2.PascalCase
var MyName


// var let const 

//const
const PI=3.14; // định nghĩa giá trị cho const
// PI = 3; // không thể gán lại giá trị cho biến const

// var let
var myName = "chinhpd5";
var myName = "chinhpd6";
// console.log(myName);

let myAge = 30;
myAge = 31;

// Phạm vi: scope

// 1. global scope
let myHome = "Hà Nội";// global
// var và let đều có thể truy xuất 1 biến ở phạm vi global
{
    // scope
    // console.log(myHome);
}

// 2. block scope: (if else, switch case, for,...)

{
    var mySchool = 'FPoly'; // var có thể nhận được bên ngoài phạm vi block scope
    let nganh = "CNTT"; // let KHÔNG thể nhận được bên ngoài phạm vi block scope
}

// console.log(mySchool);
// console.log(nganh);

// 3. local scope (function)
function test(){
    var ky = 4;
    let ky2 = 5;
    // var và let đều không thể truy xuất bên ngoài 1 local scope (function)
}

// console.log(ky2);









