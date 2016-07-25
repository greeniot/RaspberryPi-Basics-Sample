var https = require('https');

https.get('https://www.random.org/integers/?num=1&min=1&max=100&col=1&base=10&format=plain&rnd=new',
(res) => {
    console.log('headers: ', res.headers);
    var str = '';
    res.on('data', (chunk) => {str += chunk;});
    res.on('end', () => {console.log(str);});
}).on('error', (e) => {console.error(`error: ${e.message}`);});