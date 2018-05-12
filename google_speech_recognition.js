var recognizing = false;
var ignore_onend = false;
var recognition = new webkitSpeechRecognition();

var final_transcript = '';
final_span.innerHTML = '';
interim_span.innerHTML = '';

recognition.lang = 'ro-RO';
recognition.continuous = true;
recognition.interimResults = true;
recognition.onstart = function() {
  recognizing = true;
};
recognition.onerror = function(event) {
  if (event.error == 'no-speech') {

  }
  if (event.error == 'audio-capture') {
    ignore_onend = true;
  }
  if (event.error == 'not-allowed') {
    ignore_onend = true;
  }
};

recognition.onend = function() {
  recognizing = false;
  if (ignore_onend) {
    return;
  }
  if (!final_transcript) {
    return;
  }
};
recognition.onresult = function(event) {
  var interim_transcript = '';
  for (var i = event.resultIndex; i < event.results.length; ++i) {
    if (event.results[i].isFinal) {
      final_transcript += event.results[i][0].transcript;
    } else {
      interim_transcript += event.results[i][0].transcript;
    }
  }
  final_span.innerHTML = final_transcript;
  interim_span.innerHTML = interim_transcript;
};

function startButton() {
  if (recognizing) {
    recognition.stop();
    return;
  }
  final_transcript = '';
  recognition.start();
  ignore_onend = false;
  final_span.innerHTML = '';
  interim_span.innerHTML = '';
}