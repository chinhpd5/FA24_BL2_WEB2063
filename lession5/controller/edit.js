// B1: Lấy id
const param = new URLSearchParams(window.location.search)
const id = param.get('id')
// console.log(id);

const inputName = document.querySelector("#name")
const inputPrice = document.querySelector("#price")
const inputImage = document.querySelector("#imageURL")
const inputCategory = document.querySelector("#category")

// B2: Lấy thông tin sản phẩm theo id
const getProductById = async () =>{
  const res = await fetch(`http://localhost:3000/products/${id}`);
  // console.log(res);
  const data = await res.json();
  // console.log(data);
  
  // B3: Hiện thị thông tin sản phẩm vào form
  inputName.value = data.name
  inputPrice.value = data.price
  inputImage.value = data.imageURL
  inputCategory.value = data.category
}
getProductById();

// B4: Khai báo sự kiện cập nhật(submit) vào form
const handleSubmit = ()=>{
  // 4.1 Khai báo sự kiện submit
  const form = document.querySelector('#form');
  form.addEventListener('submit',(event)=>{
    event.preventDefault();

    // B4.2: Validate dữ liệu
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

    // B4.3 Tổng hợp dữ liệu cần cập nhật
    const data = {
      name: inputName.value,
      price: inputPrice.value,
      imageURL: inputImage.value,
      category: inputCategory.value
    }

    // console.log(data);

    updateProduct(data)
  })
}

handleSubmit();

// B7: Lưu dữ liệu vào db.json

const updateProduct = async (data) =>{
  try {
    const res = await fetch(`http://localhost:3000/products/${id}`,{
      method: 'put',
      headers:{
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })

    if(res.ok){
      window.location = "list.html"
      alert("Cập nhật thành công");
    }
  } catch (error) {
    console.log(error);
  }
}