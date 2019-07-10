document.addEventListener('DOMContentLoaded', function () {
    document.getElementById("download").addEventListener("click", function(){download('backup.json');});
  });

/**
 * TO save your list in an xml file - in the future
 * @param filename
 */
function download(filename) {
    var content;
    if(blacklist.length > 0) {
    var pom = document.createElement('a');
    for(i=0;i<=blacklist.length;i++){
        content += blacklist[i]+";";
    }
    pom.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(blacklist));
    pom.setAttribute('download', filename);

    if (document.createEvent) {
        var event = document.createEvent('MouseEvents');
        event.initEvent('click', true, true);
        pom.dispatchEvent(event);
    }
    else {
        pom.click();
    }
}
else{
    alert('You want to export an empty List?');
}
}

