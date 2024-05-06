const { Schema, model } = require('../Connection')
const userSchema = new Schema({
  name: String,
  email: String,
  password: String,
  role: {
    type: String,
    default: "user",
  },
  avatar: { type: String, default: "Avatar.png" }
});
module.exports = model('user', userSchema)