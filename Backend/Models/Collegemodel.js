const {Schema, model} = require('../Connection')
const userSchema = new Schema({
    collegename: String,
    fees: String,
    collegedetail: String,
    collegeaddress: String,
    image: String,
    email: String,
    phone: Number,
    courses:String,
});
module.exports = model('college', userSchema)