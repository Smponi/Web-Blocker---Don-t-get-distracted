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
        blacklist = items.data;
        if(items.value == true){
        // So you don't have to  save the whole url
        for (i = 0; i < blacklist.length; i++) {

            if (active_tab.includes(blacklist[i])) {
                chrome.tabs.update(tab.id, { url: "HTML/redirect.html" });
                break;
            }
        }


    }
    });

});

//------------------------------------------------------------------------------------------------------------------------------------------------------
/**
 * Methods if I want to use a binary search for going through the list
 * 
 */


function binarySearch(ar, el, compare_fn) {
    var m = 0;
    var n = ar.length - 1;
    console.log(el);
    while (m <= n) {
        var k = (n + m) >> 1;
        var cmp = compare_fn(el, ar[k]);
        if (cmp > 0) {
            m = k + 1;
        } else if(cmp < 0) {
            n = k - 1;
        } else {
            return k;
        }
    }
    return -m - 1;
}

/**
 * Method to compare two strings
 * @param {First String to be checked} a 
 * @param {Second String to be checked} b 
 */
function compare_Strings(a, b) {
    a = a.toString();
    b = b.toString();
    console.log("b:" + b);
    console.log("a:" +a);
    console.log(a.toLowerCase().includes(b.toLowerCase()));
    console.log(a.includes(b));

    if(a.toLowerCase().includes(b.toLowerCase())) return 0;
    if ( a.toLowerCase() < b.toLowerCase()) return -1;
    if (a.toLowerCase() > b.toLowerCase()) return 1;
    return 0;
}

/**
 * Function to cut out the https shit.
 */
function cutBeginningOut(a){
    a = a.toString();
    console.log("isStartingWith:" + a.startsWith("https://www."));
    if(a.startsWith("https://www.")) a = a.substring(12);
    if(a.startsWith("http://www.")) a = a.substring(11);
    if(a.startsWith("https://")) a = a.substring(9);
    if(a.startsWith("http://")) a = a.substring(8);
    if(a.startsWith("www.")) a = a.substring(4);

    console.log("a:subString:" +a);
    return a;
}




