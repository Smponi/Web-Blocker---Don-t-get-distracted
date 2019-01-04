
        chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
                chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
                    var active_tab = tabs[0].url;
                    chrome.storage.local.get(function (items) {
                    console.log("value in popup.js" + items.value);
                    if (items.value == true){
                    for (i = 0; i < blacklist.length; i++) {
                        if (active_tab.includes(blacklist[i])) {
                            //TODO: SEITE AUF DIE MAN WEITERGEIELETET WERDEN SOLL NOCH MACHEN
                            chrome.tabs.update(tab.id, { url: "http://www.zumliebenaugustin.de/" });

                        }
                    }
                }
                });

            });
    });



//KP wie das funktionier
//Check if url is on blocked list before requesting url
//chrome.webRequest.onBeforeRequest.addListener(
//    checkBlock,{urls:["<all_urls>"], types: ["main_frame"]},["blocking"]
//);
