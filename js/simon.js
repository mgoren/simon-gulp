exports.animate = function(sequence) {
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

exports.check = function(clicked, sequence, index) {
  if (clicked !== sequence[index]) {
    console.log("game over");
    return false;
  } else if (index === sequence.length - 1) {
    console.log("finished");
    this.beginTurn();
  } else {
    console.log("correct, keep going");
  }
};

exports.beginTurn = function() {
  
}
