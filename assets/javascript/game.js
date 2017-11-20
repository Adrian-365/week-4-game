
$(document).ready(function() {

//make global variables accessible by all functions.
var random = 0;
var wins = 0;
var losses = 0;
var newScore =  0;

// a function to initiaze the game
function initializeGame() {
	// assign a random number between 19 -120 as a target number and print it to the screen.
	random = Math.floor(Math.random() * 101 +19);	
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

	
	$('#wins').html("Wins: " +wins);
	$('#losses').html("Losses: " +losses);
	$('#score').html(0).data(newScore);

};



// when a gem is clicked, add it's value to the score
$(document).on('click', 'button', function() {
		console.log('button clicked!!');
		var clickValue = ($(this).data('gemValue'));
		console.log(clickValue);
		
		newScore += clickValue;		
		console.log(newScore);
		$('#guess').text(newScore);
	
		// check to see if the guess has added up to the random number yet
		if (newScore > random) {
			alert("Sorry you went over, you lost.");
			losses++;
			$('#losses').text("Losses: " +losses);
			newScore = 0;
			initializeGame();
		}

		else if (newScore === random) {
			alert("You Win!  Yaaaayyyy!");
			wins++;
			$('#wins').text("Wins: " +wins);
			newScore = 0;
			initializeGame();
		};
	});


// initialize the game
initializeGame();


// end of the document.ready
});





