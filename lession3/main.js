// Các phương thức làm việc với mảng

/**
 * forEach
 * find
 * some
 * every
 * map
 * filter
 * reduce
 */

var data = [
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
        mark:4
    },
    {
        name: "chinhpd8",
        age:19,
        gender: true,
        mark: 8
    },
    {
        name: "chinhpd9",
        age:20,
        gender: false,
        mark: 5
    }
]

// forEach: duyệt qua toàn bộ các phần tử trong mảng
// giá trị lưu trữ
let trElements = '';
// duyệt qua mảng data sử dụng forEach
data.forEach((item,index)=>{
    // console.log(item); //giá trị các phần tử trong mảng data qua mỗi lần lặp
    // console.log(index); // vị trí các phần tử trong mảng
    // nối chuỗi trElements +=
    // sử dụng `` -> có thể sử ${}
    trElements += `
        <tr>
            <th scope="row">${index+1}</th>
            <td>${item.name}</td>
            <td>${item.age}</td>
            <td>${item.gender ? "Nam": "Nữ"}</td>
            <td>${item.mark}</td>
        </tr>
    `
})

// console.log(trElements);
// lấy ra phần tử tbody
const tbodyElement = document.querySelector('tbody');
// gán vào tbody qua phương thức innerHTML
tbodyElement.innerHTML = trElements

// find: duyệt qua mảng và trả về phần duy nhất đầu tiên thỏa mãn điều kiện(return)

const findItem = data.find((item,index)=>{
    // console.log(index);
    // return item.age == 19;
    // return !item.gender; // item.gender == false
    return item.mark < 10;
})
// tìm phần có điểm < 10 đầu tiên
// console.log(findItem);


// some: duyệt qua mảng, trả về giá trị boolean (true|false)
// nếu trong mảng có ít nhất 1 phần tử thỏa mãn ĐK (return) -> true -> kết thúc vòng lặp
// nếu tất cả các phần tử trong mảng KHÔNG thỏa mãn ĐK -> false

const checkSome = data.some((item,index)=>{
    // console.log(index);
    // return item.mark <= 2;
    return item.mark == 4;
})
// console.log(checkSome);

// every : duyệt qua mảng, trả về giá trị boolean (true|false)
// nếu tất cả các phần tử thỏa mãn ĐK (Return) -> true
// nếu có ít nhất 1 phần tử KHÔNG thỏa mãn ĐK -> fasle -> kết thúc vòng lặp

const checkEvery = data.every((item,index)=>{
    console.log(index);
    // return item.gender; // item.gender == true
    return item.age >= 18;
})

console.log(checkEvery);


