const mongoose= require('mongoose');
const Itemschema=  mongoose.Schema({
    name:String,
    price:String,
    cetegrory:String,
    userId:String,


});


module.exports= mongoose.model('products',Itemschema);