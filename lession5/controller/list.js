//rest api
/**
 * get: lấy danh sách, 1 bản ghi
 * post: thêm
 * put: cập nhật
 * delete: xóa
 */


const getAllProducts = async () =>{
  try {
    // B1: lấy dữ liệu từ db.json
    const res = await fetch(`http://localhost:3000/products`);
    const data = await res.json();
    // console.log(data);

    renderProducts(data)

  } catch (error) {
    console.log(error);
  }
}

getAllProducts();

const renderProducts = (data) => {
  // B2: Hiển thị dữ liệu ra table
  const trList = data.map((item,index)=>{
    return `
      <tr>
        <th scope="row">${index + 1}</th>
        <td>${item.name}</td>
        <td>${item.price}</td>
        <td><img src="${item.imageURL}" style="height: 70px;" alt=""></td>
        <td>${item.category}</td>
        <td>
          <button onClick="handleDelete(${item.id})" class="btn btn-danger">Xóa</button>
          <a href="edit.html?id=${item.id}" class="btn btn-warning">Sửa</a>
        </td>
      </tr>
    `
  }).join("") // join chuyển mảng về chuỗi

  // console.log(trList);
  const tbodyElement = document.querySelector("#tbody");
  tbodyElement.innerHTML = trList
  
}

const handleDelete = async (id) =>{
  // console.log(id);
  if(id){
    if(window.confirm("Bạn có chắc chắn muốn xóa không?")){
      try {
        const res = await fetch(`http://localhost:3000/products/${id}`,{method: 'delete'})
        // console.log(res);
        if(res.ok){
          alert("Xóa thành công")
        }
        
      } catch (error) {
        console.log(error);
      }
    }
  }
  
}