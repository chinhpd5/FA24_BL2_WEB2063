let id;
const inputName = document.querySelector('#name');
const inputQuantity = document.querySelector('#quantity');
const inputImage = document.querySelector('#image');

function getProductById(){
    // Bước lấy id trên URL
    const param = new URLSearchParams(window.location.search);
    if(param.has('id')){
        id = param.get('id');
        // console.log(id);
        
        // bước 2: lấy thông tin sản phẩm theo id
        fetch(`http://localhost:3000/products/${id}`)
            .then(res=>res.json())
            .then(data=>{
                // console.log(data);
                // Bước 3: đổ dữ liệu vào ô input
                inputName.value = data.name
                inputQuantity.value = data.quantity
                inputImage.value = data.image
            })
    }
}

getProductById();

function handleUpdate(){
    // Bước 1: Khai báo sự kiện submit của form
    const form = document.querySelector('#formEdit');
    form.addEventListener('submit',(event)=>{
        // loại bỏ hành vi mặc định của form (tải trang);
        event.preventDefault();
        // console.log("submit!!!");

        // bước 2: lấy các ô input đã có ở trên

        // Bước 3: validate
        if(!inputName.value){
            alert("Cần nhập dữ liệu tên sản phẩm");
            inputName.focus();
            return;
        }

        if(!inputQuantity.value){
            alert("Cần nhập dữ liệu số lượng sản phẩm");
            inputQuantity.focus();
            return;
        }

        if(!inputImage.value){
            alert("Cần nhập dữ liệu hình ảnh");
            inputImage.focus();
            return;
        }

        // Bước 4: Lấy data
        const data={
            name: inputName.value,
            quantity: Number(inputQuantity.value),
            image: inputImage.value
        }
        // console.log(data);

        // Bước 5: Cập nhật vào db
        fetch(`http://localhost:3000/products/${id}`,{
            method: 'put',// phương thức Cập nhật
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res=>{
                if(res.ok){
                    window.location ='index.html';
                    alert("Cập nhật thành công")
                }else{
                    alert("Cập nhật thất bại")
                }
            })
            .catch(err=>{
                alert("Lỗi: "+err)
            })
        
    })
}

handleUpdate();