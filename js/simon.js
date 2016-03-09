var Simon = function() {
  this.resetGame();
};

Simon.prototype.resetGame = function() {
  this.sequence = [];
  this.turn = 0;
  $("#turn").empty();
};

Simon.prototype.beginTurn = function() {
  this.turn++;
  this.index = 0;
  this.sequence.push(this.randomNumber());
  this.animate();
  $("#turn").text(this.turn);
};

Simon.prototype.animate = function() {
  var sequence = this.sequence;
  var i=0;
  var interval = setInterval(function() {
    lightUp(sequence[i]);
    i++;
    if (i >= sequence.length) {
      clearInterval(interval);
    }
  }, 600);
};

var lightUp = function(tile) {
  $("#" + tile).addClass("lit");
  window.setTimeout(function() {
    $("#" + tile).removeClass('lit');
  }, 300);
};

Simon.prototype.check = function(clicked) {
  if (clicked !== this.sequence[this.index]) {
    alert("game over");
    this.resetGame();
  } else if (this.index === this.sequence.length - 1) {
    this.beginTurn();
  } else {
    this.index++;
    console.log("correct - index: " + this.index);
  }
};

Simon.prototype.randomNumber = function() {
  return Math.floor((Math.random()*4)+1);
}

exports.Simon = Simon;