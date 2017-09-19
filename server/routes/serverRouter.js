const router = require('express').Router();
const control = require('../controller/routeController');

router.get('/getMovies', control.getMovies);

router.get('/sortMovies/:sortBy', control.sortMovies);

router.post('/postMovie/:title', control.postMovie);

router.delete('/deleteMovie/:id', control.deleteMovie);


module.exports = router;