const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ItemSchema = new Schema({
    name: String,
    price: Number,
    description: String,
    bar_code: String,
    dimensions: String,
    locationInStore: String,
    quantity: Number

});

module.exports = mongoose.model("item", ItemSchema);

