var Simon = require('../js/simon.js').Simon;

$(document).ready(function(){
  var game = new Simon();

  $("#start-button").click(function() {
    game.beginTurn();
  });

  $(".tile").click(function() {
    var clicked = parseInt($(this).attr('id'));
    game.check(clicked);
  });
});
