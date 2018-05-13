const aventura3 = {
  currentOp: null,
  totalOps: 10,
  scor: 0,
  generate_op: function(type) {
    // const limit = type === 'easy' ? 2 : 10;
    return 'easy';
  },
  onLoad: function() {
    console.log('loading aventura3');
    say('welcome_message');
  },
  onExit: function() {
    console.log('exiting aventura3');
  },
  onCommandReceived: function(command) {
    console.log('aventura3 a primit commanda', command)
  }
}

globals.quests['aventura3'] = aventura3
