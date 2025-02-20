

const handleSubmit = () =>{
  // B1: khai báo sự kiện submit form
  const form = document.querySelector("#form");
  form.addEventListener("submit",(event)=>{
    event.preventDefault();// ngăn chặn hành vi mặc định của form (tải trang)
    // console.log("submit!!!");

    // B2: Lấy giá trị các ô input
    const inputName = document.querySelector("#name")
    const inputPrice = document.querySelector("#price")
    const inputImage = document.querySelector("#imageURL")
    const inputCategory = document.querySelector("#category")

    // B3: Validate dữ liệu
    if(!inputName.value){
      alert("Không để trống tên sản phẩm");
      inputName.focus(); // focus vào ô input đang lỗi
      return; // ngăn chặn đoạn code phía sau thực thi
    }

    if(!inputPrice.value){
      alert("Không để trống giá bán");
      inputPrice.focus();
      return;
    }

    if(!inputImage.value){
      alert("Không để trống hình ảnh");
      inputImage.focus();
      return;
    }

    // B3.5 Tổng hợp dữ liệu cần thêm
    const data = {
      name: inputName.value,
      price: inputPrice.value,
      imageURL: inputImage.value,
      category: inputCategory.value
    }

    // console.log(data);
    addProduct(data)
  })
}

handleSubmit()

const addProduct = async (data) =>{
  try {
    const res = await fetch(`http://localhost:3000/products`,{
      method: "post",
      headers:{
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
    if(res.ok){
      window.location = 'list.html'
      alert("Thêm thành công")
    }
  } catch (error) {
    console.log(error);
  }
}