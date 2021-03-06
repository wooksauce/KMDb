const router = require('express').Router();
const control = require('../controller/routeController');

router.get('/getMovie/:imdbid', control.getMovie);

router.get('/getMovies', control.getMovies);

router.get('/searchIMDbMovies/:search', control.searchIMDbMovies);

router.get('/searchUserMovies/:search', control.searchUDbMovies);

router.get('/sortMovies/:sortBy', control.sortMovies);

router.post('/saveMovie/', control.saveMovie);

router.delete('/deleteMovie/:id', control.deleteMovie);

router.put('/updateMovie/:id', control.updateMovie);

router.get('/checkForMovie/:id', control.checkForMovie);

module.exports = router;