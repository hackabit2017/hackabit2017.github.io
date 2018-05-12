var current_mode = '';

var quest1_button = document.getElementById('quest1');
var exit_quest = document.getElementById('exit');

function goToQuest1Screen() {
  if (current_mode === 'quest1') {
    return
  }
  current_mode = 'quest1';
  if (exit_quest.style.display === "none") {
    exit_quest.style.display = "block";
  }

  accessCamera();
}
quest1_button.addEventListener('click', goToQuest1Screen);


function exitCurrentQuest() {
  if (current_mode === '') {
    return
  }
  if (exit_quest.style.display !== "none") {
    exit_quest.style.display = "none";
  }
  if (current_mode === 'quest1') {
    turnOffCamera();
  }
  current_mode = '';
}
exit_quest.addEventListener('click', exitCurrentQuest);