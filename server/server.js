const express = require('express');
const app = express();
const PORT = 3000;

const path = require('path');

// require routers:
const testRouter = require('./routes/testrouter');

// parse req body:
app.use(express.json());

if (process.env.NODE_ENV === 'production') {
  // statically serve everything in the dist folder on the route
  app.use('/', express.static(path.join(__dirname, '../dist')));
  // serve index.html on the route '/'
  app.get('/', (req, res) => {
    res.status(200).sendFile(path.join(__dirname, '../dist/index.html'));
  });
}

// TEST router
app.use('/test', testRouter);

// catch-all route handler for req to unknown routes
app.use((req, res) => {
  return res.status(400).send('Page not found. TRY AGAIN!')
});

app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unkown middleware error!',
    status: 500,
    message: { err: 'An error occurred!' }
  };
  const errorObj = Object.assign(defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
})

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});

module.exports = app;