// by passing an object you can define default values e.g.: []
window.onload = function up() {
    var temp;
    function myFunction() {
       temp = document.getElementById("textbox1").value;
    
        // chrome.storage.local.set({key: list}, function() {
            
        //   });
        //   chrome.storage.local.get(['key'], function(result) {
        //     console.log('Value currently is ' + result.key);
        //   });
        addLink(temp);
        
    }
    document.getElementById("add2").addEventListener("click", myFunction, true);
    
}


function addLink(link) {
chrome.storage.sync.get(function(items) {
    if (Object.keys(items).length > 0 && items.data) {
        // The data array already exists, add to it the new server and nickname
        items.data.push({link});
    } else {
        // The data array doesn't exist yet, create it
        items.data = [{link}];
    }

    // Now save the updated items using set
    chrome.storage.sync.set(items, function() {
        console.log('Data successfully saved to the storage!');
        console.log(items);
    });
});
}