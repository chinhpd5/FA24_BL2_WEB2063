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

//Kiểu dữ liệu trong JS
/**
 * 1. Kiểu dữ liệu nguyên thủy
 * - string: '' "" ``(template string)
 * - number: 1 -1 1.4
 * - boolean: true false
 * - undefined
 * - null
 * - BigInt
 * - Symbol
 * 
 * 2. Kiểu dữ liệu phức tạp
 * - array []
 * - object {}
 */

// Toán tử trong JS
/**
 * Toán tử số học: +- * / % ** ,...
 * Toán tử gán: = += -= (i -=10 <=> i = i =10), ....
 * Toán tử so sánh: > < >= <= == != ===
 * Toán tử logic: ! && ||
 */

// Biểu thức điều kiện: if else, switch case, toán tử 3 ngôi
// Vòng lặp
// 1 chưa biết số lần lặp : while, do while
// 2. Biết trước: for, for of, for in, forEach

// DOM ?
// Document Object Model: Mô hình đối tượng tài liệu

// Element

/**
 * id class tag
 * css selector
 */

// getElementById -> trả về 1 phần tử duy nhất đầu tiên tìm thấy
var h1Element = document.getElementById('heading');
// console.log(h1Element);

// getElementsByClassName-> trả về HTMLCollection (Mảng)
var classElements = document.getElementsByClassName('paragragh');
// console.log(classElements);

// getElementsByTagName-> trả về HTMLCollection (Mảng)
var tagElements = document.getElementsByTagName('p');
// console.log(tagElements);

// css selector
// querySelector -> trả về phần tử đầu tiên tìm thấy
h1Element = document.querySelector('#heading');// id: #
var pElement = document.querySelector('.paragragh'); // class : .
pElement = document.querySelector('body p'); // tag: 
// console.log(pElement);

// querySelectorAll -> trả về 1 NodeList(Mảng)
var pElements = document.querySelectorAll('p.paragragh');

// console.log(pElements);
// tìm hiểu sự khác nhau giữa HTMLCollection và NodeList

// Attribute

// Text

// Làm việc với DOM là làm việc với (element attribute text) - thêm sửa xóa 


