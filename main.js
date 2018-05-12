//TODO:
// implement say function
// call onCommandReceived when intent is clear enough

// commands processed from intent
const commands = {
  EXIT: 'exit',
  // hardcoded, no time for generic... look away...
  AVENTURA1: 'aventura1',
  AVENTURA2: 'aventura2',
  AVENTURA3: 'aventura3',
  AVENTURA4: 'aventura4',
}

// function to play audio files
const thingsToSay = {
  // should match the audio filename
  REPEAT: 'repeat',
  GOOD: 'bravo',
  HELLO: 'buna',
  WELCOME: 'hai_sa_incepem',
  PREVIOUS: 'aventura_precedenta',
  GAME: 'cu_ce_ne_jucam',
  FINISH: 'game_successful'
}

const globals = {
  currentQuest: null,
  quests: []
}

// DOM elements
const domElements = {
  exitButton: document.getElementById('exit'),
  quest_buttons: document.getElementById('quest_buttons')
}

function onCommandReceived(command) {

  // if there is a currentQuest running
  say(thingsToSay.WELCOME);
  if (globals.currentQuest !== null) {
    if (getQuestFromCommand(command)) {
      // the command is a quest, but there is already a quest running
      console.log('quest ', command, ' is already running')
      return
    }
    if (command === commands.EXIT) {
      globals.currentQuest.onExit();
      globals.currentQuest = null;
      domElements.exitButton.style.display = 'none';
      domElements.quest_buttons.style.display = 'block'
    } else {
      globals.currentQuest.onCommandReceived(command)
    }
  }
  else {
    const newQuest = getQuestFromCommand(command)
    if (newQuest) {
      if (isQuestAllowed(newQuest)) {
        globals.currentQuest = newQuest;
        globals.currentQuest.onLoad();
        domElements.exitButton.style.display = 'block';
        domElements.quest_buttons.style.display = 'none'
      }
    } else {
      say(thingsToSay.REPEAT)
    }
  }
}

function say(thingToSay) {
  console.log('Saying: ', thingToSay);
  var audioFile = './speech/' + thingToSay + '.mp3';
  var audio = new Audio(audioFile);
  audio.play();
}

function getQuestFromCommand(command) {
  return globals.quests[command]
}

function isQuestAllowed(quest) {
  return true;
}

// var current_mode = '';
//
// var quest1_button = document.getElementById('quest1');
// var exit_quest = document.getElementById('exit');
//
// function goToQuest1Screen() {
//   if (current_mode === 'quest1') {
//     return
//   }
//   current_mode = 'quest1';
//   if (exit_quest.style.display === "none") {
//     exit_quest.style.display = "block";
//   }
//
//   accessCamera();
//   initTextRecognition();
// }
// quest1_button.addEventListener('click', goToQuest1Screen);
//
//
// function exitCurrentQuest() {
//   if (current_mode === '') {
//     return
//   }
//   if (exit_quest.style.display !== "none") {
//     exit_quest.style.display = "none";
//   }
//   if (current_mode === 'quest1') {
//     turnOffCamera();
//     exitTextRecognition();
//   }
//   current_mode = '';
// }
// exit_quest.addEventListener('click', exitCurrentQuest);
