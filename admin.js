const orders = JSON.parse(localStorage.getItem("orders")) || [];

const container = document.getElementById("admin-list");

orders.forEach(o=>{
  container.innerHTML += `
    <div style="border:1px solid #ccc; margin:10px; padding:10px;">
      <h3>${o.event}</h3>
      <p>User: ${o.user}</p>
      <p>ID: ${o.id}</p>
      <button onclick="checkQR('${o.id}')">Check vé</button>
    </div>
  `;
});

function checkQR(id){
  localStorage.setItem("scanID", id);
  window.location.href = "scan.html";
}