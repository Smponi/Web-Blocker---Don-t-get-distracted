var temp;
var blacklist = [];

document.addEventListener('DOMContentLoaded', function () {
  document.getElementById("add2").addEventListener("click", function(){myFunction()});
  document.getElementById("deleteEntries").addEventListener("click", function(){deleteEntries()});
});
// Blacklist not empty
chrome.storage.sync.get(function (items) {

  blacklist = items.data;
});

  
  function myFunction() {
    temp = document.getElementById("textbox1").value;

    addLink(temp);

  }
  function deleteAll() {
    chrome.storage.sync.get(function (items) {
      items.data = [];
      blacklist = items;
      chrome.storage.sync.set(items, function () {
        console.log(items);
      });
    });
  }

    /**
     * 
     * Removes entry by splicing the array.
     * stores then blacklist in items.data
     * @param index int
     */
  function deleteEntry(index) {
      if(index>-1 && index < blacklist.length){
          blacklist.splice(index,1);
          chrome.storage.sync.get(function (items) {
              items.data = blacklist;
              chrome.storage.sync.set(items, function () { 
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
  chrome.storage.sync.get(function (items) {
    if (Object.keys(items).length > 0 && items.data) {
      // The data array already exists, add to it the new server and nickname
      items.data.push(link);
    } else {
      // The data array doesn't exist yet, create it
      items.data = [link];
    }

    // Now save the updated items using set
    chrome.storage.sync.set(items, function () {
      console.log('Data successfully saved to the storage!');
      console.log(items);
      blacklist = items.data;
      console.log(blacklist);
    });
  });
  location.reload();


}