function updateNp(){

    var https = new XMLHttpRequest();

    https.onreadystatechange = function() {

        if (this.readyState == 4 && this.status == 200) {

           var obj = JSON.parse(this.responseText)
           document.getElementById('name').innerHTML = obj.Name
           document.getElementById('author').innerHTML = obj.Author.Name
           songId = obj.Id
           sampleRate = obj.SampleRate
           channel = obj.ChannelCount
           bytelength = obj.FileSize

        }
    };

    https.open("GET", "https://izolabella.dev:21621/p", true);
    https.send();

}
updateNp()