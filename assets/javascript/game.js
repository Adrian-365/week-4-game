
var crystalGame = {

random: 0,
wins: 0,
losses: 0,
score: 0,

initializeGame: function () {

	var random = Math.floor(Math.random() * 101 +19);
	var red = Math.floor(Math.random() * 12 +1);
	var blue = Math.floor(Math.random() * 12 +1);
	var yellow = Math.floor(Math.random() * 12 +1);
	var green  = Math.floor(Math.random() * 12 +1);
	var wins = 0;
	var losses = 0;
	var score = 0;
	$('#random').html(random);
	$('#red').data('gemValue', red);
	$('#blue').data('gemValue', blue);
	$('#yellow').data('gemValue', yellow);
	$('#green').data('gemValue', green);
	$('#wins').html("Wins:  " +wins);
	$('#losses').html("Losses:  " +losses);
	$('#score').html(score);
	console.log($('#red').data('gemValue'));
	console.log($('#blue').data('gemValue'));
	console.log($('#yellow').data('gemValue'));
	console.log($('#green').data('gemValue'));
	

},

// guess: function() {
// 	$('#score').html(this.data);

// 	},




};

crystalGame.initializeGame();

$('.gem').on('click', function() {

	$(this).data('gemValue');
	console.log(clickValue);
	}
);

