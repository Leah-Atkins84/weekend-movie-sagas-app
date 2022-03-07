const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

router.get('/:id', (req, res) => { // Add query to get all genres
    const movieInfo = req.params.id;
  console.log('getting movie info', movieInfo);
    const queryText = `select genres.name
      from "movies"
      join movies_genres on movies.id = movies_genres.movie_id
      join genres on genres.id = movies_genres.genre_id
      where movies_genres.movie_id = ${movieInfo}`;
    pool.query(queryText).then((result) => {
        res.send(result.rows);
    }).catch((error) => {
        console.log('Error on query');
        res.sendStatus(500)
    })
});

module.exports = router;
