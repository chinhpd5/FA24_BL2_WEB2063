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
// khai báo biến lưu trữ
let trElements = '';

// duyệt qua mảng data sử dụng forEach
data.forEach((item,index)=>{
    // console.log(item); // giá trị của các phần tử trong mảng qua mỗi lần lặp
    // console.log(index); // vị trí của các phần tử, bắt đầu từ 0
    // nối chuỗi += trElements
    // sử dụng ``(tempalte string)-> ${}
    trElements += `
        <tr>
            <th scope="row">${index+1}</th>
            <td>${item.name}</td>
            <td>${item.age}</td>
            <td>${item.gender ? 'Nam': "Nữ"}</td>
            <td>${item.mark}</td>
        </tr>
    `
})

// console.log(trElements);
// lấy ra phần tử tbody của table
const tbodyElement = document.querySelector('tbody');
// gán trElements vào tbody thông qua innerHTML
tbodyElement.innerHTML = trElements;


// find: duyệt qua mảng, trả về 1 phần tử đầu tiên tìm thấy thỏa mãn ĐK thông qua (return)
// sau khi tìm được phần tử -> kết thúc vòng lặp

const findItem = data.find((item,index)=>{
    // console.log(index);
    // return item.age == 21;
    return item.gender; // item.gender == true
})

// console.log(findItem);


// some: duyệt qua mảng -> trả về boolean (true | false)
// nếu mảng có ít nhất 1 phần tử thỏa mãn ĐK (return) -> true -> kết thúc vòng lặp
// nếu tất cả các phần tử trong mảng KHÔNG thỏa mãn ĐK -> false

const checkSome = data.some((item,index)=>{
    // console.log(index);
    // return item.mark < 5;
    return item.age >21;
})

// console.log(checkSome);

// every: duyệt qua mảng -> trả về boolean (true | false)
// nếu tất cả phần tử trong mảng thỏa mãn ĐK (return) -> true
// nếu có ít nhất 1 phần tử KHÔNG thõa Đk -> false -> kết thúc vòng lặp

const checkEvery = data.every((item,index)=>{
    console.log(index);
    // return !item.gender; // item.gender == false
    return item.age >= 19;
})

console.log(checkEvery);

