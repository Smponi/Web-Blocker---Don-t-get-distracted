var boolean = false;
function restoreOptions1() {
    // Use default value = false.
    chrome.storage.local.get(function (items) {
       if(items.value==null){
           items.value=false;
       }
       items.value=!items.value;
        chrome.storage.local.set(items, function () {
            document.getElementById("notification").checked = items.value;
          });
          console.log(items.value);
      });
      
}
document.addEventListener('DOMContentLoaded', function () {
    restoreOptions1();
    document.getElementById("notification").addEventListener('click', restoreOptions1);
 

});
// function change() {
//     chrome.storage.local.get(function (items) {
//         chrome.storage.local.set(items, function () {
//             items.value = !items.value;
//             document.getElementById("notification").checked = items.value;
//         });
//     });
// }
function print1() {
    chrome.storage.local.get(function (items) {
        console.log(items.value);
    });


}