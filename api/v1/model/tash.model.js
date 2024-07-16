const mongoose = require("mongoose");
const taskSchema = new mongoose.Schema(
    {
        title:String,
        status:String,
        timeStart:Date,
        timeFinish:Date,
        deleted:{
            type:Boolean,
            defeult:false,
        },
        deletedAt:Date,


    },{
        timestamps:true
    }
)
const Task = mongoose.model("Task",taskSchema,"tasks");
module.exports =Task;