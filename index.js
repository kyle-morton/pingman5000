const got = require('got');
const url = 'https://google.com/';
const interval = 1000;

function ping() {

    got(url).then(response => {
      console.log('pinged...');
    }).catch(error => {
      console.log('failure on ping...');
    });

}
setInterval(ping, interval);
console.log('pinging every ' + interval + 'ms');