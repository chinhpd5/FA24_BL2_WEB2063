 /**
 * get
 * post
 * put
 * delete
 */
// promise

const getListProduct = ()=>{
    // call api lấy danh sách sản phẩm từ db
   
    fetch(`http://localhost:3000/products`)// mặc định ,{method:'get'}
        .then((response)=>{
            console.log(response);
            return response.json();// trả về data // thực thi tại then tiếp
        })
        .then((data)=>{ // mảng dữ liệu product từ db
            // console.log(data);
            // duyệt mảng data và đổ ra table
            const trElements = data?.map((item,index)=>{
                return `
                    <tr>
                        <th scope="row">${index+1}</th>
                        <td>${item.name}</td>
                        <td>${item.quantity}</td>
                        <td><img style="height: 70px" src="${item.image}" alt=""></td>
                        <td>
                            <button data-id="${item.id}" class="btn-delete btn btn-danger">Xóa</button>

                        </td>
                    </tr>
                `
            }).join('');// join: chuyển mảng -> chuỗi

            // console.log(trElements);
            const tbodyElement = document.querySelector('tbody');
            tbodyElement.innerHTML = trElements

            handleDelete();
            
        })
        .catch(err=> console.log(err))
        // .finally()

}

getListProduct();

const handleDelete = ()=>{
    // lấy danh sách các nút xóa (querySelectorAll)
    const btnDeletes = document.querySelectorAll('.btn-delete')
    // console.log(btnDeletes);
    // định nghĩa sự kiện click cho từng nút xóa
    btnDeletes.forEach((item)=>{
        item.addEventListener('click',async()=>{
            // console.log('click!!!!!');
            // lấy id
            // cách 1
            // const id = item.dataset.id;
            // cách 2 
            const id = item.getAttribute('data-id')
            // console.log(id);

            // xóa
            if(window.confirm("Bạn có chắc chắn muốn xóa hay không ?")){
                fetch(`http://localhost:3000/products/${id}`,{
                    method: 'delete'
                })
                    .then(res =>{
                        if(res.ok){
                            alert("Xóa thành công")
                        }
                    })
                    .catch(err=>{console.log(res.json())})
            }
            
            
        })
    })
}


//===================
// Async await

const getListProductAsync =async ()=>{
    try {
        const res = await fetch('http://localhost:3000/products');
        // console.log(res);
        const data = await res.json();
        // console.log(data);

        const trElements = data?.map((item,index)=>{
            return `
                <tr>
                    <th scope="row">${index+1}</th>
                    <td>${item.name}</td>
                    <td>${item.quantity}</td>
                    <td><img style="height: 70px" src="${item.image}" alt=""></td>
                    <td>
                        <button data-id="${item.id}" class="btn-delete btn btn-danger">Xóa</button>
                    </td>
                </tr>
            `
        }).join('');// join: chuyển mảng -> chuỗi

        // console.log(trElements);
        const tbodyElement = document.querySelector('tbody');
        tbodyElement.innerHTML = trElements
        // xử lý logic xóa
        handleDeleteAsync();
        

    } catch (error) {
        console.log(error);
    }
}

// getListProductAsync ();

const handleDeleteAsync =()=>{
    // lấy danh sách các nút xóa (querySelectorAll)
    const btnDeletes = document.querySelectorAll('.btn-delete')
    // console.log(btnDeletes);
    // định nghĩa sự kiện click cho từng nút xóa
    btnDeletes.forEach((item)=>{
        item.addEventListener('click',async()=>{
            // console.log('click!!!!!');
            // lấy id
            // cách 1
            // const id = item.dataset.id;
            // cách 2 
            const id = item.getAttribute('data-id')
            // console.log(id);

            // xóa
            if(window.confirm("Bạn có chắc chắn muốn xóa hay không ?")){
                try {
                    const res = await fetch(`http://localhost:3000/products/${id}`,{
                        method: 'delete'// xóa
                    })
    
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



