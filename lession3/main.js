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
        mark: 9
    },
    {
        name: "chinhpd9",
        age:20,
        gender: false,
        mark: 5
    }
]

// forEach: duyệt qua toàn bộ các phần tử trong mảng

// khai báo trElements
var trElements = '';
// duyệt qua mảng data (forEach)
data.forEach((item,index)=>{
    // console.log(item); // giá trị các phần tử qua mỗi lần lặp
    // console.log(index); // vị trí của các phần tử, bắt đầu từ 0

    // nối chuỗi trElements +=
    // sử dụng `` (template string) có thể ${}
    trElements += `
        <tr>
            <th scope="row">${index + 1}</th>
            <td>${item.name}</td>
            <td>${item.age}</td>
            <td>${item.gender ? "Nam": "Nữ"}</td>
            <td>${item.mark}</td>
        </tr>
    `
})

// console.log(trElements);
// lấy ra phần tử toby thông qua querySelector
const tbodyElement = document.querySelector('tbody');
// gán giá trị trElements vào tbodyElement thông qua innerHTML
// tbodyElement.innerHTML = trElements
// tbodyElement.innerHTML = trElements;


// find: duyệt qua mảng
// tìm kiếm 1 phần tử gần nhất thỏa mãn ĐK (return)
// kết thúc vòng lặp
const findItem = data.find((item,index)=>{
    // console.log(index);
    // return item.age == 21;
    return !item.gender; // item.gender == false 
})

// console.log(findItem);

// some: trả về kết quả boolean (true| false);
// true: trong mảng có ít nhất 1 phần thỏa mãn ĐK(return) -> kết thúc vòng lặp
// false: trong mảng KHÔNG có phần tử nào thỏa mãn ĐK

const checkSome = data.some((item,index)=>{
    // console.log(index);
    return item.age >= 21;
})

// console.log(checkSome);

// every: trả về kết quả boolean (true | false);
//true: nếu trong mảng có toàn bộ các phần tử thỏa mãn ĐK (return)
//false: nếu trong mảng có ít nhất 1 phần KHÔNG thỏa mãn ĐK -> kết thúc vòng lặp

const checkEvery = data.every((item,index)=>{
    // console.log(index);
    return item.mark >= 4
})

// console.log(checkEvery);

// map: duyệt qua toàn bộ các phần tử trong mảng
// trả về 1 mảng mới chứa các phần tử thông qua return

const trElementsMap = data.map((item,index)=>{
    return `
        <tr>
            <th scope="row">${index + 1}</th>
            <td>${item.name}</td>
            <td>${item.age}</td>
            <td>${item.gender ? "Nam": "Nữ"}</td>
            <td>${item.mark}</td>
        </tr>
    `
}).join('');// join chuyển mảng -> chuỗi

console.log(trElementsMap);
tbodyElement.innerHTML = trElementsMap;



