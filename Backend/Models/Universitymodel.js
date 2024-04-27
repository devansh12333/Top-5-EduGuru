const {Schema, model} = require('../Connection')
const userSchema = new Schema({
    universityname: String,
    fees: String,
    universitydetail: String,
    universityaddress: String,
    image: String,
    email: String,
    phone: Number,
    
});
module.exports = model('university', userSchema)