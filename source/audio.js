var fs = require('fs');
var lame = require('lame');
var Speaker = require('speaker');

fs.createReadStream('/home/pi/Music/megahit.mp3')
    .pipe(new lame.Decoder())
    .on('format', function (format) {this.pipe(new Speaker(format));})
    .on('error', (e) => {console.error(`error: ${e.message}`);});