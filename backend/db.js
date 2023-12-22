const mongoose=require("mongoose")
const connection=mongoose.connect("mongodb://localhost:27017/job_notes")

module.exports={
    connection
}