const getListProduct = ()=>{
    // call api để lấy danh sách sản phẩm
    fetch(`http://localhost:3000/products`)// ,{method:'get'} mặc định (method= 'get')
        .then((res)=>{
            // console.log(res);
            return res.json();
        })
        .then(data=>{
            // console.log(data);
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
            console.log(trElements);
            // Đổ dữ liệu ra table
            const tbodyElement = document.querySelector('tbody');
            tbodyElement.innerHTML = trElements;

             // xử lý logic xóa
            deleteProduct();
            
        })
        .catch(err=> console.log(err))
        // .finally()
}

getListProduct();

const deleteProduct = ()=>{
    // b1: lấy ra toàn bộ nút xóa (querySelectorAll)
    const btnDeletes = document.querySelectorAll('.btn-delete');
    // console.log(btnDeletes);
    // b2: duyệt qua mảng và định sự kiện click cho từng nút xóa
    btnDeletes.forEach((item)=>{
        // console.log(item);
        //addEventListener: định nghĩa thêm sự kiện
        item.addEventListener("click",async()=>{
            // console.log('click!!!!!');
            // b3: lấy id
            // cách 1:
            // let id = item.dataset.id;
            // cách 2:
            let id = item.getAttribute('data-id')
            // console.log(id);
            // xóa
            if(window.confirm("Bạn có chắc chắc muốn xóa không?")){
                fetch(`http://localhost:3000/products/${id}`,{
                    method: 'delete'
                })
                    .then(res=>{
                        if(res.ok){
                            alert("xóa thành công")
                        }
                    })
                    .catch(err=> console.log(err))
            }
            
        })
        
    })
}

// async

const getListProductAsync = async ()=>{
    try {
        const res = await fetch(`http://localhost:3000/products`);
        // console.log(res);
        const data = await res.json();
        // console.log(data);

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
        // Đổ dữ liệu ra table
        const tbodyElement = document.querySelector('tbody');
        tbodyElement.innerHTML = trElements;

        // xử lý logic xóa
        deleteProductAsync();

    } catch (error) {
        console.log(error);
    }
}
// getListProductAsync();

const deleteProductAsync = ()=>{
    // b1: lấy ra toàn bộ nút xóa (querySelectorAll)
    const btnDeletes = document.querySelectorAll('.btn-delete');
    // console.log(btnDeletes);
    // b2: duyệt qua mảng và định sự kiện click cho từng nút xóa
    btnDeletes.forEach((item)=>{
        // console.log(item);
        //addEventListener: định nghĩa thêm sự kiện
        item.addEventListener("click",async()=>{
            // console.log('click!!!!!');
            // b3: lấy id
            // cách 1:
            // let id = item.dataset.id;
            // cách 2:
            let id = item.getAttribute('data-id')
            // console.log(id);
            // xóa
            try {
                if(window.confirm("Bạn có chắc muốn xóa không?")){
                    const res = await fetch(`http://localhost:3000/products/${id}`,{
                        method: 'delete' // method: xóa
                    })

                    if(res.ok){
                        alert("Xóa thành công")
                    }
                }
            } catch (error) {
                console.log(error);
            }
            
        })
        
    })
    
}



