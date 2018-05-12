function onSuccess(stream) {
  var video = document.getElementById("v");
  var canvas = document.getElementById("c");
  var button = document.getElementById("b");
  video.src = stream;
  button.disabled = false;
  button.onclick = function() {
    canvas.getContext("2d").drawImage(video, 0, 0, 300, 300, 0, 0, 300, 300);
    var img = canvas.toDataURL("image/png");
    alert("done");
  };
}

function onError(err) {
  alert("there was an error " + err)
}


var is_webkit = false;
if (navigator.getUserMedia) {
    //opera
    navigator.getUserMedia({video: true, audio: false}, onSuccess, onError);
}
else if (navigator.webkitGetUserMedia) {
    //webkit users
    is_webkit = true;
    navigator.webkitGetUserMedia('video', onSuccess, onError);
}
else {
    //fallback code goes here
}