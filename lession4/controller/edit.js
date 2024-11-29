let id ;
const inputName = document.querySelector('#name')
const inputQuantity = document.querySelector('#quantity')
const inputImage = document.querySelector('#image')

async function getProductById(){
    // Bước 1: Lấy id trên URL
    const param = new URLSearchParams(window.location.search);
    if(param.has('id')){
        id = param.get('id');
        // console.log(id);

        // Bước 2: Lấy dữ liệu chi tiết sản phẩm
        try {
            const res = await fetch(`http://localhost:3000/products/${id}`);
            const data = await res.json();
            console.log(data);
            
            // Bước 3: Gán giá trị vào input
            inputName.value = data.name
            inputQuantity.value = data.quantity
            inputImage.value = data.image
        } catch (error) {
            alert(`Lỗi ${error}`)
        }
        
    }
}

getProductById();

function handleUpdate(){
    // Bước 1: Khai báo sự kiện submit của form
    const form = document.querySelector('#formEdit');
    form.addEventListener('submit',async (event)=>{
        // ngăn chặn hành vi mặc định của form (reload)
        event.preventDefault();
        // console.log('submit!!!');

        // Bước 2: Lấy các thẻ input

        // Bước 3: Validate
        if(!inputName.value){
            alert("Cần nhập thông tin tên sản phẩm");
            inputName.focus();
            return;
        }

        if(!inputQuantity.value){
            alert("Cần nhập thông tin số lượng");
            inputQuantity.focus();
            return;
        }
        
        if(!inputImage.value){
            alert("Cần nhập thông tin hình ảnh");
            inputImage.focus();
            return;
        }

        // Bước 4: Lấy data
        const data = {
            name: inputName.value,
            quantity: Number(inputQuantity.value),
            image: inputImage.value
        }
        // console.log(data);

        //Bước 5: Cập nhật vào db
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
            alert("lỗi: "+ error)
        }
        
    })
}

handleUpdate();