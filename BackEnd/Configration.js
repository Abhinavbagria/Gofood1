const mongoose= require('mongoose');

const password = ("mongodb://localhost:27017/config");
mongoose.connect(password);
const FoodSchema=mongoose.Schema({
    name:String,
    price:String,
   
    
});


module.exports=mongoose.model('Food',FoodSchema)

