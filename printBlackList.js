
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


  /**
   * Benutz mal document.createElement und add Funktion
   */
  
  function materialTable() {
    var ul = ' <ul class="mdc-list" role="group" aria-label="List with checkbox items">';
    for(var i=0; i < blacklist.length; i++) {
        ul += ' <li class="mdc-list-item" role="checkbox" aria-checked="false"> ' +
      '<span class="mdc-list-item__graphic">' + 
      '<div class="mdc-checkbox">' +
      '<input type="checkbox" '+
      'class="mdc-checkbox__native-control"' +
      ' id="demo-list-checkbox-item-'+i+'"  /> '+
      ' <div class="mdc-checkbox__background">'+
      ' <svg class="mdc-checkbox__checkmark"'+
      'viewBox="0 0 24 24">'+
      ' <path class="mdc-checkbox__checkmark-path"'+
      'fill="none"'+
      ' d="M1.73,12.91 8.1,19.28 22.79,4.59"/>'+
      ' </svg>'+
      ' <div class="mdc-checkbox__mixedmark"></div>'+
              '</div>'+
            '</div>'+
          '</span>'+
      '    <label class="mdc-list-item__text" for="demo-list-checkbox-item-'+i+'">'+blacklist[i]+'</label>'+
        '</li>';
      }
ul += "</ul>";

var ulElem = $(ul);
document.getElementById("myMaterialTable").innerHTML += ul;
    }
  materialTable();
  
  function createRadioElement(name) {
    var radioHtml = '<input type="checkbox" id="'+name+'" name="Eintrag' + name + '"';
    radioHtml += '/>';

    var radioFragment = document.createElement('div');
    radioFragment.innerHTML = radioHtml;

    return radioFragment.firstChild;
}
}


