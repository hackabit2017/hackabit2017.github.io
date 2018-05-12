var mic = new Wit.Microphone(document.getElementById("microphone"));
var info = function (msg) {
  document.getElementById("info").innerHTML = msg;
};
var error = function (msg) {
  document.getElementById("error").innerHTML = msg;
};
mic.onready = function () {
  info("Ready");
};
mic.onaudiostart = function () {
  info("Recording started");
  startButton();
  error("");
};
mic.onaudioend = function () {
  info("Recording stopped, processing started");
  recognition.stop();
};
mic.onresult = function (intent, entities) {
  var r = kv("intent", intent);

  // for (var k in entities) {
  //   var e = entities[k];

  //   if (!(e instanceof Array)) {
  //     r += kv(k, e.value);
  //   } else {
  //     for (var i = 0; i < e.length; i++) {
  //       r += kv(k, e[i].value);
  //     }
  //   }
  // }
  var witCommand = '';

  for (var k in entities) {
    var e = entities[k];

    if (!(e instanceof Array)) {
      witCommand += e.value;
    } else {
      for (var i = 0; i < e.length; i++) {
        witCommand += e[i].value;
      }
    }
  }

  document.getElementById("result").innerHTML = witCommand;

  var command = getFinalResult(witCommand);
  onCommandReceived(command);
};

mic.onerror = function (err) {
  error("Error: " + err);
};
mic.onconnecting = function () {
  info("Microphone is connecting");
};
mic.ondisconnected = function () {
  info("Microphone is not connected");
};

mic.connect("NA6C7WJXTBUJH55NS4LIQPLN422UOSYI");
// mic.start();
// mic.stop();

function kv (k, v) {
  if (toString.call(v) !== "[object String]") {
    v = JSON.stringify(v);
  }
  return k + "=" + v + "\n";
}


function processFinalTranscript(final_transcript) {
  if(final_transcript.includes('aventura')) {
    if(final_transcript.includes('unu') || final_transcript.includes('prima')) {
      return 'aventura1';
    }
    else if(final_transcript.includes('doi') || final_transcript.includes('a doua')) {
      return 'aventura2';
    }
    else if(final_transcript.includes('trei') || final_transcript.includes('a treia')) {
      return 'aventura3';
    }
  }
  return 'exit';
}

function getFinalResult(witCommand) {
  return witCommand || processFinalTranscript(final_transcript);
}