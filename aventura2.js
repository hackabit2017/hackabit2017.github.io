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
    say('welcome_message');
    this.currentOp = show_first_op()
  },
  onExit: function() {
    console.log('exiting aventura2');
  },
  onCommandReceived: function(command) {
    console.log('aventura2 a primit commanda', command)
  }
}

globals.quests['aventura2'] = aventura2
