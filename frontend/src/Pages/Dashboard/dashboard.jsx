import { useEffect, useRef, useState } from "react"
import Navbar from "../../Components/navbar.jsx"
import Rightbar from "../../Components/rightbar.jsx"
import Chats from "../../Components/chats.jsx"
import group from '../../assets/group.svg'
import { ChatContextProvider } from "../../Context/chatContext.js"
import LeftBar from "../../Components/leftbar.jsx"
import axios from 'axios'
import { useNavigate } from "react-router-dom"
import { response } from "express"

const Dashboard = ()=>{
    const [userList , setUserList ] = useState([{"profile":"https://avatar.iran.liara.run/public/boy?username:Monu" , "username":"Mohan Singh" , "_id":"123456789"},{"profile":"https://avatar.iran.liara.run/public/girl" , "username":"Mohan Rathore" , "_id":"123456788"}, {"profile":"https://avatar.iran.liara.run/public/boy" , "username":"Mohan Rathore" , "_id":"123456787"}])
    const [myRooms , setMyRooms]= useState([{"profile":group, "name":'Laude BC' , "_id":'09876544'}])
    const [joinedRooms , setJoinedRooms]= useState([{"profile":group, "name":'Hatt BC' , "_id":'09876543'}])
    const [messages , setMessages]=useState([]);

    const [current , setCurrent] = useState({})
    const [error  , setError]=useState('')

    const isFetchRef = useRef(false)
    const isRoom = useRef(false)

    const navigate = useNavigate()

    const handleDashboard = async()=>{
        try{
            const response  = await axios.get('http://localhost:3000/api/users/Dashboard')
            if(!response.ok)
                throw new Error('Could not SignUp')
            const data=response.data;
            if(data.error)
                throw new Error(error.message)
            setUserList(data.contacts)
            setMyRooms(data.myRooms)
            setJoinedRooms(data.joinedRooms)
        }catch(error){
            setError(error.message)
        }
    }
    useEffect(()=>{
        if(!isFetchRef.current){
            isFetchRef.current = true
            handleDashboard()
        }
    },[])

    const handleGetMsg=async(id)=>{
        try{
            const response = await axios.get(`http://localhost:3000/api/message/get/${id}`)
            if(!response.ok)
                throw new Error('Error in fetching chats!')
            const data= await response.data;
            if(data.error)  
                throw new Error(error.message)
            setMessages(data.data)
            isRoom.current=false
        }catch(error){
            setError(error.message)
        }
    }

    const handleSendMsg=async(id , msg)=>{
        try{
            const response = await axios.post(`http://localhost:3000/api/message/send/${id}`,{message:msg})
            if(!response.ok)
                throw new Error('Failed to send message')
            const data=await response.data
            if(data.error)
                throw new Error(error.message)
        }catch(error){
            setError(error.message)
        }
    }

    const handleCreateRoom=async(newRoom)=>{
        try{
            const response = await axios.post(`http://localhost:3000/api/room/create`,{name:newRoom})
            if(!response.ok)
                throw new Error('Failed to send message')
            const data=await response.data
            if(data.error)
                throw new Error(error.message)
            alert('New Room Created Successfully')
        }catch(error){
            setError(error.message)
        }
    }

    const handleJoinRoom=async(roomId)=>{
        try{
            const response = await axios.post(`http://localhost:3000/api/room/${roomId}/join`,{message:msg})
            if(!response.ok)
                throw new Error('Failed to send message')
            const data=await response.data
            if(data.error)
                throw new Error(error.message)
            handleRoomMsg()
        }catch(error){
            setError(error.message)
        }
    }

    const handleLeaveRoom=async(roomId)=>{
        try{
            const response = await axios.post(`http://localhost:3000/api/room/${roomId}/leave`)
            if(!response.ok)
                throw new Error('Failed to send message')
            const data=await response.data
            if(data.error)
                throw new Error(error.message)
        }catch(error){
            setError(error.message)
        }
    }

    const handleRoomSend=async(roomId , msg)=>{
        try{
            const response = await axios.post(`http://localhost:3000/api/room/${roomId}/send` , {message:msg})
            if(!response.ok)
                throw new Error('Failed to send message')
            const data=await response.data
            if(data.error)
                throw new Error(error.message)
        }catch(error){
            setError(error.message)
        }
    }

    const handleRoomMsg=async(roomId)=>{
        try{
            const response = await axios.get(`http://localhost:3000/api/room/${roomId}/join`)
            if(!response.ok)
                throw new Error('Failed to get message')
            const data=await response.data
            if(data.error)
                throw new Error(error.message)
            setMessages(data.data)
            isRoom.current=true;
        }catch(error){
            setError(error.message)
        }
    }

    const handleLogout=async()=>{
        try{
            const response = await axios.post('http://localhost:3000/api/users/Logout')
            if(response.status > 399 )
                throw new Error(error.message)
            const data=await response.data
            if(data.error)
                throw new Error(error.message)
            navigate('/api/users/Login' , {replace:true})
        }catch(error){
            setError(error.message)
        }
    }

    return(
        <ChatContextProvider 
        value={{isRoom,current,setCurrent,messages,setMessages,handleGetMsg,handleRoomMsg,handleLeaveRoom,handleSendMsg,handleRoomSend,handleJoinRoom,handleCreateRoom, handleLogout}}>
        <div className="flex" style={{flexDirection:'column' , margin:'30px'}}>
        <Navbar/>
        <div className="flex" style={{margin:'20px'}}>

        <div className="contact-wrapper" style={{width:'12vw' , height:'60vh' , border:'1px solid white' , padding:'10px 0px' , margin:'10px'}}>
            <LeftBar userList={userList}/>
        </div>

        <div className="chats-wrapper" style={{width:'30vw' , height:'60vh' , border:'1px solid white' ,padding:'10px' , margin:'10px'}}>
            <Chats/>
        </div>

        <div className="room-wrapper" style={{width:'20vw' , height:'60vh' , border:'1px solid white' , padding:'10px 0px' , margin:'10px'}}>
            <Rightbar myRooms={myRooms} joinedRooms={joinedRooms}/>
        </div>

        </div>
        <div style={{color:'red'}}>{error}</div>
        </div>
        </ChatContextProvider>
    )
}

export default Dashboard