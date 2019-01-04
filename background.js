var boolean = false;
function switchStatus() {
    // Use default value = false.
    chrome.storage.local.get(function (items) {
        if (items.value == null) {
            items.value = false;
        }
        items.value = !items.value;
        chrome.storage.local.set(items, function () {
            document.getElementById("notification").checked = items.value;
        });
        console.log(items.value);
    });
}
function setCheckBox() {
    chrome.storage.local.get(function (items) {
        document.getElementById("notification").checked = items.value;
        console.log(items.value);
    });
}

chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
    chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
        var active_tab = tabs[0].url;
        chrome.storage.local.get(function (items) {
            console.log("value in popup.js" + items.value);
            
            for (i = 0; i < blacklist.length; i++) {
                if (active_tab.includes(blacklist[i])) {
                    //TODO: SEITE AUF DIE MAN WEITERGEIELETET WERDEN SOLL NOCH MACHEN
                    chrome.tabs.update(tab.id, { url: "http://www.zumliebenaugustin.de/" });

                }
            }
        

        });

    });
    console.log("-----------------------");
    console.log(blacklist[0]);
    setCheckBox();
    document.getElementById("notification").addEventListener('click', switchStatus);
})


    


