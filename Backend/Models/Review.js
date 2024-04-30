const { Schema, model } = require("../Connection");

const reviewsSchema = new Schema({
  name: String,
  comment:String,
  rating: String,
});
module.exports = model("reviews", reviewsSchema);
