var songId;
var sampleRate;
var channel;
var bytelength;
var data;
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
            //i dont even wanna hear it this part works fine

        }
    };

    https.open("GET", "https://izolabella.dev:21621/p", true);
    https.send();

}
updateNp()
//broken shit under here
function play(){
let context;
let request;
let source;

    try
 {
  context = new AudioContext();
  request = new XMLHttpRequest();
  request.open("POST","https://izolabella.dev:21621/_p",true);
  request.responseType = "arraybuffer";

  request.onload = function() {
    context.decodeAudioData(request.response, function(buffer) {
      source = context.createBufferSource();
      source.buffer = buffer;
      source.connect(context.destination);

      source.start(0); 
    });
  };

  request.send(`{"b": 109000, "s": 0}`);

} catch(e) {
  alert('brokn');
}
}