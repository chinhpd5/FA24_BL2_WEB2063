// Bất đồng bộ trong JS

// console.log(1);
// console.log(2);
// console.log(3);

// 1 2 3

// console.log(1); // đồng bộ
// setTimeout(()=>{ // bất đồng bộ
//   console.log(2);
// },0)
// console.log(3); // đồng bộ

// 1 (sau 0s -> 2) 3 : mong đợi
// 1 3 2 : thực tế

// 1. Đồng bộ (Chạy tuần tự)
// 2. Bất đồng bộ (Chạy song song)- setTimeout, setInterval, call api,...

// Event Loop

// Các tác vụ được nằm trong Call Stack
// Call stack chỉ xử lý được tác ĐỒNG BỘ
// Với những tác vụ BẤT ĐỒNG BỘ được chuyển sang WEBAPI xử lý
// Những tác vụ BẤT ĐỒNG BỘ sau khi WebAPI xử lý xong được chuyển qua Callback Queue(Hàng chờ)
// Khi tất cả các tác vụ ĐỒNG BỘ trong call stack thực thi xong thì Callback Queue mới được thực thi

// Tại sao cần xử lý Bất đồng bộ

// Cv1: Call API lấy dữ liệu => Bất đồng bộ
// Cv2: Hiển thị danh sách => Đồng bộ

// KHÔNG xử lý: Cv2 -> Cv1 => Lỗi
// Xử lý: Cv1 -> Cv2 => Thành công

// Những cách xử lý Bất đồng bộ JS

// callback (là hàm gọi lại trong hàm khác, dưới dạng tham số truyền vào)

function sayHello() {
  console.log('Xin chào');
}

function greeting(callback) {
  callback()
}

// greeting(sayHello)
// greeting(()=>{
//   console.log(`Xin chào`);
// });

// fake tác vụ bất đồng bộ
function delay(ms, callback) {
  setTimeout(() => {
    callback("Thực thi")
  }, ms)
}

function doingCallback() {
  console.log("Bắt đầu 1");
  delay(1000, (data) => {
    console.log(data);
    console.log("Kết thúc 1");

    console.log("Bắt đầu 2");
    delay(2000, (data) => {
      console.log(data);
      console.log("Kết thúc 2");

      console.log("Bắt đầu 3");
      delay(2500, (data) => {
        console.log(data);
        console.log("Kết thúc 3");
  
        
      })      
    })
  })

}

doingCallback()

// promise
// async/await
