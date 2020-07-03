
var gpio = require('rpi-gpio');

gpio.write(7, false, function(err) {
	if (err) throw err;

	console.log('Written False to pin'); 
});