let tbody = document.querySelector("tbody")

function addProduct() {

  let inputs = document.querySelectorAll("input");

  let tr = document.createElement("tr");

  let td1 = document.createElement("td");
  td1.innerText = inputs[0].value;

  let td2 = document.createElement("td");
  td2.innerText = inputs[1].value;

  let td3 = document.createElement("td");
  let img = document.createElement("img");
  img.src = inputs[2].value;
  img.style.width = "100px";
  td3.append(img);

  tr.append(td1, td2, td3);
  tbody.append(tr);
}