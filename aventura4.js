const aventura4 = {
  currentOp: null,
  totalOps: 10,
  scor: 0,
  shapeIndex: 0,
  currentShape: null,
  generate_op: function(type) {
    // const limit = type === 'easy' ? 2 : 10;
    return 'easy';
  },
  onLoad: function() {
    console.log('loading aventura4');
    // say('welcome_message');
    container = domElements.content_aventura;
    render_3d(container, templates[this.shapeIndex])
    this.currentShape = 'patrat'
  },
  onExit: function() {
    console.log('exiting aventura4');
    this.shapeIndex = 0;
    this.currentShape = null;
    domElements.content_aventura.innerHTML = '';
  },
  onCommandReceived: function(command) {
    console.log('aventura4 a primit commanda', command)
    if(this.currentShape == command){
      say(thingsToSay.GOOD);
      this.score += 1;
      this.tries += 1;
      this.shapeIndex++;
      container = domElements.content_aventura;
      render_3d(container, templates[this.shapeIndex])
    } 
  }
}

globals.quests['aventura4'] = aventura4

function render_3d(container, template) {
    scene = ` <a-scene embedded>
    ${template}
    <a-plane position="0 0 -4" rotation="-90 0 0" width="4" height="4" color="#7BC8A4"></a-plane>
    <a-sky color="#ECECEC"></a-sky>
  </a-scene>`
  container.innerHTML = scene;
}

templates = [
  `<a-box position="-1 0.5 -3" rotation="0 45 0" color="#4CC3D9"></a-box>`,
  `<a-sphere position="0 1.25 -5" radius="1.25" color="#EF2D5E"></a-sphere>`,
  `<a-cylinder position="1 0.75 -3" radius="0.5" height="1.5" color="#FFC65D"></a-cylinder>`
]