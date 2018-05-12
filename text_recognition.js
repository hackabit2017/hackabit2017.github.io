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
  
}
text_recognition_button.addEventListener(
  'click', performTextRecognition);