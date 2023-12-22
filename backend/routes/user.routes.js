const express=require("express")
const { UserModel } = require("../models/user.model")
const userRouter=express.Router()

userRouter.post("/create",async(req,res)=>{
    try {
        const {name,desc,faq}=req.body
        const timestamp=new Date()
         const userdata=new UserModel({name,desc,faq,timestamp})
         await userdata.save()
         res.json({msg:"new userdata has been added",userdata:userdata})
    } catch (error) {
        res.json({error:error.message})
    }
})


userRouter.get("/",async(req,res)=>{
     try {
          const userDatas=await UserModel.find()
          res.json({msg:"get the data",userDatas:userDatas})
     } catch (error) {
        res.json({error:error.message})
     }
})

  





module.exports={
    userRouter
}

