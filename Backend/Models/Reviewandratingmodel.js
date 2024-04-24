const {Schema, model} = require('../Connection')
const userSchema = new Schema({
    fullName: String,
    email: String,
    phone: Number,   
    message: String,
   
    
});
module.exports = model('Reviewandrating', userSchema)