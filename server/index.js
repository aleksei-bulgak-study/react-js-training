require('dotenv').config();
const { Router } = require('express');
const express = require('express');
const serverRouting = require('../dist/serverRouting').default;

const PORT = process.env.PORT || 3000;

const app = express();
const router = Router();
app.use(express.static('dist'));

const processRedirect = (res, error) => {
  if (error.redirect) {
    res.writeHead(302, {
      Location: error.message,
    });
    res.end();
  }
};

router.get('/films/:id', (req, res) => {
  const filmId = req.params.id;
  return Promise.resolve(serverRouting.renderPreview(req.url, filmId))
    .then((html) => res.send(html))
    .catch((error) => {
      processRedirect(res, error);
    });
});

router.get('/search', (req, res) => {
  const { query } = req.query;

  return Promise.resolve(serverRouting.renderSearch(req.url, query))
    .then((html) => res.send(html))
    .catch((error) => {
      processRedirect(res, error);
    });
});

router.get('/', (req, res) => {
  try {
    serverRouting.renderHome(req.url);
  } catch (error) {
    processRedirect(res, error);
  }
});

app.use(router);

app.listen(PORT, () => {
  console.info(`Express listening on port ${PORT}`); // eslint-disable-line
});

module.exports = app;
