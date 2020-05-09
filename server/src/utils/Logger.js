const winston = require('winston');
require('winston-daily-rotate-file');

const format = winston.format.combine(
    winston.format.timestamp(),
    winston.format.json(),
);
 
const debugDailyTransport = new (winston.transports.DailyRotateFile)({
  filename: 'server-debug-%DATE%.log',
  dirname: 'logs/server',
  datePattern: 'YYYY-MM-DD-HH',
  zippedArchive: true,
  maxSize: '20m',
  level: 'silly'
});
const infoDailyTransport = new (winston.transports.DailyRotateFile)({
  filename: 'server-warning-%DATE%.log',
  dirname: 'logs/server',
  datePattern: 'YYYY-MM-DD-HH',
  zippedArchive: true,
  maxSize: '20m',
  level: 'info'
});

const transports = [
    debugDailyTransport,
    infoDailyTransport
];

if (process.env.ENV === 'development') {
    transports.push(new winston.transports.Console({ level: 'silly' })); 
}


const logger = winston.createLogger({
    format,
    transports
});

module.exports = logger;