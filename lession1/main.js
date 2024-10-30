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

// Kiểu dữ liệu trong JS
/**
 * 1. Kiểu dữ liệu nguyên thủy
 * number: 1 -1 1.5
 * string: '' "" ``(template string)
 * boolean: true false
 * null
 * undefined: var a; // a= undefined
 * BigInt
 * Symbol
 */

/**
 * 2. Kiểu dữ liệu phức tạp
 * array (mảng)
 * object
 */

// Toán tử:
/**
 * Toán tử số học: + - * / % ** ,...
 * Toán tử so sánh: > < == >= <= != ===
 * Toán tử logic: ! && ||
 * Toán tử gán: = += (i+=2 <=> i = i +2) -= ,..
 */


// Biểu thức điều kiện
// if else, switch case, toán tử 3 ngôi

var isCheck = (1 != true) ? "Đúng" : "Sai";
// console.log(isCheck);

// vòng lặp
// biết trước số lần lặp: for, for in, for of, forEach
// chưa biết trước: while, do while


// DOM là gì ? 
// Document Object Model - Mô hình đối tượng tài liệu
// 3 thành phần:
// 1. Element: thêm mới : creatElement
/**
 * id class tag
 * css selector
 */
var h1Element = document.getElementById('heading'); // trả về 1 phần tử chứa id
// console.log(h1Element);

// trả về 1 mảng: HTMLCollection
var pElements = document.getElementsByClassName('paragraph'); // trả về 1 mảng chứa các phần tử có class thỏa mãn

pElements= document.getElementsByTagName('p');// trả về 1 mảng chứa các phần tử có thẻ(tag) thỏa mãn
// console.log(pElements);

// querySelector trả về 1 phần tử đầu tiên tìm thấy
h1Element = document.querySelector('#heading'); // # : id
// console.log(h1Element);
var pElement = document.querySelector('.paragraph'); // . : class
pElement = document.querySelector('p'); // : tag
// console.log(pElement);

// querySelectorAll trả về 1 mảng : NodeList
pElements = document.querySelectorAll('.paragraph');
// console.log(pElements);
// tự tìm hiểu sự khác nhau giữa NodeList và HTMLCollection


// 2. Attribute
h1Element = document.querySelector('#heading'); // # : id
h1Element.classList.add('heading-title');
h1Element.style.color = 'red';

h1Element.setAttribute("data","chinhpd5");

// console.log(h1Element.getAttribute("data"));

// 3. Text
h1Element = document.querySelector('#heading'); // # : id

// console.log(h1Element.textContent);
// console.log(h1Element.innerText);

// h1Element.innerHTML = '<i>chinhpd5</i>'

// Làm việc (Thêm sửa xóa) các thành phần (element attribute text);









