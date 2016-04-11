$(document).ready(function() {

	$('form').on('submit', function(event) {
		event.preventDefault();

		var inputNumber = $('.input-box').val()
		var num = +inputNumber
		clean();

		if (num % 1 != 0 || num ===NaN || num >100 || num < 1) {
		alert("Must use whole number");
		} else { 
			fizzBuzz(num);	
		}


	});

	var clean = function () {
			$('.input-box').val('');
			$('.fizzbuzz').empty();
		}

	var fizzBuzz = function(inputNumber) {
		for (var i = 1; i <= inputNumber; i++) {
			if (i%15===0) {
				$('.fizzbuzz').append('<li>FizzBuzz</li>');
			}
			else if (i%3===0) {
				$('.fizzbuzz').append('<li>Fizz</li>');
			}
				else if (i%5===0) {
				$('.fizzbuzz').append('<li>Buzz</li>');
			}
			else {
				$('.fizzbuzz').append('<li>' + i + '</li>');
			}
		};
	}

});
