import Profilebox from "./profilebox.jsx"
import { useContext } from "react"
import { ChatContext } from "../Context/chatContext.js"
const LeftBar=({userList})=>{

    const {current , isRoom ,setCurrent, handleGetMsg }=useContext(ChatContext)

    {userList.map((user,index)=>{
        return(
        <div key={index} className="flex" style={{justifyContent:'left', cursor:'pointer' , padding:'5px' , backgroundColor:current._id===user._id?'rgb(0, 135, 0)':'transparent'}} 
        onClick={()=>{
            setCurrent(user)
            isRoom.current=false
            handleGetMsg(user._id)
            }}>
            <Profilebox profilepic={user.profile} name={user.username}/>
        </div>
        )
    })}
}

export default LeftBar