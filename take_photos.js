'use strict';

function takeSnapshot() {
  var img = document.querySelector('img#taken_photo') || document.createElement('img');
  img.id = 'taken_photo';
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
  var video = document.querySelector('video');
  if (video.style.display === "none") {
    video.style.display = "block";
  }
  if (navigator.mediaDevices) {
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

function turnOffCamera() {
  var video = document.querySelector('video');
  if (video.style.display !== "none") {
    video.style.display = "none";
  }
  var img = document.querySelector('img#taken_photo')
  if (img !== null && img.style.display !== "none") {
    img.style.display = "none";
  }
}