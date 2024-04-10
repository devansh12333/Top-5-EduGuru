const {Schema, model} = require('../Connection')
const userSchema = new Schema({
    collegename: String,
    fees: String,
    collegedetail: String,
    collegeaddress: String,
    Image: String,
    email: String,
    phone: Number,
    
});
module.exports = model('college', userSchema)