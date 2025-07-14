const mongoose= require('mongoose');

const password = ("mongodb://localhost:27017/config");
mongoose.connect(password);
const SignSchema=mongoose.Schema({
    name:String,
    Email:String,
    password:String
   
    
});


module.exports=mongoose.model('Sign',SignSchema)