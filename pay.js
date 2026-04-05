const user = JSON.parse(localStorage.getItem("user"));

if(!user){
  // Lưu trang hiện tại
  localStorage.setItem("redirectAfterLogin", "pay.html");

  alert("Bạn cần đăng nhập!");
  window.location.href = "login.html";
}

// 👉 NHẬN EVENT
const event = JSON.parse(localStorage.getItem("selectedEvent"));
if(!event){
  alert("Không có dữ liệu!");
  window.location.href = "sukien.html";
}

// HIỂN THỊ
document.getElementById("event-title").innerText = event.title;

// 💰 GIÁ
const priceNumber = parseInt(event.price.replace(/\D/g,''));
document.getElementById("price").innerText = event.price;

const quantityInput = document.getElementById("quantity");

// 👉 TRẠNG THÁI
let step1Done = false;
let paymentDone = false;

// 💵 TÍNH TIỀN
function updateTotal(){
  const total = priceNumber * quantityInput.value;
  document.getElementById("total").innerText =
    total.toLocaleString() + "đ";
}
quantityInput.addEventListener("input", updateTotal);
updateTotal();

// ✅ VALIDATE
function validate(){
  let ok = true;

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;

  if(name.length < 3){
    document.getElementById("name-error").innerText="Tên không hợp lệ";
    ok=false;
  } else document.getElementById("name-error").innerText="";

  if(!email.includes("@")){
    document.getElementById("email-error").innerText="Email sai";
    ok=false;
  } else document.getElementById("email-error").innerText="";

  if(phone.length < 9){
    document.getElementById("phone-error").innerText="SĐT sai";
    ok=false;
  } else document.getElementById("phone-error").innerText="";

  return ok;
}

// 🔄 STEP
function goStep(step){

  if(step === 2 && !step1Done){
    alert("Nhập thông tin trước!");
    return;
  }

  if(step === 3 && !paymentDone){
    alert("Chưa thanh toán!");
    return;
  }

  document.getElementById("step1").classList.remove("active");
  document.getElementById("step2").classList.remove("active");
  document.getElementById("step3").classList.remove("active");

  document.getElementById("paymentBox").classList.add("hidden");
  document.getElementById("successBox").classList.add("hidden");

  if(step === 1){
    document.getElementById("step1").classList.add("active");
  }

  if(step === 2){
    document.getElementById("step2").classList.add("active");
    document.getElementById("paymentBox").classList.remove("hidden");
  }

  if(step === 3){
    document.getElementById("step3").classList.add("active");
    document.getElementById("successBox").classList.remove("hidden");
  }
}

// 💳 THANH TOÁN
function startPayment(){
  if(!validate()) return;

  step1Done = true;
  goStep(2);

  document.getElementById("qr").src =
    "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=" + event.title;

  let time = 5;
  const cd = setInterval(()=>{

    document.getElementById("countdown").innerHTML =
      "Thanh toán: " + document.getElementById("total").innerText +
      "<br>Đang xử lý... " + time + "s";

    time--;

    if(time < 0){
      clearInterval(cd);
      success();
    }

  },1000);
}

// 🎉 SUCCESS
function success(){

  paymentDone = true;
  goStep(3);

  const order = {
    id: "REG" + Math.floor(Math.random()*10000),
    user: user.email,
    event: event.title,
    quantity: quantityInput.value,
    total: document.getElementById("total").innerText,
    time: new Date().toLocaleString()
  };

  let orders = JSON.parse(localStorage.getItem("orders")) || [];
  orders.push(order);
  localStorage.setItem("orders", JSON.stringify(orders));

  document.getElementById("info").innerHTML = `
    ✔ Thanh toán thành công<br><br>
    ID: ${order.id}<br>
    Event: ${order.event}<br>
    Tổng tiền: ${order.total}
  `;
}