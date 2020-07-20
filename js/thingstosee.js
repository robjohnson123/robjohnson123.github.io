const thingsTable = document.querySelector("#thingstoseetable > tbody");
function loadTable (){
  const request = new XMLHttpRequest();
  request.open("GET", "https://api.npoint.io/7862372fed7ff4d76748");
  request.onload = () => {
    try{
      const json = JSON.parse(request.responseText);
      populateTable(json);
    }catch(e){
      console.log(e);
    }

  };
  request.send();
}

function populateTable (json){
  while (thingsTable.firstChild){
    thingsTable.removeChild(thingsTable.firstChild);
  }

  json.forEach((row) => {
    const tr = document.createElement("tr");


    row.forEach((cell) => {
      const td = document.createElement("td");
      td.textContent = cell;
      tr.appendChild(td);
    });


    thingsTable.appendChild(tr);
  });

}

document.addEventListener("DOMContentLoaded", () => {loadTable();});
