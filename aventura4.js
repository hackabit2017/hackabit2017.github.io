const aventura4 = {
  currentOp: null,
  totalOps: 10,
  scor: 0,
  generate_op: function(type) {
    // const limit = type === 'easy' ? 2 : 10;
    return 'easy';
  },
  onLoad: function() {
    console.log('loading aventura4');
    say('welcome_message');
  },
  onExit: function() {
    console.log('exiting aventura4');
  },
  onCommandReceived: function(command) {
    console.log('aventura4 a primit commanda', command)
  }
}

globals.quests['aventura2'] = aventura4
