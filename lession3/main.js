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
        mark: 4
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
// tbodyElement.innerHTML = trElement

// find: tìm kiếm 1 phần tử trong mảng thỏa mãn ĐK (return)
// trả về phần tử đầu tiên tìm thấy và kết thúc vòng lặp

const findItem = data.find((item,index)=>{
    // console.log(index);
    return !item.gender; // tìm kiếm phần tử có gender == false
})

// console.log(findItem);

// some: trả về boolean (true | false)
// duyệt qua 1 mảng
// trả về true nếu có ít nhất 1 phần tử thỏa mãn ĐK (return) -> kết thúc vòng lặp
// trả về false nếu tất các phần tử trong mảng KHÔNG thỏa mãn ĐK

const checkSome = data.some((item,index)=>{
    // console.log(index);
    return item.mark < 5;
})

// Kiểm tra mảng data có 1 phần tử có điểm < 5?

// console.log(checkSome);

// every: trả về giá trị boolean (true | false)
// trả về giá trị true nếu tất cả các phần tử thỏa mãn ĐK (return)
// trả về giá trị false nếu ít nhất 1 phần tử KHÔNG thỏa mãn ĐK -> kết thúc vòng lặp

const checkEvery = data.every((item, index)=>{
    // console.log(index);
    return item.gender;
})

// console.log(checkEvery);


// filter: duyệt qua tất cả các phần tử trong mảng
// trả về tất cả các phần tử thoải mãn ĐK (return)

const filterElements = data.filter((item,index)=>{
    return !item.gender
    // return item.mark > 7; 
})

console.log(filterElements);


// map: duyệt qua tất cả các phần tử mảng
// trả về 1 mảng mới (return)

const mapTrElement = filterElements.map((item,index)=>{
    return `
        <tr>
            <th scope="row">${index+1}</th>
            <td>${item.name}</td>
            <td>${item.age}</td>
            <td>${(item.gender ? 'Nam': 'Nữ')}</td>
            <td>${item.mark}</td>
            <td>${(item.mark > 5? "Giỏi": "Trung bình")}</td>
        </tr>
    `
}).join(''); // join chuyển 1 mảng -> 1 chuỗi
// console.log(mapTrElement);
tbodyElement.innerHTML = mapTrElement;

// reduce
// preValue: giá trị lưu trữ qua các lần lặp
// item: giá trị các phần tử
// index: vị trí
// initValue: giá trị khởi tạo cho preVulue

// tính tổng điểm các phần tử có trong mảng data
var initValue =0;
const result = data.reduce((preValue,item,index)=>{
    return preValue += item.mark; //29
},initValue)

console.log(result);


