const got = require('got');
const url = 'https://eriscmsqa.z19.web.core.windows.net/';
const interval = 30000;

function ping() {

    got(url).then(response => {
      console.log('pinged...');
    }).catch(error => {
      console.log('failure on ping...');
    });

}
setInterval(ping, interval);
console.log('pinging ' + url + ' every ' + interval + 'ms');