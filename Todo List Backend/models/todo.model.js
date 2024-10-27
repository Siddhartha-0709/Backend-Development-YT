import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    status:{
        type: Boolean,
        default: false
    },
    userEmail:{
        type: String,
        required: true
    }
},{timespamps: true});

export default mongoose.model("Todo", todoSchema);