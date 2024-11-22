
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
                    <td></td>
                </tr>
            `
        }).join('');// join: chuyển mảng -> chuỗi

        // console.log(trElements);
        
        // lấy tbody
        const tbodyElement = document.querySelector('tbody');
        
        // gán trElements vào tbody thông qua innerHTML
        tbodyElement.innerHTML = trElements
        

    } catch (error) {
        console.log(error);
    }
}

initAsync();
