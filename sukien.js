// 🔥 DATA (chỉ sửa ở đây)
const events = [
  {//1
    id: 1,
    title: "Marathon",
    price: "300.000đ",
    date: "20:00 - 23:00, 29/03/2026",
    location: "Hà Nội",
    img: "https://pix.actiup.net/2026/03/23/1774231580879796/4.Banner---1440x600.jpg",
    desc: "Buôn Ma Thuột – thủ phủ cà phê Việt Nam – sẽ chào đón hàng ngàn vận động viên và du khách trong Buôn Ma Thuột Robusta Half Marathon 2026. Đây là giải chạy độc đáo kết hợp tinh thần thể thao với văn hóa cà phê, mang đến trải nghiệm “Chạy giữa Thủ phủ Cà phê”. Sự kiện sẽ diễn ra vào ngày 21/6/2026 tại Quảng trường 10/3, Thành phố Buôn Ma Thuột, Đắk Lắk, do Sở Văn hóa Thể thao và Du lịch tỉnh Đắk Lắk, Simexco Daklak và Công ty TNHH MTV Xuất Nhập Khẩu 2-9 Đắk Lắk phối hợp tổ chức. Các vận động viên sẽ được thưởng thức hương vị cà phê đặc trưng của vùng đất này trong suốt hành trình chạy, tạo nên một trải nghiệm thể thao và văn hóa độc đáo không thể bỏ lỡ."
  },
  {//2
    title: "Bơi",
    price: "150.000đ",
    date: "22/4",
    location: "TP.HCM",
    img: "https://pix.actiup.net/2026/03/11/1773214639694928/Actiup-Banner-IK-PQ.jpg"
  },
  {//3
    title: "Bóng rổ",
    price: "200.000đ",
    date: "25/4",
    location: "Đà Nẵng",
    img: "https://salt.tkbcdn.com/ts/ds/ec/9b/e4/4a28525adb60c8e14f1f10131f0d5dcb.png"
  },
    {//4
    title: "Marathon",
    price: "300.000đ",
    date: "20:00 - 23:00, 29/03/2026",
    location: "Hà Nội",
    img: "https://pix.actiup.net/2026/03/13/1773391800670286/banner-ba%CC%81n-ve%CC%81.jpg"
  },
  {//5
    title: "Bơi",
    price: "150.000đ",
    date: "22/4",
    location: "TP.HCM",
    img: "https://salt.tkbcdn.com/ts/ds/df/b5/42/ff357cffe19a0020eaa8361dbdd8233e.jpeg"
  },
  {//6
    title: "Bóng rổ",
    price: "200.000đ",
    date: "25/4",
    location: "Đà Nẵng",
    img: "https://salt.tkbcdn.com/ts/ds/ec/9b/e4/4a28525adb60c8e14f1f10131f0d5dcb.png"
  },
    {//7
    title: "Marathon",
    price: "300.000đ",
    date: "20:00 - 23:00, 29/03/2026",
    location: "Hà Nội",
    img: "https://salt.tkbcdn.com/ts/ds/37/59/50/1f63cb2144e4f3008e4e6ba2f783ef4b.jpg"
  },
  {//8
    title: "Bơi",
    price: "150k",
    date: "22/4",
    location: "TP.HCM",
    img: "https://salt.tkbcdn.com/ts/ds/b7/2c/4e/ebce584900e99a00e9c0d7037def0351.jpg"
  },
  {//9
    title: "Bóng rổ",
    price: "200k",
    date: "25/4",
    location: "Đà Nẵng",
    img: "https://salt.tkbcdn.com/ts/ds/9e/bd/a0/da48c19d673397411bd9118e576077d4.jpg"
  },
    {//10
    title: "Marathon",
    price: "300.000đ",
    date: "20:00 - 23:00, 29/03/2026",
    location: "Hà Nội",
    img: "https://salt.tkbcdn.com/ts/ds/1b/51/1a/55097711838fd89b432844bd6f7f76a3.jpg"
  },
  {//11
    title: "Bơi",
    price: "150k",
    date: "22/4",
    location: "TP.HCM",
    img: "https://salt.tkbcdn.com/ts/ds/a9/fa/15/4a2dca56bd946b14ec9236f3cf951bb1.jpg"
  },
  {//12
    title: "Bóng rổ",
    price: "200k",
    date: "25/4",
    location: "Đà Nẵng",
    img: "https://salt.tkbcdn.com/ts/ds/7f/66/cc/fb7e3ff3e6c96e8aceed9b4a875222f8.jpg"
  },
    {//13
    title: "Marathon",
    price: "300.000đ",
    date: "20:00 - 23:00, 29/03/2026",
    location: "Hà Nội",
    img: "https://salt.tkbcdn.com/ts/ds/48/3b/69/af1f4d104e01ba72504cb217b2599b19.jpg"
  },
  {//14
    title: "Bơi",
    price: "150k",
    date: "22/4",
    location: "TP.HCM",
    img: "https://salt.tkbcdn.com/ts/ds/64/39/67/fb7831c32151afaa2be7fa73ea77c164.jpg"
  },
  {//15
    title: "Bóng rổ",
    price: "200k",
    date: "25/4",
    location: "Đà Nẵng",
    img: "https://salt.tkbcdn.com/ts/ds/f2/9f/cd/5cf6a86fa8c8a50a68a9f7f1f88d68e6.png"
  },
    {//16
    title: "Marathon",
    price: "300.000đ",
    date: "20:00 - 23:00, 29/03/2026",
    location: "Hà Nội",
    img: "https://ticketgo.vn/uploads/images/event-gallery/event_gallery-e8897feef1dbde18f89fd55552218685.jpg"
  },
  {//17
    title: "Bơi",
    price: "150k",
    date: "22/4",
    location: "TP.HCM",
    img: "https://httt.uit.edu.vn/wp-content/uploads/2024/04/Artboard-1Banner-Bong-Chuyen-Nam-Nu.png"
  },
  {//
    title: "Bóng rổ",
    price: "200k",
    date: "25/4",
    location: "Đà Nẵng",
    img: "https://salt.tkbcdn.com/ts/ds/ec/9b/e4/4a28525adb60c8e14f1f10131f0d5dcb.png"
  }
];

