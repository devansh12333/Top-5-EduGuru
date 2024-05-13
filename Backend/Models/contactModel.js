const {Schema, model} = require('../Connection')
const userSchema = new Schema({
    fullName: String,
    email:String,
    phoneno: String,
    subject: String,
    message: String,
});
module.exports = model('playway', userSchema)