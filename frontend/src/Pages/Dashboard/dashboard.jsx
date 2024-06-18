import { useState } from "react"
import Navbar from "../../Components/navbar"
import Leftbar from "../../Components/leftbar"
import Rightbar from "../../Components/rightbar"
import Chats from "../../Components/chats"

const Dashboard = ()=>{
    const [userList , setUserList ] = useState([])
    const [myRooms , setMyRooms]= useState([])
    const [joinedRooms , setJoinedRooms]=useState([])
    return(
        <>
        <Navbar/>
        <div>
            <Leftbar userList={userList}/>
        </div>
        <div>
            <Chats />
        </div>
        <div>
            <Rightbar myRooms={myRooms} joinedRooms={joinedRooms}/>
        </div>
        </>
    )
}

export default Dashboard