// 🔥 RENDER CARD
function renderEvents(list){
  const slider = document.getElementById("slider");
  slider.innerHTML = "";

  list.forEach((event)=>{
    slider.innerHTML += `
      <div class="card" onclick='goDetail(${JSON.stringify(event)})'>
        <img src="${event.img}">
        <h4>${event.title}</h4>
      </div>
    `;
  });
}

// 🔥 MODAL
function openModal(card) {
  const modal = document.getElementById("modal");
  modal.style.display = "flex";

  document.getElementById("modal-img").src = card.dataset.img;
  document.getElementById("modal-title").innerText = card.dataset.title;
  document.getElementById("modal-time").innerText = card.dataset.date;
  document.getElementById("modal-location").innerText = card.dataset.location;
  document.getElementById("modal-price").innerText = "Giá từ: " + card.dataset.price;

  // Nếu có mô tả thì hiển thị
  if (card.dataset.desc) {
    document.getElementById("modal-desc").innerText = card.dataset.desc;
  }
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}

/* CLICK NGOÀI ĐỂ TẮT */
window.onclick = function(e) {
  const modal = document.getElementById("modal");
  if (e.target === modal) {
    modal.style.display = "none";
  }
};

// 🔥 SEARCH
document.getElementById("search").addEventListener("input", function () {
  const keyword = this.value.toLowerCase();
  const filtered = events.filter(e =>
    e.title.toLowerCase().includes(keyword)
  );
  renderEvents(filtered);
});

function goDetail(event){
  localStorage.setItem("selectedEvent", JSON.stringify(event));
  window.location.href = "detail1.html";
}