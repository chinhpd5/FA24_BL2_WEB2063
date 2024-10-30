// Biến trong JS
// var let const

const PI = 3.14;
// PI = 3;

// 1. camelCase
var myName = 'chinhpd5'

// 2. PascalCase;
var MyName = "chinhpd5";

// var let
var name = "chinhpd5";
var name = "chinhpd6";
// console.log(name);

let age = 20;
age = 21;
// console.log(age);

// scope (phạm vi truy xuất 1 biến tại 1 phạm vi khác)

// 1.global scope
var home = "Hà Nội"; // global var và let giống nhau

{
    // scope con
    // console.log(home);
}

// 2. block scope (if else, switch case, for)
{
    var address = "Bắc Từ Liêm";// có thể truy xuất bên ngoài 1 phạm vi khác
    let address1 = "BTL"; // KHÔNG thể truy xuất bên ngoài 1 phạm vi khác
}

// console.log(address);
// console.log(address1);

// 3. local scope (function)
function test(){
    let mark = 10; // var
    // trong local scope(function) KO thể truy xuất biến ra bên ngoài
}

// console.log(mark);







