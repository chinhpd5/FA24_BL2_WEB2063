// các phương thức làm việc với mảng

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
];

// forEach: duyệt qua toàn bộ các phần tử trong mảng
//  tạo biến lưu trữ
let trElements = '';
// duyệt qua mảng data sử dụng forEach
data.forEach((item,index)=>{
    // console.log(item); // giá trị các phần tử trong mảng qua mỗi lần lặp
    // console.log(index); // vị trí các phần tử, bắt đầu 0
    // nối chuỗi += với trElements
    // sử dụng `` có thể ${}
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
// gán giá trị trElements vào tbody thông qua innerHTML
tbodyElement.innerHTML = trElements;
