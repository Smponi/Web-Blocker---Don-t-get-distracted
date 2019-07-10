
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
        var td = document.createElement('TD');
        td.appendChild(document.createTextNode(blacklist[i]));
        td.appendChild(createRadioElement(i));
        tr.appendChild(td);
    }
    myTableDiv.appendChild(table);
  }
  addTable();

 
  
  function createRadioElement(name) {
    var radioHtml = '<input type="checkbox" id="'+name+'" name="Eintrag' + name + '"' + '/><label for="'+name+'"></label>';
    var radioFragment = document.createElement('div');
    radioFragment.innerHTML = radioHtml;

    return radioFragment.firstChild;
}
}


