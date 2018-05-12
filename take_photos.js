'use strict';

function takeSnapshot() {
  var img = document.querySelector('img') || document.createElement('img');
  var video = document.querySelector('video');
  var canvas;
  var context;
  var width = video.offsetWidth
  , height = video.offsetHeight;

  canvas = canvas || document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;

  context = canvas.getContext('2d');
  context.drawImage(video, 0, 0, width, height);

  img.src = canvas.toDataURL('image/png');
  document.body.appendChild(img);
}

function accessCamera() {
  if (navigator.mediaDevices) {
    var video = document.querySelector('video');
    navigator.mediaDevices.getUserMedia({video: true})
      .then(function(stream) {
        video.src = window.URL.createObjectURL(stream);
        video.addEventListener('click', takeSnapshot);
      })
      .catch(function(error) {
        document.body.textContent = 'Could not access the camera. Error: ' + error.name;
      });
  }
}