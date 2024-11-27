

function handleAddProduct(){
    // Bước 1: khai báo sự kiện submit của form
    const form = document.querySelector('#formAdd');
    form.addEventListener('submit',(event)=>{
        // Ngăn chặn hành vi mặc định (tải trang) của form
        event.preventDefault();
        // console.log('submit!!!');

        // Bước 2: lấy các input
        const inputName = document.querySelector('#name');
        const inputQuantity = document.querySelector('#quantity');
        const inputImage = document.querySelector('#image');

        // Bước 3: validate(có thể làm hoặc ko)
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

        // bước 4: Lấy data
        const data ={
            name: inputName.value,
            quantity: Number(inputQuantity.value),
            image: inputImage.value
        }
        console.log(data);
        // Bước 5: Thêm dữ liệu vào db

        fetch(`http://localhost:3000/products`,{
            method:'post',// phương thức thêm mới
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res=>{
                if(res.ok){
                    // chuyển về trang danh sách
                    window.location = 'index.html'
                    alert("Thêm mới thành công")
                }else{
                    alert("Thêm mới thất bại")
                }
            })
            .catch(err=>{
                alert(`Lỗi ${err}`)
            })
    })
}

handleAddProduct();