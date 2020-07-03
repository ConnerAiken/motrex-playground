
var gpio = require('rpi-gpio');

gpio.write(7, true, function(err) {
	if (err) throw err;

	console.log('Written True to pin'); 
});