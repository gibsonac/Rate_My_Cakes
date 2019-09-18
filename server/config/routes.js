const controllerCakes = require('../controllers/cakes.js');

module.exports = function (app) {
    app.get('/cakes/', controllerCakes.index)
    app.get('/cakes/:id', controllerCakes.show)
    app.post('/cakes/', controllerCakes.createCake)
    app.post('/ratings/:id', controllerCakes.createRating)
    app.get('/cakes/search/:search', controllerCakes.showCake)
}

