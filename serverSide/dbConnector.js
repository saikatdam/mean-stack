const mongoose=require('mongoose')

const userSchema=mongoose.Schema({
    name:String,
    desc:String
})


const DataModel=mongoose.model("Cart",userSchema)

module.exports=DataModel;
