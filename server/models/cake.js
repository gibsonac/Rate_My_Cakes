const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cakeSchema = new mongoose.Schema({
    url: { type: String, required: true, minlength: [10, "you need a min of 10 characters!"] },
    baker: { type: String, required: true, minlength: [3, "Baker must have more than 3 characters in their name!"] },
    _ratings: [{ type: Schema.Types.ObjectId, ref: "Rating" }]
}, { timestamps: true });
mongoose.model('Cake', cakeSchema)