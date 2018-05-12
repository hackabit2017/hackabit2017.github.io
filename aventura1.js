const aventura1 = {
  number_limit: 20,
  totalTries: 5,
  tries: 0,
  score: 0,
  currentNumber: null,
  getNextNumber: function() {
    return randint(this.number_limit)
  },
  onLoad: function() {
    console.log('loading aventura1');
    say('welcome_message__aventura1')
    setTimeout(function() {say('aventura1__next_number')}, 6000);
    this.currentNumber = this.getNextNumber();
    domElements.content_aventura.innerHTML = `<div>${this.currentNumber}</div>`;
  },
  onExit: function() {
    console.log('exiting aventura1');
    this.tries = 0;
    this.score = 0;
    this.currentNumber = 0;
    domElements.content_aventura.innerHTML = '';
  },
  onCommandReceived: function(command) {
    console.log('aventura1 a primit commanda', command)
    const numberInt = parseInt(command);
    // if correct
    if (numberInt === this.currentNumber) {
      say(thingsToSay.GOOD);
      this.score += 1;
      this.tries += 1;
      if (this.tries < this.totalTries) {
        this.currentNumber = this.getNextNumber();
        domElements.content_aventura.innerHTML += `<div>${this.currentNumber}</div>`
      } else {
        domElements.content_aventura.innerHTML += `<p>SCOR: ${this.score}/${this.totalTries}</p><div>Adventure is over. Returning to main menu</div>`;
        say(thingsToSay.FINISH);
        setTimeout(function(){onCommandReceived('exit')}, 3000)
      }
    } else {
      say(thingsToSay.WRONG_ANSWER);
      this.tries += 1;
      this.currentNumber = this.getNextNumber();
      domElements.content_aventura.innerHTML += `<div>${this.currentNumber}</div>`
    }
  }
}

globals.quests['aventura1'] = aventura1;
