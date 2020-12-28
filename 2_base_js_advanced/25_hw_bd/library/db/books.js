const {Schema, model} = require('mongoose')

const book = new Schema({
    title: String,
    year: Number,
    genre: String,
    img: String,
    author: String,
})

module.exports = model('Book', book)