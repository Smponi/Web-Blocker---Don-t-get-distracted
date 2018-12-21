// function currenttab() {
//   chrome.tabs.query({ active: true, currentWindow: true }, function (tab) {
//     var active_tab = tab[0].url;
//     return active_tab;
//   })};


//var blacklist = ["https://reddit.com/r/funny","https://www.reddit.com/r/funny/"];
window.onload = function up() {
     // by passing an object you can define default values e.g.: []
     function Black() {
        var storage = JSON.parse(localStorage.getItem('ToDoList'));
        if (!storage) {
            storage = [];
            localStorage.setItem('blacklist', JSON.stringify(storage));
        }
        console.log(storage);
        console.log("hi");
        var storage = chrome.storage.local;
        var blacklist = [];

        storage.set({
             [blacklist]: 'blacklist' // Will evaluate v1 as property name
            });

            storage.get(blacklist, function(result) {
                console.log(blacklist, result);
            });
        var Text = document.getElementById("textbox1").value;
        chrome.storage.local.set({v1: Text});   
        console.log(blacklist);         
    }
    
    console.log("hissssssss");
    chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
        chrome.tabs.query({ active: true, currentWindow: true }, function (tab) {
            var active_tab = tab[0].url;
            for (i = 0; i < blacklist.length; i++) {
                if (active_tab.includes(blacklist[i])) {
                    chrome.tabs.update(tab.id, { url: "http://www.zumliebenaugustin.de/" });
                    console.log("Nope," + blacklist[i] +"ist verboten!");
                }
            }
    });

    chrome.tabs.onCreated.addListener(function(tab) {         
    var active_tab = tab[0].url;
            for (i = 0; i < blacklist.length; i++) {
                if (active_tab.includes(blacklist[i])) {
                    chrome.tabs.update(tab.id, { url: "http://www.zumliebenaugustin.de/" });
                    console.log(active_tab);
                }   
            }
    })});
    document.getElementById("add2").addEventListener("click", Black);
    // function Edit_blacklist() {
    //     var Text = document.getElementById("textbox1").value;
    //     chrome.storage.local.set({Text: blacklist});
    //     for (i = 0; i < blacklist.length; i++) {
    //         console.log(blacklist[i]);
    //     }
    //     console.log("-------------------------------------------------------------------------------------------");
    //     document.getElementById('textbox1').value = "";
        
    // }
   
}