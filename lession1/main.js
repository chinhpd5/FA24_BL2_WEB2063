// Biến var let const

const PI = 3.14;
// PI = 3;

// var let

// PascalCase
var MyName = "chinhpd5";

// camelCase (sử dụng)
var myName = 'chinhpd5';

var name= "chinh";
var name= 'Nam';

let age= 30;
age= 31;

// Phạm vi (Scope)
// Global scope
let a = 30; // var, let giống nhau: có thể truy cập từ phạm vi global
{
    // block
    // console.log(a);
}

// Blcok scope (if else, for,...)
{
    var b = 20; // var: có thể nhận bên ngoài block scope
    let c = 10; // let: KHÔNG thể nhận bên ngoài block scope
}

// console.log(b);
// console.log(c);

// local scope (function)
function localScope(){
    var d = 5; // var và let đều không thể truy xuất từ bên ngoài local scope
}

// console.log(d);

// Kiểu dữ liệu trong JS:
/**
 * 1. Kiểu dữ liệu nguyên thủy
 * number: 1, -2, 2.5
 * string: '' "" ``
 * boolean: true false
 * null: var a = null
 * undefined: var b;
 * 
 * symbol
 * bigInt
 * 
 * 2. Kiểu dữ liệu phức tạp
 * array: [1,2,3,"a","b"]
 * object: {
 *  name: "chinhpd5",
 *  age: 20
 * }
 */

// Toán tử trong JS
/**
 * 1. Toán tử so sánh: > < >= <= == != === (so sánh giá trị và kiểu dữ liệu)
 * 2. Toán tử gán: = ,+= (ví dụ: i +=2 <=> i = i+2), -=, /=,*=,...
 * 3. Toán tử logic: && || !
 * 4. Toán tử số học: + - * / % ....
 */

// Cú pháp
// Biểu thức điều kiện
// if else, switch case, toán tử 3 ngôi

let result = (1 != true) ? 'Đúng' : 'Sai';

// console.log(result);

// vòng lặp

// biết trước số lần lặp
// for, forEach, for of, for in

// Không biết trước số lần lặp
// while, do while


// DOM (Document Object Model): Mô hình đối tượng tài liệu
// Khi 1 website tải thì khởi tạo DOM của trang đó:
/**
 * Element
 * Attribute
 * Text
 */

// 1. Element
/***
 * id, class, tag
 * css selector
 */

/**
 * createElement
 * removeElement
 */


var h1Element = document.getElementById('title');// trả về 1 phần tử đầu tiên tìm thấy
// console.log(h1Element);

var h1Elements = document.getElementsByClassName('paragraph'); // trả về 1 mảng(HTML Collection)
h1Elements = document.getElementsByTagName('p');// trả về 1 mảng(HTML Collection)
// console.log(h1Elements);

var element = document.querySelector('#title');//#: id trả về 1 phần tử đầu tiên tìm thấy
element = document.querySelector('.paragraph'); // . : class
element = document.querySelector('p'); //  : tag
// console.log(element);

var elements = document.querySelectorAll('.paragraph'); // trả về 1 mảng (NodeList) chứa tất cả các phần tử được tìm thấy
// console.log(elements);

// tìm hiểu sự khác nhau của HTMLCollection và NodeList

// 2 Attribute


var elementH1 = document.querySelector('#title');
elementH1.id = "new-title";
elementH1.style.color = 'red';

elementH1.setAttribute("data","chinhpd5");
var getEle = elementH1.getAttribute('data');
// console.log(getEle);

// Text

let text1 = elementH1.textContent;
let text2 = elementH1.innerText;

// console.log(text1);
// console.log(text2);

// elementH1.textContent = 'new chinhpd5'
// elementH1.innerText = '<i>new chinhpd5</i>'
elementH1.innerHTML = '<i>new chinhpd5</i>'








