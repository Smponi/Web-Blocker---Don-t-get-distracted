document.addEventListener('DOMContentLoaded', function () {
    document.getElementById("notification").addEventListener("click", function(){switchStatus()});
    document.getElementById("add").addEventListener("click", function(){addEntry()});
});
var boolean;
var blacklist = [];
var active_tab;

chrome.storage.local.get(function (items) {
    if (items.value == null) {
        items.value = false;
        boolean = false;
        chrome.storage.local.set(items, function () {
        });
    }
    boolean = items.value;
    setCheckBox();
});
function switchStatus() {
    // Use default value = false.
    chrome.storage.local.get(function (items) {
        items.value = !items.value;
        chrome.storage.local.set(items, function () {
        });
        console.log("items-value" + items.value);
        console.log("boolean" + boolean);
    });
}

function addEntry() {
    chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
        active_tab = tabs[0].url;   
        addLink(active_tab);
    });
}
function setCheckBox() {
    chrome.storage.local.get(function (items) {
        document.getElementById("notification").checked = items.value;
        console.log(items.value);
    });
}

chrome.tabs.onUpdated.addListener(function (tab) {  
    chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
        active_tab = tabs[0].url;
    });
    chrome.storage.local.get(function (items) {
        //console.log("value in popup.js" + items.value);
        blacklist = items.data;
        boolean = items.value;
        if(boolean == true){
        for (i = 0; i < blacklist.length; i++) {

            //TODO: SEITE AUF DIE MAN WEITERGEIELETET WERDEN SOLL NOCH MACHEN
            if (active_tab.includes(blacklist[i])) {
                chrome.tabs.update(tab.id, { url: "http://www.zumliebenaugustin.de/" });
                break;
            }

        }

    }
    });

});





