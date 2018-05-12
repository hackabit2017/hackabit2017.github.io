'use strict';

var localStream;

function takeSnapshot() {
  var img = document.getElementById('taken_photo');
  if (img.style.display === "none") {
    img.style.display = "block";
  }

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
}

function accessCamera() {
  var video = document.querySelector('video');
  if (video.style.display === "none") {
    video.style.display = "block";
  }

  if (navigator.mediaDevices) {
    navigator.mediaDevices.getUserMedia({video: true})
      .then(function(stream) {
        localStream = stream;
        video.src = window.URL.createObjectURL(stream);
        video.addEventListener('click', takeSnapshot);
      })
      .catch(function(error) {
        document.body.textContent = 'Could not access the camera. Error: ' + error.name;
      });
  }
}

function turnOffCamera() {
  var video = document.querySelector('video');
  localStream.getTracks()[0].stop();
  if (video.style.display !== "none") {
    video.style.display = "none";
  }
  var img = document.getElementById('taken_photo')
  if (img.style.display !== "none") {
    img.style.display = "none";
  }
}