const aventura2 = {
  currentOp: null,
  totalOps: 10,
  scor: 0,
  generate_op: function(type) {
    // const limit = type === 'easy' ? 2 : 10;
    return 'easy';
  },
  onLoad: function() {
    console.log('loading aventura2');
    //say('welcome_message');
    domElements.content_aventura.innerHTML = '<div id="content_aventura2">\
       <div id="video_div">\
         <video autoplay id="video_content">\
         </video>\
       </div>\
       <div id="img_div">\
         <img id="taken_photo">\
       <div>\
    <div>';
    accessCamera();
  },
  onExit: function() {
    console.log('exiting aventura2');
    turnOffCamera();
    domElements.content_aventura.innerHTML = '';
  },
  onCommandReceived: function(command) {
    console.log('aventura2 a primit commanda', command)
  }
}

globals.quests['aventura2'] = aventura2
