const dev = {
  API_URL: 'http://localhost:3000',
  API_ENDPOINT: '/api',
  API_EXTENSION: '.json',
  GA_TRACKING_ID: '',
  VERSION: '0.1.0',
  // IMAGE_SOURCE: 'nd'
};

const test = {
  // API_URL: 'http://192.168.1.48:3001',
  API_URL: 'http://localhost:3001',
  // API_URL: '',
  API_ENDPOINT: '/api',
  API_EXTENSION: '',
  GA_TRACKING_ID: '',
};

const prod = {
  API_URL: 'http://kwarantine.fr',
  API_ENDPOINT: '/api',
  API_EXTENSION: '',
  GA_TRACKING_ID: 'UA-12326200-18',
};

const env = 'test';

let Config = {};

if (env === 'dev' || env === 'test' || env === 'prod') {
  Config = Object.assign(Config, dev);
}
if (env === 'test' || env === 'prod') {
  Config = Object.assign(Config, test);
}
if (env === 'prod') {
  Config = Object.assign(Config, prod);
}

export default Config;
