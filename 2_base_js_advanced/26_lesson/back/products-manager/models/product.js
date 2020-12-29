//1.Імпортували модуль
const mongoose = require("mongoose");

//3. Свторюємо схему
const Schema = mongoose.Schema;
// Створення схеми моделі
module.exports = new Schema({
  title: String,
  price: Number,
});
