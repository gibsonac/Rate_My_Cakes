const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const ratingSchema = new mongoose.Schema({
    star: { type: Number, required: true, min: 1, max: 5 },
    comment: { type: String, required: true, minlength: [5, "must have a min of 5 characters"] },
    _cake: [{ type: Schema.Types.ObjectId, ref: "Cake" }]
}, { timestamps: true });
mongoose.model('Rating', ratingSchema)