var bytelength = 0

var bytearray = null

function updateNp(){
    var https = new XMLHttpRequest();
    https.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
           var obj = JSON.parse(this.responseText)
           document.getElementById('name').innerHTML = obj.Name
           document.getElementById('author').innerHTML = obj.Author.Name
        }
    };
    https.open("GET", "https://izolabella.dev:21621/p", true);
    https.send();
}
updateNp()



function playByteArray( bytes ) {
    var buffer = new Uint8Array( bytes.length );
    buffer.set( new Uint8Array(bytes), 0 );

    context.decodeAudioData(buffer.buffer, play);
}

function play( audioBuffer ) {
    var source = context.createBufferSource();
    source.buffer = audioBuffer;
    source.connect( context.destination );
    source.start(0);
}

setTimeout(playByteArray(bytearray), 5000)