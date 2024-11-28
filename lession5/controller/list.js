
// cách 1: sử dụng promise
function init(){ // xử lý bất đồng bộ bằng promise
    // Call api đến db.json lấy dữ liệu danh sách sản phẩm
    fetch(`http://localhost:3000/products`) // bất đồng bộ
        .then((res) => {
            // console.log(res);
            return res.json();
        })
        .then(data => {
            // console.log(data);
            // đổ dữ liệu ra table // đồng bộ
            const trElements = data?.map((item,index)=>{
                return `
                    <tr>
                        <th scope="row">${index+1}</th>
                        <td>${item.name}</td>
                        <td>${item.quantity}</td>
                        <td><img style="height:70px" src="${item.image}" alt=""></td>
                        <td></td>
                    </tr>
                `
            }).join('');// join: chuyển mảng -> chuỗi

            console.log(trElements);
            
            // lấy tbody
            const tbodyElement = document.querySelector('tbody');
            
            // gán trElements vào tbody thông qua innerHTML
            tbodyElement.innerHTML = trElements
            
        })

}
// init();

// cách 2: sử dụng async await
async function initAsync (){
    try {
        const res =await fetch(`http://localhost:3000/products`);
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
                        <a href="edit.html?id=${item.id}" class="btn btn-warning">Sửa</a>
                    </td>
                </tr>
            `
        }).join('');// join: chuyển mảng -> chuỗi

        // console.log(trElements);
        
        // lấy tbody
        const tbodyElement = document.querySelector('tbody');
        
        // gán trElements vào tbody thông qua innerHTML
        tbodyElement.innerHTML = trElements
        
        // xử lý logic xóa
        handleDelete();

    } catch (error) {
        console.log(error);
    }
}

initAsync();


 function handleDelete(){
    // Bước 1: lấy danh sách (querySelectorAll) các nút xóa
    const btnDeletes = document.querySelectorAll('.btn-delete');
    // console.log(btnDeletes);
    // Bước 2: Duyệt mảng và khai báo sự kiện click
    btnDeletes.forEach((item)=>{
        // console.log(item);
        item.addEventListener('click',async ()=>{
            // console.log('click!!!!');
            // Bước 3: lấy id của phần tử cần xóa
            if(window.confirm("Bạn có chắc chắn muốn xóa không?")){
                // cách 1:
                // const id = item.dataset.id;
                // cách 2: 
                const id = item.getAttribute('data-id')
                // console.log(id);
                // Bước 4: xóa phần tử trong db
                try {
                    const res = await fetch(`http://localhost:3000/products/${id}`,{
                        method: 'delete'
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
