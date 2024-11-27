let id;
const inputName = document.querySelector('#name');
const inputQuantity = document.querySelector('#quantity');
const inputImage = document.querySelector('#image');

function getProductById(){
    // Bước 1: lấy id trên URL
    const param = new URLSearchParams(window.location.search);
    if(param.has('id')){
        id= param.get('id');
        // console.log(id);
        
        // Bước 2: lấy thông tin sản phẩm theo id
        fetch(`http://localhost:3000/products/${id}`)
            .then(res=>res.json())
            .then(data=>{
                console.log(data);
                // Bước 3: đổ dữ liệu từ data vào form
                inputName.value = data.name;
                inputQuantity.value = data.quantity;
                inputImage.value = data.image;

            })
            .catch(err=> alert(`Lỗi: ${err}`))
    }
}

getProductById();

function handleUpdateProduct(){
    // Bước 1: khai báo sự kiện submit của form
    const form = document.querySelector('#formEdit');
    form.addEventListener('submit',(event)=>{
        // Ngăn chặn hành vi mặc định (tải trang) của form
        event.preventDefault();
        // console.log('submit!!!');

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
        // console.log(data);
        // Bước 5: Cập nhật dữ liệu vào db

        fetch(`http://localhost:3000/products/${id}`,{
            method:'put',// phương thức cập nhật
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res=>{
                if(res.ok){
                    // chuyển về trang danh sách
                    window.location = 'index.html'
                    alert("Cập nhật thành công")
                }else{
                    alert("Cập nhật thất bại")
                }
            })
            .catch(err=>{
                alert(`Lỗi ${err}`)
            })
    })
}

handleUpdateProduct();