// Bất đồng bộ trong JS, xử lý bất đồng bộ trong JS

// console.log(1);
// console.log(2);
// console.log(3);

// 1 2 3

// console.log(1); // Đồng bộ

// setTimeout(()=>{
//     console.log(2);
// },2000) // ms -> sau 2s -> in ra xin chào -> Bất đồng bộ -> xử lý bởi WEBAPI không được hiển thị KQ

// console.log(3); // Đồng bộ -> tiếp tục xử lý
// khi hết hoàn toàn các tác vụ trong Callstack ->  Bất đồng bộ mới được hiển thị

// Theo luồng: 1 -> chờ 2 in 2 -> 3
// Thực tế: 1 -> 3 -> sau 2s in 2

// JS là ngôn ngữ đơn luồng: Câu lệnh gọi trước sẽ thực thi trước
// Tại 1 số tác vụ: Call api, setTimout, setInterval, xử lý 1 số sự kiện JS thực thi bất đồng bộ

// các tác vụ (Bất đồng bộ, Đồng bộ) sẽ được thực thi bằng call stack
// Khi gặp những tác vụ BẤT ĐỒNG BỘ thì call stack -(chuyển những tác vụ BĐB)> web api
// Tiếp tục thực thi các tác vụ ĐỒNG BỘ khác
// Khi hết hoàn toàn các tác vụ ĐÔNG BỘ -> những tác vụ BĐB mới được hiển thị kết quả (event Loop) 

// ví dụ
// setTimeout(()=>{
//     console.log(1);
// },2000) // chờ 2s

// setTimeout(()=>{
//     console.log(2);
// },1000)// chờ 1s nên 2 in ra trước 1
// BĐB thực thi các tác vụ song song

// Tại sao cần xử lý bất đồng bộ

// tác vụ 1: Bất đồng bộ
// tác vụ 2: Đồng bộ

// tác vụ 1 bắt buộc phải thực thi xong mới xử lý tác vụ 2

// tác vụ 1: call api để lấy dữ liệu từ db
// tác vụ 2: từ dữ liệu của tác vụ 1 để đổ ra table

// 3 cách xử lý bất đồng bộ
// callback
// promise
// async / await

// call back: hàm gọi lại trong hàm khác, thông qua 1 tham số

const sayHello =(name)=>{
    console.log(`Xin chào ${name}`);
}


const greeting = (callback)=>{
    callback("chinhpd5")
}

// greeting(sayHello)

// fake ra 1 tác vụ bất đồng bộ
const delay = (ms,callback)=>{
    setTimeout(()=>{
        const data = "Waiting"
        callback(data)
    },ms)
}

function doingCallback (){
    console.log("Bắt đầu");
    delay(1500,(res)=>{
        console.log(res);
        console.log("Kết thúc");

        //  ===================
        console.log("Bắt đầu 2");
        delay(2000,(res)=>{
            console.log(res);
            console.log("Kết thúc 2");

            //  ===================
            console.log("Bắt đầu 3");
            delay(2000,(res)=>{
                console.log(res);
                console.log("Kết thúc 3");
            })
        })
    })
}

// doingCallback();
// callback hell


// Promise : lời hứa

// const myPromise = new Promise((resolve, reject)=>{
//     const isCheck = true;
//     if(isCheck){
//         resolve("Thành công")
//     }else{
//         reject("Thất bại")
//     }
// })

// myPromise
//     .then((data)=>{
//         console.log(data);
//         return myPromise; // thực thi ở then tiếp theo
//     }) // được thực thi khi resolve gọi
//     .then((data2)=>{
//         console.log(data2);
//     })
//     .catch((err)=>{
//         console.log(err);
//     }) // được thực thi khi reject gọi
//     .finally(()=>{
//         console.log("Kết thúc");
//     })

// fake tác vụ bất đồng bộ 
const delay2 = (ms)=>{
    return new Promise((resolve,reject)=>{
        const isCheck = true;
        setTimeout(()=>{
            if(isCheck){
                resolve("Waiting")
            }else{
                reject("Thất bại")
            }
        },ms)
    })
}

function doingPromise(){
    console.log("Bắt đầu");
    delay2(1500)
        .then((res)=>{
            console.log(res);
            console.log("Kết thúc");
            // ==============
            console.log("Bắt đầu 2");
            return delay2(2000);// nếu trả về 1 promise -> thực thi ở then tiếp theo
        })
        .then((res)=>{
            console.log(res);
            console.log("Kết thúc 2");

            // ==============
            console.log("Bắt đầu 3");
            return delay2(3000); // nếu delay2(3000) lỗi -> thực thi .catch
        })
        .then((res)=>{
            console.log(res);
            console.log("Kết thúc 3");
        })
        .catch(err => console.log(err))
        .finally() // có thể có hoặc không
}

doingPromise();



