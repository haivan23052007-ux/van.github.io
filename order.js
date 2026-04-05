const user = JSON.parse(localStorage.getItem("user"));
const orders = JSON.parse(localStorage.getItem("orders")) || [];

const myOrders = orders.filter(o => o.user === user.email);

const container = document.getElementById("order-list");

myOrders.forEach(o=>{
  container.innerHTML += `
    <div style="border:1px solid #ccc; padding:10px; margin:10px;">
      <h3>${o.event}</h3>
      <p>ID: ${o.id}</p>
      <p>Thời gian: ${o.time}</p>
      <button onclick="showQR('${o.id}')">Xem vé</button>
    </div>
  `;
});

function showQR(id){
  const qr = window.open("");
  qr.document.write(`
    <h2>Vé điện tử</h2>
    <img src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${id}">
  `);
}
const order = {
  id: "REG" + Math.floor(Math.random()*10000),
  user: user.email,
  event: event.title,
  quantity: quantityInput.value,
  total: document.getElementById("total").innerText,
  time: new Date().toLocaleString()
};