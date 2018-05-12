var current_mode = '';

function goToQuest1Screen() {
  // add video
  current_mode = 'quest1';

}


var quest1_button = document.getElementById('quest1');
quest1_button.addEventListener('click', goToQuest1Screen);