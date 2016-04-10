$(document).ready(function() {

	$('form').on('submit', function(event) {
		event.preventDefault();

		var inputNumber = $('.input-box').val()
		var num = +inputNumber
		$('.input-box').val('');
		$('.fizzbuzz').empty();


for (var i = 1; i <= inputNumber; i++) {
	if (i%15===0) {
		$('.fizzbuzz').append('<li>FizzBuzz</li>');
	}
	else if (i%3===0) {
		$('.fizzbuzz').append('<li>Fizz</li>');
	}
	else if (i%5===0) {
		$('.fizzbuzz').append('<li>FizzBuzz</li>');
	}
	else {
		$('.fizzbuzz').append('<li>' + i + '</li>');
	}
};

});

});
