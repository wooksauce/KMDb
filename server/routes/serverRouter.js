const router = require('express').Router();
const control = require('../controller/routeController');

router.get('/getMovies', control.getMovies);

router.post('/postMovie', control.postMovie);

router.delete('/deleteMovie/:id', control.deleteMovie);

module.exports = router;