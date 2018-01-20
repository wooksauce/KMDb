const router = require('express').Router();
const control = require('../controller/routeController');

router.get('/getMovies', control.getMovies);

router.get('/searchIMDbMovies/:search', control.searchIMDbMovies);

router.get('/searchUserMovies/:search', control.searchUDbMovies);

router.get('/sortMovies/:sortBy', control.sortMovies);

router.post('/saveMovie/', control.saveMovie);

router.delete('/deleteMovie/:id', control.deleteMovie);


module.exports = router;