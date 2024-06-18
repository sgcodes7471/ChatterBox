import { Room } from "../models/roomModel.js";
import { RoomMessage } from "../models/roomMessageModel.js";

const createRoom = async (req, res)=>{
    try{
        const admin = req.user._id
        const name = req.body.name
        const profile = req.body.profile
        const nameCheck = await Room.findOne({name:name})
        if(!nameCheck){
            throw new Error(400 , 'Room with same Name already exists')
        }
        const newRoom = await Room.create({admin , name , profile })
        if(!newRoom){
            throw new Error(501 , 'Room not Created')
        }
        return res.status(201).json({
            "error":false,
            "message":"New Room Created"
        })
    }catch(error){
        return res.status(error.status||500).json({
            "error":true,
            "message":error.message || 'Something went wrong'
        })
    }
}

const joinRoom = async (req, res)=>{
    try{
        const userId = req.user._id;
        const roomId = req.params.roomId
        const room = await Room.findById(roomId)
        if(!room){
            throw new Error(404 , 'Room Does not Exist')
        } 
        room.participants.push(userId)
        await room.save({validateBeforeSave:false})
        return res.status(200).json({
            "error":false,
            "message":`Welcome to the Room ${room.name}`
        })
    }catch(error){
        return res.status(error.status || 500).json({
            "error":true,
            "message":error.message || 'Something went wrong'
        })
    }
}

const enterRoom=async(req, res)=>{
    try{
        const room = await Room.findById(req.params.roomId).populate('message participants')
        if(!room){
            throw new Error(404 , 'Room Does not Exist')
        }
        const message= (!room)?[]:room.message
        return res.status(200).json({
            "error":false,
            "message":"Success",
            "data":message
        })
    }catch(error){
        return res.status(error.status||500).json({
            "error":true,
            "message":error.message || 'Something went wrong'
        })
    }
}

const leaveRoom = async(req, res)=>{
    try{
        const room  = await Room.findByIdAndUpdate(req.params._id , {$pull:{participants:userId}} , {new:true})
        if(!room){
            throw new Error(404 , 'Room does not exist')
        }
        return res.status(200).json({
            "error":false,
            "message":`You left the Room ${room.name}`
        })
        
    }catch(error){
        return res.status(error.status||500).json({
            "error":true,
            "message":error.message || 'Something went wrong'
        })
    }
}

const sendMsgRoom = async(req, res)=>{
    try{
        const senderId = req.user._id
        const message = req.body.message
        const room = await Room.findById(req.params.roomId)
        if(!room){
            throw new Error(404 , 'Room does not exists')
        }
        const roomMessageNew = await RoomMessage.create({senderId , senderUsername:req.user.uername, roomId:room._id , message})
        if(!roomMessageNew){
            throw new Error(501, 'Message could not be generated')
        }
        room.message.push(roomMessageNew._id)
        const roomSave = await room.save({validateBeforeSave:false})
        if(!roomSave){
            await Room.findByIdAndDelete(roomMessageNew._id)
            throw new Error(501, 'Message could not be generated')
        }
        return res.status(200).json({
            "error":false,
            "message":"Successfully message sent"
        })
    }catch(error){
        return res.status(error.status||500).json({
            "error":true,
            "message":error.message || 'Something went wrong'
        })
    }
}



export {createRoom , joinRoom ,enterRoom , leaveRoom , sendMsgRoom }