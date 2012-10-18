var util      = require('util'),
    colors    = require('colors'),
    http      = require('http'),
    httpProxy = require('http-proxy'),
    express   = require('express'),
    app       = express();


httpProxy.createServer({target: { port: 3334, host: 'localhost'}}).listen(3333);

app.get('/data/chart/component', function (req, res, next) {
  res.send({
    message: "Im in server 3334",
    url: req.url
  });
});

app.get('/data/dashboard', function (req, res, next) {
  res.send({
    message: "Im in server 3334",
    url: req.url
  });
});

app.listen(3334);

util.puts('http server '.blue + 'started '.green.bold + 'on port '.blue + '3333 '.yellow + 'with proxyRequest handler'.cyan.underline);
util.puts('http server '.blue + 'started '.green.bold + 'on port '.blue + '3334 '.yellow);
