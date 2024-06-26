import { useEffect, useRef, useState } from "react"
import Navbar from "../../Components/navbar.jsx"
import Rightbar from "../../Components/rightbar.jsx"
import Chats from "../../Components/chats.jsx"
import Profilebox from "../../Components/profilebox.jsx"
import group from '../../assets/group.svg'
import { ChatContextProvider } from "../../Context/chatContext.js"
import LeftBar from "../../Components/leftbar.js"

const Dashboard = ()=>{
    const [userList , setUserList ] = useState([{"profile":"https://avatar.iran.liara.run/public/boy?username:Monu" , "username":"Mohan Singh" , "_id":"123456789"},{"profile":"https://avatar.iran.liara.run/public/girl" , "username":"Mohan Rathore" , "_id":"123456788"}, {"profile":"https://avatar.iran.liara.run/public/boy" , "username":"Mohan Rathore" , "_id":"123456787"}])
    const [myRooms , setMyRooms]= useState([{"profile":group, "name":'Laude BC' , "_id":'09876544'}])
    const [joinedRooms , setJoinedRooms]= useState([{"profile":group, "name":'Hatt BC' , "_id":'09876543'}])
    const [messages , setMessages]=useState([]);

    const [current , setCurrent] = useState({})
    const [error  , setError]=useState('')

    const isFetchRef = useRef(false)
    const isRoom = useRef(false)

    const handleDashboard = ()=>{
        try{

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

    const handleGetMsg=(id)=>{
        try{

        }catch(error){
            setError(error.message)
        }
    }

    const handleSendMsg=(id , msg)=>{
        try{

        }catch(error){
            setError(error.message)
        }
    }

    const handleCreateRoom=(newRoom)=>{
        try{

        }catch(error){
            setError(error.message)
        }
    }

    const handleJoinRoom=(roomId)=>{
        try{

        }catch(error){
            setError(error.message)
        }
    }

    const handleLeaveRoom=()=>{
        try{

        }catch(error){
            setError(error.message)
        }
    }

    const handleRoomSend=(roomId , msg)=>{
        try{

        }catch(error){
            setError(error.message)
        }
    }

    const handleRoomMsg=(roomId)=>{
        try{

        }catch(error){
            setError(error.message)
        }
    }

    return(
        <ChatContextProvider 
        value={{isRoom,current,setCurrent,messages,setMessages,handleGetMsg,handleRoomMsg,handleLeaveRoom,handleSendMsg,handleRoomSend,handleJoinRoom,handleCreateRoom}}>
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