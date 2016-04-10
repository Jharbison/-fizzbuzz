$(document).ready(function() {

	$('form').on('submit', function(e) {
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
		$('.fizzbuzz').append('<li>Buzz</li>');
	}
	else {
		$('.fizzbuzz').append('<li>' + i + '</li>');
	}
};
var clean = function () {
		$('ul').remove();
	}

if (num % 1 != 0 && num !==NaN) {
	clean();
	alert("Must use whole number");
}

});

});
