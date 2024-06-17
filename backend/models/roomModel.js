import mongoose from "mongoose";

const roomSchema =new mongoose.Schema({
    participants:[{ type:mongoose.Schema.Types.ObjectId , ref:'User' }],
    admin:{type:mongoose.Schema.Types.ObjectId , ref:'User', require:true},
    name:{type:String, requrie:true, unique:true},
    message:[{ type:mongoose.Schema.Types.ObjectId , ref:'Message', default:[] }]
}, {timestamps:true})


export const Room = mongoose.model("Room" , roomSchema)