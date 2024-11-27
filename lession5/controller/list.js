
const init = ()=>{ // promise
    // b1: call api lấy dữ liệu từ db.json
    fetch(`http://localhost:3000/products`) // promise -> xử lý bất đồng bộ
        .then(res=>{
            // console.log(res);
            return res.json()
        })
        .then(data =>{
            // console.log(data);
            // b2: đổ dữ liệu ra table (Đồng bộ)
            // b2.1: lặp quả mảng data và đổ vào trElements
            const trElements = data?.map((item,index)=>{
                return `
                    <tr>
                        <th scope="row">${index+1}</th>
                        <td>${item.name}</td>
                        <td>${item.quantity}</td>
                        <td><img style="height:70px" src="${item.image}" alt=""></td>
                        <td>
                            <button data-id="${item.id}" class="btn-delete btn btn-danger">Xóa</button>
                            <a href="edit.html?id=${item.id}" class=" btn btn-warning">Sửa</a>
                        </td>
                    </tr>
                `
            }).join(''); //join: chuyển mảng -> chuỗi 
            // console.log(trElements);
            // b2.2: lấy tbody và đổ trElements vào tbody
            const tbodyElement = document.querySelector('tbody');
            tbodyElement.innerHTML = trElements

            // xử lý sự kiện xóa
            handleDeletePromise();
        })
        .catch(err=>{
            console.log(err);
        })
}
init();

function handleDeletePromise(){
    // Bước 1: lấy toàn bộ (querySelectorAll) các nút xóa
    const btnDeletes = document.querySelectorAll('.btn-delete'); // -> trả về array
    // console.log(btnDeletes);
    // bước 2: Định nghĩa sự kiện cho từng nút xóa
    btnDeletes.forEach((item)=>{
        // console.log(item);
        item.addEventListener('click',()=>{
            // bước 3: hỏi lại người dùng (confirm)
            if(window.confirm('Bạn có chắc chắn muốn xóa không?')){
                // console.log("xóa");

                // bước 4: lấy id của phần tử cần xóa
                // cách 1:
                // const id = item.dataset.id;
                // cách 2: 
                const id = item.getAttribute('data-id');
                // console.log(id);

                // bước5: xóa promise
                fetch(`http://localhost:3000/products/${id}`,{
                    method: 'delete'
                })
                    .then(res=>{
                        if(res.ok){
                            alert("Xóa thành công")
                        }else{
                            alert("Xóa thất bại")
                        }
                    })
                    .catch(err=>{
                        alert("Lỗi: "+ err)
                    })
                
            }            
        })
    })
}


// ============== async/ await
const init2 =async ()=>{ // async await
    // b1: call api lấy dữ liệu từ db.json
    try {
        const res = await fetch(`http://localhost:3000/products`);
        // console.log(res);
        const data = await res.json();
        // console.log(data);

        // b2: đổ dữ liệu ra table (Đồng bộ)
        // b2.1: lặp quả mảng data và đổ vào trElements
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
        }).join(''); //join: chuyển mảng -> chuỗi 
        // console.log(trElements);
        // b2.2: lấy tbody và đổ trElements vào tbody
        const tbodyElement = document.querySelector('tbody');
        tbodyElement.innerHTML = trElements;

        // logic xử lý xóa
        handleDeleteAsnyc(); // đồng bộ


    } catch (error) {
        console.log(error);
    }
}


// init2();

function handleDeleteAsnyc(){
    // Bước 1: lấy toàn bộ (querySelectorAll) các nút xóa
    const btnDeletes = document.querySelectorAll('.btn-delete'); // -> trả về array
    // console.log(btnDeletes);
    // bước 2: Định nghĩa sự kiện cho từng nút xóa
    btnDeletes.forEach((item)=>{
        // console.log(item);
        item.addEventListener('click',async()=>{
            // bước 3: hỏi lại người dùng (confirm)
            if(window.confirm('Bạn có chắc chắn muốn xóa không?')){
                // console.log("xóa");

                // bước 4: lấy id của phần tử cần xóa
                // cách 1:
                // const id = item.dataset.id;
                // cách 2: 
                const id = item.getAttribute('data-id');
                // console.log(id);

                // bước5: xóa asnyc/ await
                try {
                    const res = await fetch(`http://localhost:3000/products/${id}`,{
                        method: 'delete' // phướng thức xóa
                    })

                    if(res.ok){
                        alert("Xóa thành công")
                    }else{
                        alert("Xóa thất bại")
                    }
                } catch (error) {
                    alert("lỗi: "+error)
                }
                
            }            
        })
    })
}
