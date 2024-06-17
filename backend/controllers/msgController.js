import { Message } from "../models/messageModel.js"
import { Conversation } from "../models/converstationModel.js"
 
const SendMsg = async(req, res)=>{
   try{
    const message = req.body.message
    const senderId = req.user._id
    const receiverId = req.params.toId

    let conversation = await Conversation.findOne({participants:{$all:{senderId , receiverId}}})
    if(!conversation){
         conversation = await Conversation.create({participants:{senderId , receiverId}})
    }
    const messageNew = await Message.create({senderId , receiverId , message})
    conversation.message.push(messageNew._id)
    await conversation.save()
    return res.status(200).json({
        "error":false,
        "message":"Successfully Sent"
    })
   }catch(error){
    return res.status(error.status || 500).json({
        "error":true,
        "message":error.message || 'Something went wrong'
    })
   }
}

const GetMsg = async ( req , res)=>{
    try{
        const meriId = req.user._id
        const samneWalaId = req.params.toId
        const conversation = await Conversation.findOne({participants:{$all:{meriId , samneWalaId}}}).populate('message')
        //handle in frontend if conversation=[]
        const message = (!conversation)?[]:conversation.message
        return res.status(200).json({
            "error":false,
            "message":"Success",
            "data":message
        })
    }catch(error){
        return res.status(error.status || 500).json({
            "error":true,
            "message":error.message || 'Something went wrong',
            "data":[]
        })
    }
}

export {SendMsg , GetMsg}