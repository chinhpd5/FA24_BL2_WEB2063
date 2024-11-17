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
// tbodyElement.innerHTML = trElements;

// find: duyệt qua mảng 
//trả về 1 phần tử duy nhất đầu tiên tìm thấy thỏa mãn DK (return)

const findItem = data.find((item,index)=>{
    // return item.age == 19;
    // return !item.gender; // item.gender == false
    return item.mark <= 5;
})
// tìm phần tử đầu tiên có điểm <=5 
// console.log(findItem);

//some: duyệt qua các phần tử trong mảng trả về boolean (true | false)
// nếu có ít nhất 1 phần tử trong mảng thỏa mãn ĐK (return) -> true -> kết thúc vòng lặp
// nếu toàn bộ phần tử trong mảng KHÔNG thỏa mãn ĐK -> false

const checkSome = data.some((item,index)=>{
    // console.log(index);
    // return item.mark < 5;
    return item.mark < 2;
})
// console.log(checkSome);


//every: duyệt qua các phần tử trong mảng trả về boolean (true | false)
// nếu tất cả các phần tử trong mảng thỏa mãn ĐK (return) -> true
// nếu có ít nhất 1 phần tử KHÔNG thỏa mãn ĐK -> false

const checkEvery = data.every((item,index)=>{
    // console.log(index);
    // return item.age >=18;
    return item.gender; // item.gender == true;
})
// console.log(checkEvery);


//map: duyệt qua toàn bộ các phần tử trong mảng
// trả về 1 mảng mới chứa các phần tử thông qua return

const trElemetsMap = data.map((item,index)=>{
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

// console.log(trElemetsMap);
tbodyElement.innerHTML = trElemetsMap;

// filter: duyệt qua toàn bộ các phần tử trong mảng
// trả về mảng mới chứa các phần tử thỏa mãn DK return

const filterData = data.filter((item)=>{
    // return item.mark > 5;
    return !item.gender;
})

// console.log(filterData);

// reduce
// preValue: giá trị lưu trữ qua mỗi lần lặp
// item: giá trị các phần tử
// index: vị trị
// initvalue: giá trị khởi tạo cho preValue
var initvalue = 0;

const total = data.reduce((preValue,item,index)=>{
    return preValue += item.mark;
    // preValue(0) + 10 = 10 + 4 = 14 + 8 = 22 + 5 = 27
},initvalue)

console.log(total);



