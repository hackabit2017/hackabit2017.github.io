const aventura2 = {
  onLoad: function() {
    console.log('loading aventura2');
  },
  onExit: function() {
    console.log('exiting aventura2');
  },
  onCommandReceived: function(command) {
    console.log('aventura2 a primit commanda', command)
  }
}

globals.quests['aventura2'] = aventura2
