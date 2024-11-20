
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
                        <td>@mdo</td>
                    </tr>
                `
            }).join(''); //join: chuyển mảng -> chuỗi 
            // console.log(trElements);
            // b2.2: lấy tbody và đổ trElements vào tbody
            const tbodyElement = document.querySelector('tbody');
            tbodyElement.innerHTML = trElements
        })
        .catch(err=>{
            console.log(err);
        })
}

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
                    <td>@mdo</td>
                </tr>
            `
        }).join(''); //join: chuyển mảng -> chuỗi 
        // console.log(trElements);
        // b2.2: lấy tbody và đổ trElements vào tbody
        const tbodyElement = document.querySelector('tbody');
        tbodyElement.innerHTML = trElements
    } catch (error) {
        console.log(error);
    }
}

// init();
init2();