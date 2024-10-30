// console.log("xin chào các bạn");

// Biến trong JS
// var const let

// const (Biến hằng)

const PI = 3.14;

// var let;

// camel case
var myName = 'chinhpd5';

// pascal case
var MyName = 'chinhpd5';

// var
var myLove = 'chinhpd5';
var myLove = 'chinhpd6';
// console.log(myLove);

// let 
let myLove1 = 'chinhpd7';
myLove1 ='chinhpd8';

// scope
// 1. Global scope
var name = "chinhpd5";
{
    //
    // console.log(name);
}

// 2. block scope (if else, switch, for,...)
{
    var age = 30;
    let age1 = 31;
}

// console.log(age); // có thể truy cập khi sử dụng từ khóa var
// console.log(age1); // KHÔNG thể truy cập khi sử dụng từ khóa let

// 3. local scope (function)
function sayHello(){
    let home ='Hà Nội';
    // var và let KHÔNG thể truy xuất bên ngoài local scope
}
// console.log(home);

// Kiểu dữ liệu trong JS
// 1. Kiểu dữ liệu nguyên thủy:
/**
 * string: '', "", ``(tempalate string)
 * number: 1, -2, 1.5
 * null: var a = null
 * boolean: true false
 * undefined: var a;
 * 
 * BigInt
 * Symbol
 */

// 2. Kiểu dữ liệu phức tạp:
// - array
// - object

// Toán tử trong JS
/**
 * Toán tử số học: + - * / ** % ,...
 * Toán tử gán: =, += (i+=1 <=> i = i + 1), -= *=,...
 * Toán tử so sánh: == > < >= <= != === ,..
 * Toán tử logic: ! && ||
 */

// Cú pháp

// Toán tử 3 ngôi
const isCheck = (1 == true) ? 'Đúng' : 'Sai';
// Biểu thức điều kiện: if esle, switch case, 
// vòng lặp (for, for of, for in, forEach, while, do while)

// DOM (Document Object Model)
// 1. element
// 2. attribute
// 3. text

// 1. element
/**
 * id, class, tag
 * css selector
 */

const h1Element = document.getElementById('heading');
// console.log(h1Element);
const pElements = document.getElementsByClassName('paragraph');
// console.log(pElements);
const pElements1 = document.getElementsByTagName('p');
// console.log(pElements1);

//querySelector trả về 1 phần tử tìm thấy đầu tiên
var element = document.querySelector('#heading');// id #
element = document.querySelector('.paragraph'); // class .
element = document.querySelector('p');// tag
// console.log({key: element});

// 2. attribute

var element = document.querySelector('#heading');

// element.classList = 'title-1'
element.style.color ="red";// css

element.setAttribute("data","chinhpd5");

console.log(element.getAttribute('data'));

// 3. Text
var element1 = document.querySelector('#heading');

console.log(element1.textContent);
console.log(element1.innerText);

// innerHTML
var div = document.querySelector('#content');
console.log(div);

div.innerHTML = `<i>chinhpd5</i>`















