import { useEffect, useRef, useState } from "react"
import Navbar from "../../Components/navbar.jsx"
import Rightbar from "../../Components/rightbar.jsx"
import Chats from "../../Components/chats.jsx"
import Profilebox from "../../Components/profilebox.jsx"
import group from '../../assets/group.svg'

const Dashboard = ()=>{
    const [userList , setUserList ] = useState([{"profile":"https://avatar.iran.liara.run/public/boy?username:Monu" , "username":"Mohan Singh" , "_id":"123456789"},{"profile":"https://avatar.iran.liara.run/public/girl" , "username":"Mohan Rathore" , "_id":"123456788"}, {"profile":"https://avatar.iran.liara.run/public/boy" , "username":"Mohan Rathore" , "_id":"123456787"}])
    const [myRooms , setMyRooms]= useState([{"profile":group, "name":'Laude BC' , "_id":'09876544'}])
    const [joinedRooms , setJoinedRooms]= useState([{"profile":group, "name":'Hatt BC' , "_id":'09876543'}])
 
    const [current , setCurrent] = useState({})
    const [error  , setError]=useState('')
    const isFetchRef = useRef(false)

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

    return(
        <>
        <div className="flex" style={{flexDirection:'column' , margin:'30px'}}>
        <Navbar/>
        <div className="flex" style={{margin:'20px'}}>

        <div className="contact-wrapper" style={{width:'12vw' , height:'60vh' , border:'1px solid white' , padding:'10px 0px' , margin:'10px'}}>
            {userList.map((user,index)=>{
                return(
                <div key={index} className="flex" style={{justifyContent:'left', cursor:'pointer' , padding:'5px' , backgroundColor:current._id===user._id?'rgb(0, 135, 0)':'transparent'}} 
                onClick={()=>{
                    setCurrent(user)
                    handleGetMsg(user._id)
                    }}>
                    <Profilebox profilepic={user.profile} name={user.username}/>
                </div>
                )
            })}
        </div>

        <div className="chats-wrapper" style={{width:'30vw' , height:'60vh' , border:'1px solid white' ,padding:'10px' , margin:'10px'}}>
            <Chats profilepic={current.profile} name={current.name} message={current.message || []}/>
        </div>

        <div className="room-wrapper" style={{width:'20vw' , height:'60vh' , border:'1px solid white' , padding:'10px 0px' , margin:'10px'}}>
            <Rightbar myRooms={myRooms} joinedRooms={joinedRooms}/>
        </div>

        </div>
        <div style={{color:'red'}}>{error}</div>
        </div>
        </>
    )
}

export default Dashboard