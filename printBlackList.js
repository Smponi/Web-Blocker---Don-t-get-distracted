
window.onload = function up() {
function addTable() {
  
    var myTableDiv = document.getElementById("myDynamicTable");
  
    var table = document.createElement('TABLE');
    table.border = '0.5';
  
    var tableBody = document.createElement('TBODY');
    table.appendChild(tableBody);
  
    for (var i = 0; i < blacklist.length; i++) {
      var tr = document.createElement('TR');
      tableBody.appendChild(tr);
  
      for (var j = 0; j < 2; j++) {
        var td = document.createElement('TD');
        td.width = '50%';
        if(j==0){
        td.appendChild(document.createTextNode(blacklist[i]));
        tr.appendChild(td);
      }
      //Delete function für jeden Mist einfügen
      else{
        td.appendChild(document.createTextNode("delete!"));
        td.appendChild(createRadioElement(i));
        tr.appendChild(td);
      }
    }
    }
    myTableDiv.appendChild(table);
  }
  addTable();
  }
  
  function createRadioElement(name) {
    var radioHtml = '<input type="checkbox" id="'+name+'" name="Eintrag' + name + '"';
    radioHtml += '/>';

    var radioFragment = document.createElement('div');
    radioFragment.innerHTML = radioHtml;

    return radioFragment.firstChild;
}


