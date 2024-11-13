// Các phương thức làm việc với mảng

/**
 * forEach
 * find
 * some
 * every
 * map
 * filter
 * reducer
 */

let data = [
    {
        name: "chinhpd5",
        age:20,
        gender: true,
        mark: 10
    },
    {
        name: "chinhpd6",
        age:21,
        gender: false,
        mark:7
    },
    {
        name: "chinhpd8",
        age:19,
        gender: true,
        mark: 9
    },
    {
        name: "chinhpd9",
        age:20,
        gender: false,
        mark: 9
    }
]

// 1. forEach: duyệt qua toàn bộ các phần tử trong mảng
// khai báo biến lưu trữ
let trElement = '';
// duyệt qua mảng data sử dụng forEach
data.forEach((item,index)=>{
    // console.log(item); // giá trị của các phần tử qua mỗi lần lặp
    // console.log(index); // vị trí của các phân tử qua mỗi lần lặp, bắt đầu từ 0
    // nối chuỗi trElement (+=)
    // đổ dữ liệu và td tương ứng
    // sử dụng `` (template string) có thể sử dụng ${}
    trElement += `
        <tr>
            <th scope="row">${index+1}</th>
            <td>${item.name}</td>
            <td>${item.age}</td>
            <td>${item.gender ? "Nam": "Nữ"}</td>
            <td>${item.mark}</td>
        </tr>
    `
})

// console.log(trElement);
// lấy phần tử tbody querySelector
const tbodyElement = document.querySelector('tbody');
// gán dữ liệu trElement thông qua phương thức innerHTML
// tbodyElement.innerHTML = trElement;


// find: duyệt qua mảng
// tìm kiếm 1 phần tử đầu tiên thỏa mãn điều kiện (return)
// và kết thúc vòng lặp

const findItem = data.find((item,index)=>{
    // console.log(index);
    // return item.age > 20;
    return item.mark == 9;
})

// console.log(findItem);

// some: duyệt qua mảng trả về giá trị boolean (true | false)
// trả về giá trị true nếu có ít nhất 1 phần tử thỏa mãn ĐK (return) -> kết thúc vòng lặp
// trả về giá trị fasle nếu toàn bộ phần tử trong mảng KHÔNG thỏa mãn ĐK

const checkSome = data.some((item,index)=>{
    // console.log(index);
    // return !item.gender; //item.gender == false
    return item.mark < 5;
})

// console.log(checkSome);

// every: duyệt qua mảng trả về giá trị boolean (true | false)
// trả về giá trị true nếu toàn bộ phần tử trong mảng thỏa mãn ĐK (return)
// trả về giá trị false nếu ít nhất 1 phần tử KHÔNG thỏa mãn ĐK -> kết thúc vòng lặp

const checkEvery = data.every((item,index)=>{
    // console.log(index);
    // return item.mark > 5;
    return item.age >= 20;
})

// console.log(checkEvery);

// map: duyệt qua toàn bộ các phần tử trong mảng
// trả về 1 mảng mới thông qua các phần từ của (return)

const trElementMap =  data.map((item,index)=>{
    return `
        <tr>
            <th scope="row">${index+1}</th>
            <td>${item.name}</td>
            <td>${item.age}</td>
            <td>${item.gender ? "Nam": "Nữ"}</td>
            <td>${item.mark}</td>
        </tr>
    `
}).join('');// join: chuyển mảng -> chuỗi

console.log(trElementMap);
tbodyElement.innerHTML = trElementMap




