var temp;
var blacklist = [];


// Damit blacklist nicht leer
chrome.storage.local.get(function (items) {

  blacklist = items.data;
});
window.onload = function up() {
  function myFunction() {
    temp = document.getElementById("textbox1").value;

    addLink(temp);

  }
  function deleteAll() {
    chrome.storage.local.get(function (items) {
      items.data = [];
      blacklist = items;
      chrome.storage.local.set(items, function () {
        console.log(items);
      });
    });
  }

    /**
     * Removes entry by splicing the array.
     * stores then blacklist in items.data
     * @param index int
     */
  function deleteEntry(index) {
      if(index>-1 && index < blacklist.length){
          blacklist.splice(index,1);
          chrome.storage.locale.get(function (items){
              items.data = blacklist;
              chrome.storage.toLocaleString.set(items, function () {
              })
          })
      }
    }
  //DAS MUSS IN DIE BLACKLIST HTML REIN
  //document.getElementById("add2").addEventListener("click", myFunction);
  //document.getElementById("clear").addEventListener("click", myDelete);
  //table = document.getElementById("BlackTable");
}


function addLink(link) {
  chrome.storage.local.get(function (items) {
    if (Object.keys(items).length > 0 && items.data) {
      // The data array already exists, add to it the new server and nickname
      items.data.push(link);
    } else {
      // The data array doesn't exist yet, create it
      items.data = [link];
    }

    // Now save the updated items using set
    chrome.storage.local.set(items, function () {
      console.log('Data successfully saved to the storage!');
      console.log(items);
      blacklist = items.data;
    });
  });
}

function tableContent(){
  for(var i=0; i<blacklist.length;i++ ){
    
  }
}