const express = require('express');
const pool = require('../modules/pool');
// const {default: Axios} = require('axios');
// require('dotenv').config();
// console.log('giphy key', process.env.GIPHY_API_KEY);

const router = express.Router();

// console.log('api key:', process.env.GIPHY_API_KEY)
// gets all movies from database
// query to call rows of movies with genres 
router.get('/', (req, res) => {
  const queryText = `SELECT * FROM movies
  JOIN movie_genre_junction on movie_genre_junction.movie_id = movies.id
  JOIN genres on genres.id = movie_genre_junction.genre_id;
  `;
  pool.query(queryText)
    .then((result) => { res.send(result.rows); })
    .catch((err) => {
      console.log('Error completing SELECT movie_genre_junction', err);
      res.sendStatus(500);
    });
});

router.post('/', (req, res) => {
  console.log('update attempt:', req.body)
  // req.body.direction should be 'up' or 'down'
  const queryText = `WITH ins1 AS (
    insert into genres("name")
    values ($1)
    RETURNING id
  ) 
  insert into movie_genre_junction (movie_id, genre_id) values
  ($2, (select id from ins1));;`
  pool.query(queryText, [req.body[0], req.body[1]])
  .then(response => {
      res.sendStatus(200);
  }).catch( error => {
      console.log( 'ERROR UPDATING GENRE -------------->', error );
      res.sendStatus( 500 );
  })
})

module.exports = router;