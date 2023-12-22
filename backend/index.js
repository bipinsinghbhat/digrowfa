const express=require("express")
const { connection } = require("./db")
const {userRouter}=require("./routes/user.routes")
const app=express()

const cors=require("cors")


app.use(cors())
app.use(express.json())

app.use("/users", userRouter)

app.listen(4500,async()=>{
     try {
         await connection
         console.log("connected to database")
         console.log("express application is runnign at port 4500")
     } catch (error) {
        console.log(error)
        console.log("something went wrong")
     }
})