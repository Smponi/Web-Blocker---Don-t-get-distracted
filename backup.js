document.addEventListener('DOMContentLoaded', function () {
    document.getElementById("download").addEventListener("click", function(){download('backup.json');});
  });

function download(filename) {
    if(blacklist.length > 0) {
    var pom = document.createElement('a');
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

