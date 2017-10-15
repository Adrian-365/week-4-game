
var crystalGame = {

random: 0,
wins: 0,
losses: 0,
score: 0,

initializeGame: function () {

	var random = Math.floor(Math.random() * 101 +19);
	var wins = 0;
	var losses = 0;
	var score = 0;
	$('#random').html(random);
	$('#wins').html("Wins:  " +wins);
	$('#losses').html("Losses:  " +losses);
	$('#score').html(score);

},


};
console.log("I'm here!")
crystalGame.initializeGame();

