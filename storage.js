var temp;
var blacklist = [];

document.addEventListener('DOMContentLoaded', function () {
  document.getElementById("clear").addEventListener("click", function(){deleteAll()});
  document.getElementById("add2").addEventListener("click", function(){myFunction()});
  document.getElementById("deleted").addEventListener("click", function(){deleteEntry(1)});
  document.getElementById("deleteEntries").addEventListener("click", function(){deleteEntries()});
});
// Damit blacklist nicht leer
chrome.storage.local.get(function (items) {

  blacklist = items.data;
});

  
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
     * MUSS NOCH GETESTET WERDEN
     * 
     * Removes entry by splicing the array.
     * stores then blacklist in items.data
     * @param index int
     */
  function deleteEntry(index) {
    console.log("Hiiiiiiiii");
      if(index>-1 && index < blacklist.length){
          blacklist.splice(index,1);
          chrome.storage.local.get(function (items) {
              items.data = blacklist;
              chrome.storage.local.set(items, function () { 
              })
          })
      }
    }

  //table = document.getElementById("BlackTable");
  function deleteEntries() {
    var entries = [];
    for (var i=0; i< blacklist.length; i++){
      if(document.getElementById(i).checked){
        entries.push(i);
      }
    }
    for (var i=0;i<entries.length;i++){
      deleteEntry(entries[i]-i);
    }
    alert("Selected entries deleted succsuccessfully!");
    location.reload();
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
      console.log(blacklist);
    });
  });
  location.reload();


}