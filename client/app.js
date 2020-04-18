require('dotenv').config();
const https = require('https');
const http = require('http');
const { parse } = require('url');
const next = require('next');
const fs = require('fs');

const port = process.env.PORT || 3000;
const portSsl = process.env.PORT_SSL || 3001;

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const httpsOptions = {
  key: fs.readFileSync('./certs/privkey.pem'),
  cert: fs.readFileSync('./certs/cert.pem'),
};

app.prepare().then(() => {
  http.createServer(app).listen(port);
  https
    .createServer(httpsOptions, (req, res) => {
      const parsedUrl = parse(req.url, true);
      handle(req, res, parsedUrl);
    })
    .listen(portSsl, (err) => {
      if (err) throw err;
      console.log(`> Ready on https://localhost:${portSsl}`);
    });
});
