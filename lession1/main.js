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

// Kiểu dữ liệu trong JS

/**
 * 1. Kiểu dữ liệu nguyên thủy
 * - number: 1 -1 1.4
 * - string: '' "" ``(template string)
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
 * Toán tử số học: + - * / % ** ,...
 * Toán tử gán: = += (i += 5 <=> i = i + 5) -= *= ,...
 * Toán tử so sánh: == != > < >= <= ===
 * Toán tử logic ! && ||
 */

// Biểu thức điều kiện
// if else , switch case, toán tử 3 ngôi

const isCheck = (1 != true) ? "Đúng":"Sai";
// console.log(isCheck);

// vòng lặp
// 1. Chưa biết trước: while, do while
// 2. Biết trước: for for of, for in,...forEach

// DOM là gì?
// Document Object Model - Mô hình đối tượng tài liệu
// có 3 thành phần

// 1. element
/**
 * id, class, tag
 * css selector
 */
// getElementById -> 1 phần tử duy nhất đầu tiên tìm thấy
var h1Element = document.getElementById('heading-title'); // id
// console.log(h1Element);

var classElements = document.getElementsByClassName('title');// class
classElements = document.getElementsByClassName('paragragh');// class

// console.log(classElements);
// getElementsByClassName -> trả về 1 mảng (HTMLCollection)

var tagElements = document.getElementsByTagName('p');// tag
// console.log(tagElements);
// getElementsByTagName -> trả về 1 mảng (HTMLCollection)

// css selector
// querySelector-> trả về 1 phần tử
h1Element = document.querySelector('#heading-title');// id: #
var pElement = document.querySelector('.paragragh');// class: .
var pElement = document.querySelector('p');// tag: 
// console.log(pElement);

//querySelectorAll -> trả về 1 mảng(NodeList)
var pElements = document.querySelectorAll('.paragragh');
// console.log(pElements);
// phân biệt HTMLCollection và NodeList


// 2. attribute
h1Element = document.querySelector('#heading-title');// id: #
h1Element.style.color = 'red';

h1Element.setAttribute('data',"chinhpd5");
console.log(h1Element.getAttribute('data'));


// 3. text
console.log(h1Element.innerText);
console.log(h1Element.textContent);


h1Element.textContent = "<i>chinhpd5</i>";
h1Element.innerHTML = "<i>chinhpd5</i>";

// DOM Làm việc (thêm sửa xóa) các phần tử có trong nó (element attribute text)











