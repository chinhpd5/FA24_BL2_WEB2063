let id;
const inputName = document.querySelector('#name');
const inputQuantity = document.querySelector('#quantity');
const inputImage = document.querySelector('#image');

async function handleGetProductById (){
    // Bước 1: id lấy id trên URL
    const param = new URLSearchParams(window.location.search);
    if(param.has('id')){
        id = param.get('id');
        console.log(id);
    }
    // Bước 2: Lấy thông tin sản phẩm theo id
    try {
        const res = await fetch(`http://localhost:3000/products/${id}`);
        const product = await res.json();
        console.log(product);
        
        // Bước 3: Đổ dữ liệu vào form
        inputName.value = product.name;
        inputQuantity.value = product.quantity
        inputImage.value = product.image

    } catch (error) {
        alert("Lỗi: "+ error)
    }
}

handleGetProductById();

function HandleUpdate(){
    // Bước 1: Khai báo sự kiện submit của form
    const form = document.querySelector('#formEdit');

    form.addEventListener('submit',async (event)=>{
        // ngăn chặn hành vi tải trang
        event.preventDefault();
        // console.log('submit!!!');

        // Bước 2: Lấy các ô input (bỏ)
       
        // Bước 3: Validate
        if(!inputName.value){
            alert("Cần nhập thông tin tên sản phẩm");
            inputName.focus();
            return;
        }

        if(!inputQuantity.value){
            alert("Cần nhập thông tin số lượng sản phẩm");
            inputQuantity.focus();
            return;
        }

        if(!inputImage.value){
            alert("Cần nhập thông tin hình ảnh");
            inputImage.focus();
            return;
        }

        // Bước 4: lấy data 
        const data = {
            name: inputName.value,
            quantity: Number(inputQuantity.value),
            image: inputImage.value
        }
        // console.log(data);

        // Bước 5: cập nhật vào db
        try {
            const res = await fetch(`http://localhost:3000/products/${id}`,{
                method: 'put',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })

            if(res.ok){
                window.location = 'index.html'
                alert("Cập nhật thành công")
            }else{
                alert("Cập nhật thất bại")
            }
            
        } catch (error) {
            alert("Lỗi "+ error)
        } 
    })
}

HandleUpdate();