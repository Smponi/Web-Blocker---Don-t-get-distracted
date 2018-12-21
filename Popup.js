var index = 0;
var blacklist = ["https://reddit.com/r/funny","https://www.reddit.com/r/funny/", "https://twitter.com","https://www.twitter.com"];


// $(this).click(function (e) {
//     chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
//         console.log(tabs[0].url);
//     });
// })

// document.getElementById("myBtn").addEventListener("click", function(){
//     chrome.tabs.query({currentWindow: true, active: true}, function(tabs){
//         console.log(tabs[0].url);
// })});
window.onload = function () {
    function load_() {
         {
            console.log("Hi");        }
    } 

    document.getElementById("myBtn").addEventListener("click", myFunction);
    function myFunction() {
        chrome.tabs.query({ active: true, currentWindow: true }, function (tab) {
            var active_tab = tab[0].url;

            for (i = 0; i < blacklist.length; i++) {
                if (active_tab.includes(blacklist[i])) {
                    chrome.tabs.update(tab.id, { url: "https://google.com" });
                    console.log(active_tab);
                }   
            }
        });


        // if (chrome.tabs.query({active: true, currentWindow: true}, function(tab){
        //     tab[0].url
        // }) == blacklist[0]) {
        //     chrome.tabs.update(0, {url: "http://google.com"});
        // }            

    }
    // var checkbox = document.querySelectorAll('input[type=checkbox]');
    // document.getElementById("test").addEventListener("change",valid);
    // function valid() {
    //     if (document.getElementById('test').checked) {
    //         cookie = chrome.cookies.set({url:"chrome://settings/content/cookies.",name: "CheckBoxStatus", value: "true" });
    //         console.log(cookie);
        
    //     }
    // }
};