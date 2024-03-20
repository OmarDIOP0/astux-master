import mongoose from "mongoose";

const ClassSchema =  new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:false   
    },
    available_Seats:{
        type:Number,
        required:false
    },
    price:{
        type:Number,
        required:true
    },
    video_Url:{
        type:String,
        required:false
    },
    description:{
        type:String,
        required:false
    },
    instructor_Name:{
        type:String,
        required:true
    },
    instructor_Email:{
        type:String,
        required:true
    },
    status:{
        type:String,
        required:false
    },
    total_Enrollment:{ 
        type:Number,
        required:false
    },
    reason:{
        type:String,
        required:false
    },
},{timestamps:true});

const Class = mongoose.model("Class",ClassSchema);
export default Class;