/**
 * get: lấy thông tin
 * post: thêm mới
 * put: cập nhật
 * delete: xóa
 */

function getListProduct (){
    // b1: call api(fetch) lấy danh sách sản phẩm db
    fetch(`http://localhost:3000/products`)//,{method:'get'}: mặc định phương thức get
        .then((res)=>{
            // console.log(res);
            // lấy dữ liệu
            return res.json();// được thực thi trong then tiếp
        })
        .then((data)=>{
            // console.log(data);
            // b2: đổ dữ liệu ra table
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
            }).join('');// join: chuyển mảng -> chuỗi
            // console.log(trElements);
            
            const tbodyElement = document.querySelector('tbody');
            tbodyElement.innerHTML = trElements;

            // xử lý xóa
            handleDelete();
        })
        .catch((err)=>{
            console.log(err);
        })
        // .finally()

}

getListProduct();

function handleDelete(){
    // b1: lấy danh sách các nút xóa
    const btnDeletes = document.querySelectorAll('.btn-delete');
    // console.log(btnDeletes);
    // b2: định nghĩa sự kiện cho từng nút xóa
    btnDeletes.forEach((item)=>{
        // console.log(item);
        item.addEventListener('click',async ()=>{
            // console.log('click!!!!!');
            // b3: lấy id của nút xóa
            // cách1
            // const id = item.dataset.id;
            // cách2
            const id = item.getAttribute('data-id');
            // console.log(id);
            // b4: xóa phần tử
            if(window.confirm("Bạn có chắc chắn muốn xóa không?")){
                // console.log("Xóa");
                // b5: call api xóa (promise)
                fetch(`http://localhost:3000/products/${id}`,{
                    method:'delete'
                })
                    .then((res)=>{
                        if(res.ok){
                            alert("Xóa thành công promise")
                        }
                    })
                    .catch(err=>console.log(err))
                
            }
            
        })
        
    })
}

//=================
// async await

async function getListProductAsync(){
    try {
        // b1: call api(fetch) lấy danh sách sản phẩm db
        const res = await fetch('http://localhost:3000/products');
        const data = await res.json();
        // console.log(data);

        // b2: đổ dữ liệu ra table
        const trElements = data?.map((item,index)=>{
            return `
                <tr>
                    <th scope="row">${index+1}</th>
                    <td>${item.name}</td>
                    <td>${item.quantity}</td>
                    <td><img style="height:70px" src="${item.image}" alt=""></td>
                    <td>
                        <button data-id="${item.id}" class="btn-delete btn btn-danger">Xóa</button>
                    </td>
                </tr>
            `
        }).join('');// join: chuyển mảng -> chuỗi
        // console.log(trElements);
        
        const tbodyElement = document.querySelector('tbody');
        tbodyElement.innerHTML = trElements;

        // xử lý logic xóa
        handleDeleteAsync();
    } catch (error) {
        console.log(error);
    }
    
}

// getListProductAsync();

function handleDeleteAsync(){
    // b1: lấy danh sách các nút xóa
    const btnDeletes = document.querySelectorAll('.btn-delete');
    // console.log(btnDeletes);
    // b2: định nghĩa sự kiện cho từng nút xóa
    btnDeletes.forEach((item)=>{
        // console.log(item);
        item.addEventListener('click',async ()=>{
            // console.log('click!!!!!');
            // b3: lấy id của nút xóa
            // cách1
            // const id = item.dataset.id;
            // cách2
            const id = item.getAttribute('data-id');
            // console.log(id);
            // b4: xóa phần tử
            if(window.confirm("Bạn có chắc chắn muốn xóa không?")){
                // console.log("Xóa");
                // b5: call api xóa
                try {
                    const res = await fetch(`http://localhost:3000/products/${id}`,{
                        method: "delete"
                    });
                    if(res.ok){
                        alert("Xóa thành công")
                    }

                } catch (error) {
                    console.log(error);
                }
            }
            
        })
        
    })
    
}

// handleDelete() // không hề tồn tại những nút xóa