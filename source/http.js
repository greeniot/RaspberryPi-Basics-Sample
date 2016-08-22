var http = require('http');

http.get('http://httpbin.org/bytes/4', (req) => {
    var str = '';
    req.on('data', (chunk) => {str += chunk;});
    req.on('end', () => {console.log(str);});
}).on('error', (e) => {console.log(`error: ${e.message}`);});
