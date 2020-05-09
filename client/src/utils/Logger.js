import Config from '../Config';
const beaver = require('beaver-logger');

const url = `${Config.API_URL}/api/log`;

console.log(url);

const logger = beaver.Logger({
 
    // Url to send logs to
    url,
 
    // Prefix to prepend to all events
    // prefix: 'myapp',
 
    // Log level to display in the browser console
    logLevel: beaver.LOG_LEVEL.WARN,
 
    // Interval to flush logs to server
    // flushInterval: 60 * 1000
    flushInterval: 1000
});

export default logger;