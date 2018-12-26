var temp;
var blacklist= [];
// Damit blacklist nicht leer
chrome.storage.local.get(function (items) {

    blacklist=items.data;
  });
window.onload = function up() {
  function myFunction() {
    temp = document.getElementById("textbox1").value;

    addLink(temp);

  }
  function myDelete() {
    chrome.storage.local.get(function (items) {
      items.data = [];
      blacklist = items;
    chrome.storage.local.set(items, function () {
      console.log(items);
    });
  });
  }
  document.getElementById("add2").addEventListener("click", myFunction);
  document.getElementById("clear").addEventListener("click", myDelete);
  }


function addLink(link) {
  chrome.storage.local.get(function (items) {
    if (Object.keys(items).length > 0 && items.data) {
      // The data array already exists, add to it the new server and nickname
      items.data.push( link);
    } else {
      // The data array doesn't exist yet, create it
      items.data = [ link ];
    }

    // Now save the updated items using set
    chrome.storage.local.set(items, function () {
      console.log('Data successfully saved to the storage!');
      console.log(items);
      blacklist=items.data;
    });
  });
}