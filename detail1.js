const event = JSON.parse(localStorage.getItem("selectedEvent"));

if(!event){
  alert("Không có dữ liệu!");
  window.location.href = "sukien.html";
}

// HIỂN THỊ
document.getElementById("title").innerText = event.title;
document.getElementById("date").innerText = event.date;
document.getElementById("location").innerText = "📍 " + event.location;
document.getElementById("price").innerText = event.price;
document.getElementById("desc").innerText = event.desc || "Chưa có nội dung";
document.getElementById("image").src = event.img;
function goPay(){
  localStorage.setItem("selectedEvent", JSON.stringify(event));
  window.location.href = "pay.html";
}