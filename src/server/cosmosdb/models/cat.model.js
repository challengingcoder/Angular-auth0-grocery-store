const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const CatSchema = new Schema(
  {
    id: { type: Number, required: true, unique: true },
    name: String,
    rating: String
  }
);

const Category = mongoose.model('category', CatSchema);

module.exports = Category;