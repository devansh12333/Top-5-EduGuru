const mongoose = require('mongoose');
const url = "mongodb+srv://Devansh:Devansh333@devansh.0vzhohd.mongodb.net/EDUGURU?retryWrites=true&w=majority&appName=Devansh"
mongoose.connect(url)

.then((result) => {
    console.log('Connected to the database')
}).catch((err) => {
    console.log(err)
});
module.exports = mongoose;