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

// Kiểu dữ liệu JS
/**
 * 1. Kiểu dữ liệu nguyên thủy
 * - string: '', "", ``(template string)
 * - number: 1 -1 1.5
 * - null
 * - boolean: true false
 * - undefined: var a;
 * - BigInt
 * - Symbol
 */

/**
 * 2. Kiểu dữ liệu phức tạp
 * - array : mảng
 * - object
 */

/**
 * Toán tử:
 * Toán tử số học: + - * / ** % ++ --
 * Toán gán: = +=(i +=3 <=> i = i + 3) -= *= ,...
 * Toán so sánh: > < == >= <= != ===
 * Toán tử logic: ! && ||
 */

// Biểu thức điều kiện
// if else, switch case, toán tử 3 ngôi
const isCheck = (1 != true) ? 'Đúng' : 'Sai';
//  console.log(isCheck);

// Vòng lặp
// for, while, do while, for in, for of, forEach, map, filter, reduce, some, every


// DOM là gì? 5 phút tự tìm hiểu
// Document Object Model (Mô hình đối tượng tài liệu)
// 3 thành phần

// 1. Element
/**
 * id, class, tag
 * css selector
 */

var h1Element = document.getElementById('heading'); // trả về 1 phần tử 
// console.log(h1Element);

var pElements = document.getElementsByClassName('pragraph');// trả về HTMLCollection: mảng
// mảng chứa các phần tử có class thỏa mãn điều kiện

pElements= document.getElementsByTagName('p');// trả về HTMLCollection: mảng
// mảng chứa các phần tử có tag thỏa mãn điều kiện

// console.log(pElements);

// querySelector trả về duy nhất 1 phần tử đầu tiên tìm thấy thỏa mãn ĐK
var element = document.querySelector('#heading'); //# : id
var element = document.querySelector('.pragraph'); // . : class
var element = document.querySelector('h1') // : tag
// console.log(element);

// querySelectorAll: trả về NodeList: mảng
// tìm hiểu sự khác nhau giữa NodeList và HTMLCollection
var elements = document.querySelectorAll('.pragraph');
// console.log(elements);

// 2. Attribute
var element1 = document.querySelector('#heading'); //# : id

element1.classList.add('heading-title');
element1.style.color = 'red';
element1.setAttribute('data',`chinhpd5`);
// console.log(element1.getAttribute("data"));

// 3. Text
console.log(element1.textContent);
console.log(element1.innerText);

element1.innerHTML = '<i>chinhpd5</i>'

// Khi sử dụng DOM làm việc(thêm sửa xóa) các thành phần trong DOM










