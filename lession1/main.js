// Biến trong JS

// 1. camelCase
var myName; // ưu tiên sử dụng

// 2. PascalCase
var MyName;

// let var const

const PI= 3.14;// cần định nghĩa giá cho biến const
// PI = 3;// KHÔNG được gán lại giá trị cho const

// var và let

var myName = "chinhpd5";
var myName = "chinhpd6";
// console.log(myName);

let myHome = "Hà Nội";
myHome = "Hà Nam";

// phạm vi : scope
// 1. global scope

let mySchool = 'FPoly'; // phạm vi global
// var và let giống nhau

if(true){
    // console.log(mySchool);
}

// 2. block scope (if else, switch case, for)

{
    var myLove = "Mai";// var có thể nhận lại từ bên ngoài phạm vi block
    let myLove2 = "Hồng";// let KHÔNG thể nhận lại từ bên ngoài phaaamjvi block
}

// console.log(myLove);
// console.log(myLove2);

// 3. local scope(function)
function test(){
    let myLove3 = "Bích";
    //var hoặc let: KHÔNG thể truy xuất biến bên ngoài local scope(function)
}

// console.log(myLove3);




