var current_mode = '';

function goToQuest1Screen() {
  if (current_mode === 'quest1') {
    return
  }
  // add video
  current_mode = 'quest1';
  console.log(current_mode);
}


var quest1_button = document.getElementById('quest1');
quest1_button.addEventListener('click', goToQuest1Screen);