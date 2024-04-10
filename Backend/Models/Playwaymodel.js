const {Schema, model} = require('../Connection')
const userSchema = new Schema({
    playwayname: String,
    fees: String,
    playwaydetail: String,
    playwayaddress: String,
    Image: String,
    email: String,
    phone: Number,
    
});
module.exports = model('playway', userSchema)