var Simon = require('../js/simon.js').Simon;

$(document).ready(function(){
  var game = new Simon();
  $("#start-button").click(function() {
    activateBoard();
    $(".tile").click(function() {
      var clicked = parseInt($(this).attr('id'));
      game.check(clicked);
    });
    game.nextTurn();
  });
});

var activateBoard = function() {
  $("#start-button").hide();
  $("#turn-display").show();
  $(".tile").addClass("clickable");
  $(".tile").mousedown(function() {
    $(this).addClass("lit");
  });
  $(".tile").mouseup(function() {
    $(this).removeClass("lit");
  });
};