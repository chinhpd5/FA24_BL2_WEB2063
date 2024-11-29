
function handleAdd(){
    // Bước 1: Khai báo sự kiện submit của form
    const form = document.querySelector('#formAdd');
    form.addEventListener('submit',async (event)=>{
        // ngăn chặn hành vi mặc định của form (reload)
        event.preventDefault();
        // console.log('submit!!!');

        // Bước 2: Lấy các thẻ input
        const inputName = document.querySelector('#name')
        const inputQuantity = document.querySelector('#quantity')
        const inputImage = document.querySelector('#image')

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

        //Bước 5: Thêm mới vào db
        try {
            const res = await fetch(`http://localhost:3000/products`,{
                method: 'post',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })

            if(res.ok){
                window.location = 'index.html'
                alert("Thêm thành công")
            }else{
                alert("Thêm thất bại")
            }

        } catch (error) {
            alert("lỗi: "+ error)
        }
        
    })
}

handleAdd();