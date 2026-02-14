// ====== MẬT KHẨU ======
let input = "";
const password = "2312"; // ngày kỷ niệm

// ====== BÀN PHÍM ======
function press(num) {
  if (input.length >= 4) return;

  input += num;
  updateDots();

  if (input.length === 4) {
    if (input === password) {
      openLove();
    } else {
      alert("Sai rồi 💔");
      clearInput();
    }
  }
}

function updateDots() {
  document.getElementById("dots").innerText =
    "● ".repeat(input.length) + "○ ".repeat(4 - input.length);
}

function clearInput() {
  input = "";
  updateDots();
}

// ====== MỞ MÀN 2 ======
function openLove() {
  document.getElementById("lockScreen").classList.add("hidden");
  document.getElementById("loveScreen").classList.remove("hidden");

  // ❤️ GIỮ NGUYÊN TOÀN BỘ LỜI BẠN VIẾT
 typeText(
    "Gửi em, cô gái bé nhỏ của anh!\n\n" +
    "Anh vẫn thường tự hỏi, vì sao em có thể khiến trái tim anh loạn nhịp đến vậy...\n\n" +
    "Anh nghĩ hiện tại anh đã có câu trả lời rồi. Đó là vì em, vì nụ cười của em, vì ánh mắt của em, vì tất cả những điều tuyệt vời mà em mang lại cho cuộc sống của anh.\n\n" +
    "Anh biết, anh không phải là người hoàn hảo, nhưng anh hứa sẽ luôn cố gắng để trở thành người xứng đáng với tình yêu của em.\n\n" +
    "Cảm ơn em đã đến bên anh, đã yêu anh và đã làm cho cuộc sống của anh trở nên ý nghĩa hơn bao giờ hết.\n\n" +
    "Anh yêu em rất nhiều! ❤️",
    document.getElementById("message")
  );

  initScratch(); // ⭐ BẮT BUỘC
}

// ====== HIỆU ỨNG GÕ CHỮ ======
function typeText(text, element) {
  let i = 0;
  element.innerHTML = "";

  function typing() {
    if (i < text.length) {
      element.innerHTML += text[i] === "\n" ? "<br>" : text[i];
      i++;
      setTimeout(typing, 40);
    }
  }

  typing();
}

// ====== THẺ CÀO ======
function initScratch() {
  const canvas = document.getElementById("scratch");
  const ctx = canvas.getContext("2d");

  ctx.fillStyle = "#bdbdbd";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.globalCompositeOperation = "destination-out";

  let drawing = false;

  // PC
  canvas.addEventListener("mousedown", () => (drawing = true));
  canvas.addEventListener("mouseup", () => (drawing = false));
  canvas.addEventListener("mouseleave", () => (drawing = false));
  canvas.addEventListener("mousemove", scratch);

  // MOBILE
  canvas.addEventListener("touchstart", () => (drawing = true));
  canvas.addEventListener("touchend", () => (drawing = false));
  canvas.addEventListener("touchmove", (e) => {
    e.preventDefault();
    scratch(e.touches[0]);
  });

  function scratch(e) {
    if (!drawing) return;

    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    ctx.beginPath();
    ctx.arc(x, y, 22, 0, Math.PI * 2);
    ctx.fill();
  }
}

