document.addEventListener('DOMContentLoaded', function () {
    document.getElementById("notification").addEventListener("click", function(){switchStatus()});
    document.getElementById("add").addEventListener("click", function(){addEntry()});
});
var blacklist = [];
var active_tab;

chrome.storage.sync.get(function (items) {
    if (items.value == null) {
        items.value = false;
        chrome.storage.sync.set(items, function () {
        });
    }
    else if(items.data == null) {
        items.data= [];
        chrome.storage.sync.set(items, function () {
        });
    }
    setCheckBox();
});
function switchStatus() {
    // Use default value = false.
    chrome.storage.sync.get(function (items) {
        items.value = !items.value;
        chrome.storage.sync.set(items, function () {
        });
        console.log("items-value" + items.value);
    });
}

function addEntry() {
    chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
        active_tab = tabs[0].url;   
        addLink(active_tab);
    });
}
function setCheckBox() {
    chrome.storage.sync.get(function (items) {
        document.getElementById("notification").checked = items.value;
        console.log(items.value);
    });
}

chrome.tabs.onUpdated.addListener(function (tab) {  
    chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
        active_tab = tabs[0].url;
    });
    chrome.storage.sync.get(function (items) {
        //console.log("value in popup.js" + items.value);
        blacklist = items.data;
        if(items.value == true){
        // Damit man nicht immer die gnaze Seite eingeben muss.
        for (i = 0; i < blacklist.length; i++) {

            //TODO: SEITE AUF DIE MAN WEITERGEIELETET WERDEN SOLL NOCH MACHEN
            if (active_tab.includes(blacklist[i])) {
                chrome.tabs.update(tab.id, { url: "redirect.html" });
                break;
            }

        }

    }
    });

});





