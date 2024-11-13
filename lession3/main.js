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

console.log(trElement);
// lấy phần tử tbody querySelector
const tbodyElement = document.querySelector('tbody');
// gán dữ liệu trElement thông qua phương thức innerHTML
tbodyElement.innerHTML = trElement;


