//  Các phương thức làm việc với mảng

/**
 * forEach
 * find
 * some
 * every
 * map
 * filter
 * reduce
 */

const data = [
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
        mark: 8
    }
]

let trElement = '';
// sử dụng forEach để duyệt mảng data
data.forEach((item,index)=>{
    // console.log(item); // giá trị của các phần tử trong mảng data qua mỗi lần lặp
    // console.log(index); // vị trí của các phần tử trong mảng data, bắt đầu từ 0
    // nối chuỗi (+=) với các thẻ <tr>..</tr>

    trElement += `
        <tr>
            <th scope="row">${index+1}</th>
            <td>${item.name}</td>
            <td>${item.age}</td>
            <td>${(item.gender ? 'Nam': 'Nữ')}</td>
            <td>${item.mark}</td>
        </tr>
    `; // đổ dữ liệu và <td></td>
})

// console.log(trElement);
// lấy ra phần tử tbody
const tbodyElement = document.querySelector('tbody');
// gán giá trị trElement vào tbody thông qua phương thức 'innerHTML'
tbodyElement.innerHTML = trElement

