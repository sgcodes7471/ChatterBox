import mongoose from "mongoose";

const roomMessageSchema =new mongoose.Schema({
    senderId:{type:mongoose.Schema.Types.ObjectId , ref:'User' , require:true},
    roomId:{type:mongoose.Schema.Types.ObjectId , ref:'Room', require:true},
    message:{type:String , require:true , require:true}
},{timestamps:true});


export const RoomMessage = mongoose.model('RoomMessage' , roomMessageSchema)