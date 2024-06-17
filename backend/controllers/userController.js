import { Conversation } from "../models/converstationModel.js"
import { Room } from "../models/roomModel.js"
import { User } from "../models/userModel.js"

const Signup = async(req, res)=>{
    const {username , email , password , gender} = req.body
    
    if(email === undefined || username === undefined || password === undefined){
        return res.status(400).json({
            "error":true,
            "message":"all required fields are not sent"
        })
    }
    
    if(password.length < 8){
        return res.status(400).json({
            "error":true,
            "message":"Password must have at least 8 characters"
        })
    }
    
    [techStack , language, codeforces , codechef,leetcode].map(item=>{
        if(item === '' || item===null)
            item=" "
    })
    
    const userExistenceCheck = await User.findOne({$or:[{email:email} , {username:username}]})
    if(!(userExistenceCheck===null) && (userExistenceCheck.email==email || userExistenceCheck.username==username)){
        return res.status(400).json({
            "error":true,
            "message":"User with same Email or username already exist! Choose a different one"
        })
    }
    
    const girlPic = `https://avatar.iran.liara.run/public/girl?username=${username}`
    const boyPic = `https://avatar.iran.liara.run/public/boy?username=${username}`
    const clownPic = ''
    const profile = gender==='Male'?boyPic:(gender=='Female'?girlPic:clownPic)
    const newUser = await User.create({username , email , password,profile, verfied:false , online:false})
    if(newUser === null){
        return res.status(505).json({
            "error":true,
            "message":"New User not Created due to Server Error"
        })
    }
    
    mailUtil(email , "Welcome to ZCODER!!");
    return res.status(200).json({
        user:newUser,
        "error_status":false,
        "message":"Succesfully created account. GO LOG IN!!!!"
    })
}
const Logout = async(req, res)=>{
    try{
        let user = req.user;
        user=await User.findById(user._id)
        user.online=false;
        user.refreshToken=undefined
        await user.save({validateBeforSave:false})
        const options ={
            httpOnly:true,
            secure:process.env.DEV_STATE === 'production'
        }
        
            return  res.status(200).clearCookie('AccessToken' , options).clearCookie('RefreshToken' , options).json({
                "error":false,
                "message":"User Logged Out Successfully"
            })
        }catch(error){
            return  res.status(500).json({
                "error":true,
                "message":"Error in Server while logging Out the user"
            })
        }
}
const Login = async(req, res)=>{
    const username=req.body.username;
    const password=req.body.password;
  try{
    const userExistenceCheck=await User.findOne( {username:username} );
    if(!userExistenceCheck){
        return  res.status(400).json({
            "loggedInUser":null,
            "error":true,
            "message":"User Does not Exist!! Give a Valid Username"
        })
    }
    const user=userExistenceCheck;
    const passwordCheck=await user.isPasswordCorrect(password)
    if(!passwordCheck){
        mailUtil(user.email , "ALERT!!!Someone tried to Enter in yor ZCoder Account with a incorrect or invalid Password!!")
        return  res.status(400).json({
            "loggedInUser":null,
            "error":true,
            "message":"Incorrect Password"
        })
    }
    const AccessToken = await generateAccessTokenUtils(user._id);
    const RefreshToken = await generateRefreshTokenUtils(user._id);
    
    if(!AccessToken || !RefreshToken){
        return res.status(501).json({
            user:null,
            "error":true,
            "message":"Error in Generating Bearer Tokens"
        })
    }
    
   
    const loggedInUser=await User.findById(user._id).select(" -password -refreshToken")
    const options={
        httpOnly:true,
        secure:process.env.DEV_STATE === 'production'
    }
    loggedInUser.online=true
    loggedInUser.save({validateBeforeSave:false})
    return res.status(200).cookie("AccessToken", AccessToken, options).cookie("RefreshToken" , RefreshToken, options).
    json({
        "error":false,
        "loggedInUser":loggedInUser, 
        "AccessToken":AccessToken , 
        "RefreshToken":RefreshToken,
        "message":"Succesfull Login"
    });
  }catch(error){
    return res.status(500).json({
        "error":true,
        "message":"Some Error Occured"
    })
  }
}
const Dashboard = async (req, res)=>{
    try{
        const userId = req.user._id
        const allConversations =  await Conversation.find({participants : userId}).exec()

        const contacts = allConversations ? allConversations.flatMap(convo => 
            convo.participants.filter(p => p.toString() !== userId.toString())
        ) : [];
        
        const allRooms = await Room.find({participants:userId}).exec()
        const roomIdList1 = allRooms ? allRooms.map(room => room._id) : [];

        const myRooms = await Room.find({admin:userId}).exec()
        const roomIdList2 = myRooms ? myRooms.map(room => room._id) : [];
        
        return res.status(200).json({
            "error":false,
            "messsage":"Success",
            "contacts":contacts,
            "joinedRooms":roomIdList1,
            "myRooms":roomIdList2
        })
    }catch(error){
        return res.status(error.status || 500 ).json({
            "error":true,
            "message":error.message || "Something went wrong"
        })
    }
}
const Search = async (req, res)=>{
    try{
        const searchWord = req.query.searchWord
        const findUser = await User.findOne({username:searchWord})
        const findRoom = await Room.findOne({name:searchWord})
        return res.status(201).json({
            "error":false,
            "message":"Search Succesfully",
            "user":findUser,
            "room":findRoom
        })
    }catch(error){
        return res.status(error.status || 500).json({
            "error":true,
            "message":error.message || "Something went wrong"
        })
    }
}

export {Login , Signup , Logout , Dashboard , Search}