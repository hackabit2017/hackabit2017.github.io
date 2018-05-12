const aventura1 = {
  onLoad: function() {
    console.log('loading aventura1');
  },
  onExit: function() {
    console.log('exiting aventura1');
  },
  onCommandReceived: function(command) {
    console.log('aventura1 a primit commanda', command)
  }
}

globals.quests['aventura1'] = aventura1
