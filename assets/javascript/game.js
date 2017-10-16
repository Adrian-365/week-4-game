
var crystalGame = {

// a method to initiaze the game
initializeGame: function () {
	// assign a random number between 19 -120 as a target number and print it to the screen.
	var random = Math.floor(Math.random() * 101 +19);	
	$('#random').html(random);
	
	// create four random numbers 1-12.  Assign them to each gem. 
	// Console.log those values to check them.
	var red = Math.floor(Math.random() * 12 +1);
	var blue = Math.floor(Math.random() * 12 +1);
	var yellow = Math.floor(Math.random() * 12 +1);
	var green  = Math.floor(Math.random() * 12 +1);
	$('#red').data('gemValue', red);
	$('#blue').data('gemValue', blue);
	$('#yellow').data('gemValue', yellow);
	$('#green').data('gemValue', green);
	console.log($('#red').data('gemValue'));
	console.log($('#blue').data('gemValue'));
	console.log($('#yellow').data('gemValue'));
	console.log($('#green').data('gemValue'));

	// set wins losses and score to zero and print those to the screen.
	var wins = 0;
	var losses = 0;
	var score = 0;
	$('#wins').html("Wins: " +wins);
	$('#losses').html("Losses: " +losses);
	$('#score').html(0).data('scoreValue', 0);

},

// a method to add a gem's value to the score when that gem gets clicked.
clickEvent: function() {
		var clickValue = ($(this).data('gemValue'));
		var newScore = ($('#score').data('scoreValue'))+ clickValue;
		console.log(clickValue);
		console.log(newScore);
		$('#score').html(newScore);
	
		// check to see if the guess has added up to the random number yet
		if (newScore > random) {
			alert("Sorry you went over, you lost.");
			losses++;
			$('#losses').html("Losses: " +losses);
		}

		else if (newScore === random) {
			alert("You Win!  Yaaaayyyy!");
			wins++;
			$('#wins').html("Wins: " +wins);
		};
	},


// end of the object
};

// initialize the game
crystalGame.initializeGame();

// when a gem is clicked, add it's value to the score
$('.gem').on('click', crystalGame.clickEvent());


