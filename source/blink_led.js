var five = require("johnny-five");
var raspi = require("raspi-io");
var board = new five.Board({
    io: new raspi()
});

board.on("ready", function() {
    var led = new five.Led("P1-13");
    led.blink();
});