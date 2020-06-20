const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ArtistSchema = new Schema({
    name: String,
    age: Number,
    genre: String
});

const Artist = mongoose.model('artist', ArtistSchema);

module.exports = Artist;