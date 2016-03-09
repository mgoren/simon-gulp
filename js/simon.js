var Simon = function() {
  this.resetGame();
};

Simon.prototype.resetGame = function() {
  this.sequence = [];
  this.turn = 0;
  this.deactivateBoard();
};

Simon.prototype.nextTurn = function() {
  this.sequence.push(Math.floor((Math.random()*4)+1));
  this.index = 0;
  this.animate();
  $("#turn").text(this.turn + 1);
};

Simon.prototype.check = function(clicked) {
  if (clicked !== this.sequence[this.index]) {
    alert("game over - score: " + this.turn);
    this.resetGame();
  } else if (this.index === this.sequence.length - 1) {
    this.turn++;
    this.nextTurn();
  } else {
    this.index++;
  }
};

Simon.prototype.animate = function() {
  var self = this;
  var i=0;
  var interval = setInterval(function() {
    self.lightUp(self.sequence[i]);
    i++;
    if (i >= self.sequence.length) {
      clearInterval(interval);
    }
  }, 600);
};

Simon.prototype.lightUp = function(tile) {
  $("#" + tile).addClass("lit");
  window.setTimeout(function() {
    $("#" + tile).removeClass('lit');
  }, 300);
};

Simon.prototype.deactivateBoard = function() {
  $("#turn-display").hide();
  $("#turn").empty();
  $(".tile").removeClass("clickable");
  $(".tile").off();
  $("#start-button").show();
};

exports.Simon = Simon;