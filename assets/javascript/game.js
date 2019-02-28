$(document).ready(function() {
  var Random = Math.floor(Math.random() * 101 + 19);
  // Selects a random number to be shown at the start of the game
  // Number should be should be between 19 - 120
  //
  $("#randomNumber").text(Random);
  // Appending random number to the randomNumber id in the html doc
  //
  var num1 = Math.floor(Math.random() * 11 + 1);
  var num2 = Math.floor(Math.random() * 11 + 1);
  var num3 = Math.floor(Math.random() * 11 + 1);
  var num4 = Math.floor(Math.random() * 11 + 1);
  // Setting up random numbers for each jewel
  // Random number has to be between 1 - 12
  //
  var userTotal = 0;
  var wins = 0;
  var losses = 0;
  //  Decaring variables for tallies
  $("#wins").text(wins);
  $("#losses").text(losses);
  //resets the game
  function reset() {
    Random = Math.floor(Math.random() * 101 + 19);
    $("#randomNumber").text(Random);
    num1 = Math.floor(Math.random() * 11 + 1);
    num2 = Math.floor(Math.random() * 11 + 1);
    num3 = Math.floor(Math.random() * 11 + 1);
    num4 = Math.floor(Math.random() * 11 + 1);
    userTotal = 0;
    $("#finalTotal").text(userTotal);
  }
  //adds the wins to the userTotal
  function yay() {
    wins++;
    $("#wins").text(wins);
    $("#divPlayAgain").show();
    $("#game").hide();
    $("#playAgain").text("You Won! ");

    reset();
  }
  //addes the losses to the userTotal
  function loser() {
    losses++;
    $("#divPlayAgain").show();
    $("#game").hide();

    $("#losses").text(losses);
    $("#playAgain").text("You Lost! ");
    reset();
  }
  function play(yes) {
    if (yes) {
      $("#divPlayAgain").hide();
      $("#game").show();
    } else {
      $("#divPlayAgain").hide();
      $("#game").hide();
      $("#givenNumber").hide();
    }
  }
  $("#yes").on("click", function() {
    play(true);
  });
  $("#no").on("click", function() {
    play(false);
  });
  //sets up click for jewels
  $("#one").on("click", function() {
    userTotal = userTotal + num1;
    $("#finalTotal").text(userTotal);
    //sets win/lose conditions
    if (userTotal == Random) {
      yay();
    } else if (userTotal > Random) {
      loser();
    }
  });
  $("#two").on("click", function() {
    userTotal = userTotal + num2;
    $("#finalTotal").text(userTotal);
    if (userTotal == Random) {
      yay();
    } else if (userTotal > Random) {
      loser();
    }
  });
  $("#three").on("click", function() {
    userTotal = userTotal + num3;
    $("#finalTotal").text(userTotal);
    //sets win/lose conditions
    if (userTotal == Random) {
      yay();
    } else if (userTotal > Random) {
      loser();
    }
  });
  $("#four").on("click", function() {
    userTotal = userTotal + num4;
    $("#finalTotal").text(userTotal);

    if (userTotal == Random) {
      yay();
    } else if (userTotal > Random) {
      loser();
    }
  });
});
