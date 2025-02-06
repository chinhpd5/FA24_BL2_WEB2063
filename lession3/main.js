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
    </tr>
  `;
})

// console.log(trElement);

const trBodyElement = document.querySelector('tbody');
trBodyElement.innerHTML = trElement;


