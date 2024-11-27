
function handAddProduct(){
    const form = document.querySelector('#formAdd');
    form.addEventListener('submit',(event)=>{
        // Bước 1: 
        // ngăn chặn hành vi mặc định của form khi submit(reload)
        event.preventDefault();
        // console.log("submit!!!");
        // Bước 2: Lấy ra các ô input
        const inputName = document.querySelector('#name');
        const inputQuantity = document.querySelector('#quantity');
        const inputImage = document.querySelector('#image');

        // Bước 3: Validate (có thể làm hoặc không)
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

        // Bước 4: Lấy giá trị
        const data = {
            name: inputName.value,
            quantity: Number(inputQuantity.value),
            image: inputImage.value
        }
        // console.log(data);
        
        // Bước 5: thêm vào db
        fetch(`http://localhost:3000/products`,{
            method: 'post', // phương thức thêm mới
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res=>{
                if(res.ok){
                    window.location = 'index.html';
                    alert("Thêm thành công")
                }else{
                    alert("Thêm thất bại")
                }
            })
            .catch(err=>alert("Lỗi: "+err))
        
    })
}

handAddProduct()