
function handleAdd(){
    // Bước 1: Khai báo sự kiện submit của form
    const form = document.querySelector('#formAdd');
    form.addEventListener('submit',(event)=>{
        // loại bỏ hành vi mặc định của form (tải trang);
        event.preventDefault();
        // console.log("submit!!!");

        // bước 2: lấy các ô input
        const inputName = document.querySelector('#name');
        const inputQuantity = document.querySelector('#quantity');
        const inputImage = document.querySelector('#image');

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

        // Bước 5: Thêm vào db
        fetch(`http://localhost:3000/products`,{
            method: 'post',// phương thức thêm mới
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res=>{
                if(res.ok){
                    window.location ='index.html';
                    alert("Thêm thành công")
                }else{
                    alert("Thêm thất bại")
                }
            })
            .catch(err=>{
                alert("Lỗi: "+err)
            })
        
    })

}

handleAdd();