const {Schema, model} = require('mongoose')

const author = new Schema({
    name: String,
    born: String,
    genre: String,
    img: String
})

module.exports = model('Author', author)