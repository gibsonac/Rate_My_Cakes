const mongoose = require('mongoose');
const cake = mongoose.model('Cake');
const rating = mongoose.model('Rating');
let errorHandler = require('./helpers/error-handler'); // error handling never changes, so let's make it general

module.exports = {
    index(req, res) {
        cake.find({})
            .sort({ createdAt: -1 })
            .populate("_ratings")
            .exec()
            .then(results => res.json(results))
            .catch(errorHandler.bind(res));
    },
    show(req, res) {
        cake.findById(req.params.id)
            .populate("_ratings")
            .exec()
            .then(cake => res.json(cake))
            .catch(errorHandler.bind(res));
    },
    createCake(req, res) {
        cake.create(req.body)
            .then(cake => res.json(cake))
            .catch(errorHandler.bind(res));
    },
    createRating(req, res) {
        const newRating = new rating(req.body);
        newRating.save()
            .then(() => {
                cake.updateOne({ _id: req.params.id }, {
                    $push: { _ratings: newRating }
                })
                    .then(rating => res.json(rating))
                    .catch(errorHandler.bind(res))
            })
            .catch(errorHandler.bind(res));
    },
    showCake(req, res) {
        console.log("here is what came through", req.params.search)
        cake.find({ baker: req.params.search })
            .then(cake => res.json(cake))
            .catch(errorHandler.bind(res));
    }
}
