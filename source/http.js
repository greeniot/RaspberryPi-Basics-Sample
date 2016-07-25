var http = require('http');

http.get('http://httpbin.org/bytes/4', (res) => {
    var str = '';
    res.on('data', (chunk) => {str += chunk;});
    res.on('end', () => {console.log(str);});
}).on('error', (e) => {console.log(`error: ${e.message}`);});