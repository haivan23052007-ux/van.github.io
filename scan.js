function check(){
  const id = document.getElementById("inputID").value;
  const orders = JSON.parse(localStorage.getItem("orders")) || [];

  const found = orders.find(o => o.id === id);

  if(found){
    document.getElementById("result").innerText =
      "✅ Vé hợp lệ - " + found.event;
  }else{
    document.getElementById("result").innerText =
      "❌ Vé không hợp lệ";
  }
}