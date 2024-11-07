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

// Kiểu dữ liệu trong JS
/**
 * 1. Kiểu dữ liệu nguyên thủy
 * - number: 1 -1 1.5
 * - boolean: true false
 * - string: '' "" ``
 * - null
 * - undefined
 * - BigInt
 * - Symbol
 * 
 * 2. Kiểu dữ liệu phức tạp:
 * - Object
 * - Array
 */

// Toán tử trong JS
/**
 * 1. Toán tử số học: + - * / % ** ,...
 * 2. Toán tử so sánh: > < >= <= == != ===
 * 3. Toán tử gán: = += (i += 10 <=> i = i + 10) -= *= /= ,...
 * 4. Toán tử logic: ! && ||
 */

// Biểu thức điều kiện
// if else, switch case, toán tử 3 ngôi

const isCheck = (1 != true) ? 'Đúng': 'Sai';
// console.log(isCheck);

// Vòng lặp
// Chưa biết trước: do while, while
// biết trước: for, for of, for in, forEach

// DOM là gì?

// DOM: Document Object Model: Mô hình đối tượng tài liệu

// Chúng ta có thể làm việc với DOM
// sử dụng DOM để thêm sửa xóa: element, attribute, text

// Element
/**
 * id class tag
 * css selector
 */

var h1Element = document.getElementById('heading-title'); // id -> trả về 1 phần tử
// console.log(h1Element);

// class -> HTMLCollection(Mảng)
var pElements = document.getElementsByClassName('paragraph');
// console.log(pElements);

//tag -> HTMLCollection(Mảng)
pElements = document.getElementsByTagName('p');
// console.log(pElements);

// css selector
// querySelector trả về duy nhất 1 phần tử đầu tiên tìm thấy
h1Element = document.querySelector('#heading-title');// id -> #
var pElement = document.querySelector('.paragraph');// class -> .
pElement = document.querySelector('p'); // tag -> 
// console.log(pElement);

//querySelectorAll -> NodeList (mảng)
pElements = document.querySelectorAll('.paragraph');
// console.log(pElements);

// Tìm hiểu sự khác nhau giữa HTMLCollection và NodeList



// Attribute
h1Element = document.querySelector('#heading-title');// id -> #
// có sẵn
h1Element.classList = 'title';
h1Element.style.color = 'red';
// chưa có
h1Element.setAttribute('data',"chinhpd5");
// console.log(h1Element.getAttribute('data'));

// Text
console.log(h1Element.innerText);
console.log(h1Element.textContent);


// h1Element.innerText = "<i>chinhpd6</i>"
// h1Element.textContent = "<i>chinhpd6</i>"

h1Element.innerHTML = "<i>chinhpd6</i>";










