
const mongoose=require("mongoose")

const faqSchema=new mongoose.Schema({
     question:String,
     answer:[String]
})

const UserSchema=new mongoose.Schema({
     name:String,
     desc:String,
     faq:[faqSchema],
     timestamp:{
        type:Date,
        default:Date.now
     }
})


const UserModel=mongoose.model("jobtask",UserSchema)

module.exports={
    UserModel
}