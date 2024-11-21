// Xử lý Bất đồng bộ trong JS

// Js là ngôn ngữ đơn luồng (Đồng bộ)
// Tại 1 số trường hợp (callapi(fetch,axios,..), timer(setTimeout,setInterval), 
// lấy dữ liệu từ file, từ DB, xử lý sự kiên (load,click)) -> JS xử lý Bất đồng bộ

// console.log(1);
// console.log(2);
// console.log(3);
// 1 2 3

// setTimeout: tạo đỗ trễ (sau 1 khoảng thời gian, thực thi hàm ở tham số 1)

// console.log(1); // Đồng bộ
// setTimeout(()=>{
//     console.log(2);
// },2000) // JS xử lý Bất đồng bộ (tạo ra những luồng thực thi song song)
// console.log(3); // ĐỒng bộ

// theo lí thuyết đơn luồng: 1 -> sau 2s in 2 -> 3
// thực tế: 1 -> 3 -> sau 2s in 2

// JS: callstack thực thi các tác vụ Đồng bộ
// nếu callstack gặp tác cụ Bất đồng bộ -> chuyển qua WebAPI(xử lý các tác vụ Bất đồng bộ)
// sau khi WebAPI thực thi các tác vụ Bất đồng bộ-> chuyển vào callback quece -> chờ callstack xử HẾT tất cả những tác vụ ĐỒNG BỘ
// hết thị và thực thi các tác vụ của Bất đồng bộ

//
// setTimeout(()=>{
//     console.log(2);
// },2000)

// setTimeout(()=>{
//     console.log(1);
// },1000)

// theo luồng đồng bộ : 3s
// theo luồng bất đồng bộ (tạo luồng thực thi song song): 2s

// Tại sao cần xử bất đồng bộ

// console.log(1); 
// setTimeout(()=>{
//     console.log(2); // 2 xử lý xong trước 3
// },2000) 
// console.log(3); 

// các công việc cần thực hiện tuần tự (kết quả của công việc trước có liên quan công việc sau)
// CV1: call api lấy dữ liệu (Bất đồng bộ)
// CV2: từ data của CV1 đổ dữ liệu ra table (Đồng Bộ)
// nếu không xử lý Bất đồng bộ: CV2 sẽ thực thi trức CV1
// tại 1 số trường hợp -> bắt buộc xử lý Bất đồng bộ

// Các cách để xử lý Bất đồng bộ:
// callback
// promise
// async/await

// callback: hàm gọi lại trong hàm khác, thông qua 1 tham số

const sayHello = (name)=>{
    console.log(`Xin chào ${name}`);
}

const greeting = (callback)=>{
    callback('chinhpd5')
}

// greeting(sayHello);

const greeting2 = (cb)=>{
    cb('chinhpd6')
}

// greeting2((name)=>{
//     console.log(`Chào mừng ${name}`);
// })

// const data =[];
// data.map((item)=>{})
// data.filter((item)=>{})

// tạo 1 hàm fake tác vụ bất đồng bộ
function delay(ms,callback){
    setTimeout(()=>{
        callback('waiting')
    },ms)
}

function doingCallback (){
    console.log("Bắt đầu");
    delay(1500,(data)=>{
        console.log(data);
        console.log("Kết thúc");

        // ========
        console.log("Bắt đầu 2");
        delay(2000,(data)=>{
            console.log(data);
            console.log("Kết thúc 2");

             // ========
            console.log("Bắt đầu 3");
            delay(2000,(data)=>{
                console.log(data);
                console.log("Kết thúc 3");
            })
        })
    })
    
}
// callback hell

doingCallback()