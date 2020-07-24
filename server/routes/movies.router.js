const express = require('express');
const pool = require('../modules/pool');
// const {default: Axios} = require('axios');
// require('dotenv').config();
// console.log('giphy key', process.env.GIPHY_API_KEY);

const router = express.Router();

// console.log('api key:', process.env.GIPHY_API_KEY)

router.get('/', (req, res) => {
  const queryText = `SELECT * FROM movies;`;
  pool.query(queryText)
    .then((result) => { res.send(result.rows); })
    .catch((err) => {
      console.log('Error completing SELECT favorite query', err);
      res.sendStatus(500);
    });
});

module.exports = router;