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
let trElement = '';

data.forEach((item,index)=>{
  // console.log(item); // phần tử 1: giá trị các phần tử
  // console.log(index); // phần tử 2: vị trí(stt) của các phần tử
  trElement += `
    <tr>
      <th scope="row">${index+1}</th>
      <td>${item.name}</td>
      <td>${(item.gender ? 'Nam': 'Nữ')}</td>
      <td>${item.mark}</td>
      <td>${item.age}</td>
    </tr>
  `;
})

// console.log(trElement);

// const trBodyElement = document.querySelector('tbody');
// trBodyElement.innerHTML = trElement;

// find: duyệt qua mảng và trả về phần đầu tiên thỏa mãn điều kiện (return)
// nếu có ít nhất 1 phần tử thỏa mãn đk -> trả về phần tử đó và kết thúc vòng lặp
// nếu không có phần tử nào -> trả về undefined
// tìm kiếm 1 sinh viên có tuổi nhỏ hơn 20

const findItem = data.find((item,index )=>{
  // console.log(index);
  // return item.mark == 8
  // return item.mark > 10
  // return !item.gender
  return item.age < 20
})

// console.log(findItem);

// some: duyệt qua mảng trả về giá trị boolean
// Nếu có ít nhất 1 phần tử thỏa mãn ĐK (return) -> true -> kết thúc vòng lặp
// Nếu tất cả KHÔNG thỏa mãn ĐK -> false

const checkSome = data.some((item,index)=>{
  // console.log(index);
  
  // return item.mark < 4
  return !item.gender
})

// console.log(checkSome);

// every: duyệt qua mảng trả về giá trị boolean
// nếu toàn bộ phần tử trong mảng thỏa mãn ĐK -> true
// Nếu có ít nhất 1 phần tử KHÔNG thỏa mãn ĐK -> false -> kết thúc vòng lặp

const checkEvery = data.every((item,index)=>{
  // console.log(index);
  
  // return item.age > 15
  return item.mark > 5
})

// console.log(checkEvery);



// filter: duyệt qua toàn bộ phần tử trong mảng
// trả về mảng mới chứa các phần tử thỏa mãn đk (return)

const filterElement = data.filter((item,index)=>{
  // return !item.gender
  return item.mark >= 5
})

console.log(filterElement);


// map: duyệt qua toàn bộ phần tử trong mảng
// trả về mảng mới thông return

const trMap = data.map((item,index)=>{
  return `
    <tr>
      <th scope="row">${index+1}</th>
      <td>${item.name}</td>
      <td>${(item.gender ? 'Nam': 'Nữ')}</td>
      <td>${item.mark}</td>
      <td>${item.age}</td>
    </tr>
  `
}).join('') // join chuyển mảng -> chuỗi

// console.log(trMap);
const trBodyElementMap = document.querySelector('tbody');
trBodyElementMap.innerHTML = trMap;


// reduce
/**
 * callback(preValue,item,index)
 * + preValue: giá trị lưu trữ qua các lần lặp
 * + item: giá trị các phần tử tại thời điểm lặp
 * + index: vị trí 
 * initValue: giá trị khởi tạo cho preValue
 */

const initValue = 0;
const total = data.reduce((preValue,item,index)=>{
  return preValue += item.mark;
},initValue)

console.log(total);

// ví dụ 2: tìm điểm max của mảng data
// let max = data[0].mark;

// data.forEach((item)=>{
//   if(item.mark > max)
//     max= item.mark
// })

// console.log(max);

let maxMark = data.reduce((preValue,item)=>{
  return (item.mark > preValue ? item.mark : preValue)
},data[0].mark)

console.log(maxMark);

let minMark = data.reduce((preValue,item)=>{
  return (item.mark < preValue ? item.mark : preValue)
},data[0].mark)

console.log(minMark);





