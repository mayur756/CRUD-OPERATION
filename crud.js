let myitem=Array();

function additem(){
    let val=document.getElementById('inp-item').value;

    myitem.push(val);

    let table=document.getElementById('table');
    let tr=document.createElement("tr");
    let td=document.createElement("td");

    td.id=" td "+val;

    td.innerHTML=val;
    tr.append(td);
    table.append(tr);

    tr.id=val;
}

// pop operation
function item_del(){
   let val=document.getElementById('del-item').value;

   let row=document.getElementById(val);

   row.remove();

}

function upd_item(){

    let oldval = document.getElementById('val1').value;
    let newval = document.getElementById('val2').value;

    let row = document.getElementById(oldval);
    row.id = newval;

    let td=document.getElementById("td"+oldval);

    td.innerHTML = newval;
    td.id= "td" + newval;

}