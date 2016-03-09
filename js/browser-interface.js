var simon = require('../js/simon.js');

$(document).ready(function(){
  var sequence = [3,1,4];
  var index = 0;

  $("#start-button").click(function() {
    simon.animate(sequence);

    $(".tile").off();
    $(".tile").click(function() {
      var clicked = parseInt($(this).attr('id'));
      simon.check(clicked, sequence, index);
      index++;
    });
  });
});
