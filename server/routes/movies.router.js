const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

// Gets all movies from database
router.get('/', (req, res) => {
  const queryText = `SELECT * FROM movies ORDER BY id ASC;`;
  pool.query(queryText)
    .then((result) => { res.send(result.rows); })
    .catch((err) => {
      console.log('Error completing SELECT favorite query', err);
      res.sendStatus(500);
    });
});

// Updates movie description 
router.put('/', (req, res) => {
  const queryText = `UPDATE movies SET description = $1 WHERE id = $2;`
  pool.query(queryText, [req.body[0], req.body[1]])
  .then(response => {
      res.sendStatus(200);
  }).catch( error => {
      console.log( 'ERROR UPDATING DESCRIPTION', error );
      res.sendStatus( 500 );
  })
})
module.exports = router;