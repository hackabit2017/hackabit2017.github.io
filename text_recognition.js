var text_recognition_button = document.getElementById(
  'text_recognition');

function initTextRecognition() {
  if (text_recognition_button.style.display === "none") {
    text_recognition_button.style.display = "block";
  }

}

function exitTextRecognition() {
  if (text_recognition_button.style.display !== "none") {
    text_recognition_button.style.display = "none";
  }

}

function performTextRecognition() {
  var img = document.getElementById('taken_photo');
  if (img.src === undefined || img.src === "") {
    return
  }
  //perform text recognition of the image
}
text_recognition_button.addEventListener(
  'click', performTextRecognition);