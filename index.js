const got = require('got');
const url = 'http://google.com';
const invertal = 1000;

function ping() {

    got(url).then(response => {
      console.log('pinged...');
    }).catch(error => {
      console.log('failure on ping...');
    });
    
}

setInterval(ping, invertal);