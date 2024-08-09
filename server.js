const path = require('path');
const express = require('express');

const port = process.env.PORT || 5511;
const app = express();


// substitute gzip files for uncompressed .js files
/* app.get(/(vendor|index).+\.js$/, function (req, res, next) {
  req.url = req.url + '.gz';
  res.set('Content-Encoding', 'gzip');
  next();
}); */

// use webpack dev server middleware if in dev mode
if (process.env.NODE_ENV !== 'production') {
  const webpack = require('webpack');
  const webpackDevMiddleware = require('webpack-dev-middleware');
  const webpackHMR = require('webpack-hot-middleware');
  const historyApiFallback = require('connect-history-api-fallback');

  const config = require('./webpack.config')({production: false});
  const compiler = webpack(config);
  const instance = webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath,
    stats: {
      normal: true,
      colors: true
    }
  });
  app.use(instance);
  app.use(historyApiFallback());
  app.use(instance);
  app.use(webpackHMR(compiler, { reload: true }))

} 
else {
  
  app.use(express.static(path.resolve(__dirname, 'dist')));
  
}



// app.get('*', function(req, res) {
//   res.sendFile(path.join(__dirname, '/dist/index.html'));
// })

app.listen(port, function() {
  console.log('Server is listening on port ', port);
});
