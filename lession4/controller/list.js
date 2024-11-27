/**
 * get: lấy thông tin (mặc định)
 * post: thêm mới
 * put: cập nhật
 * delete: xóa
 */
function getListProduct(){
    // Bước 1: call api lấy danh sách sản phẩm
    fetch(`http://localhost:3000/products`)//,{method:'get'} mặc định
        .then((res)=>{
            // console.log(res);
            return res.json(); // nhận lại data trong then tiếp theo
        })
        .then((data)=>{
            // console.log(data);
            // Bước 2: đổ dữ liệu ra table
            // Bước 2.1: lặp (map) qua data
            const trElements = data?.map((item,index)=>{
                return `
                    <tr>
                        <th scope="row">${index+1}</th>
                        <td>${item.name}</td>
                        <td>${item.quantity}</td>
                        <td><img style="height:70px" src="${item.image}" alt=""></td>
                        <td>
                            <button data-id="${item.id}" class="btn-delete btn btn-danger">Xóa</button>
                            <a href="edit.html?id=${item.id}" class="btn btn-warning">Sửa</a>
                        </td>
                    </tr>
                `
            }).join(''); //join: chuyển mảng -> chuỗi
            // console.log(trElements);

            // Bước 2.2: đổ ra tbody
            const tbodyElement= document.querySelector('tbody');
            tbodyElement.innerHTML = trElements;
            
            // xử lý logic xóa
            handleDelete();
        })
        .catch((err)=>{
            alert(`Lỗi ${err}`)
        })
        // .finally()
}

getListProduct();

function handleDelete(){
    // Bước 1: Lấy danh sách (querySelectorAll) các nút xóa
    const btnDeletes = document.querySelectorAll('.btn-delete');
    // console.log(btnDeletes);

    // Bước 2: Định nghĩa sự kiên cho từng nút xóa
    btnDeletes.forEach((item)=>{
        // console.log(item);
        item.addEventListener('click',()=>{
            // console.log('click!!!');

            if(window.confirm("bạn có chắc chắn muốn xóa không?")){
                // console.log("Xóa");
                // Bước 3: Lấy id
                // cách 1:
                // const id = item.dataset.id;
                // cách 2:
                const id = item.getAttribute('data-id');
                console.log(id);

                // Bước 4: xóa sản phẩm trong db
                fetch(`http://localhost:3000/products/${id}`,{
                    method: 'delete' // phương thức xóa
                })
                    .then(res=>{
                        if(res.ok){
                            alert("Xóa thành công")
                        }else{
                            alert("Xóa thất bại")
                        }
                    })
                    .catch(err=>console.log(`Lỗi ${err}`))
            }
            
        })
        
    })
}

