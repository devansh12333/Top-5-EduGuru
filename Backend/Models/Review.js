const { Schema, model, Types } = require("../Connection");

const reviewsSchema = new Schema({
  name: String,
  comment: String,
  rating: String,
  user: { type: Types.ObjectId, ref: 'user' },
  college: { type: Types.ObjectId, ref: 'college' },
});
module.exports = model("reviews", reviewsSchema);
