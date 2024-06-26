import { useContext, useState } from "react"
import Profilebox from "./profilebox.jsx"
import { ChatContext } from "../Context/chatContext.js"

const Rightbar = ({myRooms , joinedRooms})=>{
    const [newRoom , setNewRoom] = useState(null)

    const {handleCreateRoom , handleRoomMsg , handleLeaveRoom, isRoom , current , setCurrent }=useContext(ChatContext)
   
    return(
        <div style={{display:'flex' , flexDirection:'column' }}>
        <div style={{display:'flex'}}> 

            <div className="myroom-wrapper" style={{padding:'5px' , width:'50%'}}>
                <p style={{fontWeight:"bold" , textAlign:'center'}}>My Rooms</p>
                {myRooms.map((room , index)=>{
                    return(
                    <div key={index} className="flex"
                    style={{justifyContent:'left' , padding:'5px' , backgroundColor:current._id===user._id?'rgb(0, 135, 0)':'transparent'}}
                    onClick={()=>{
                        setCurrent(room)
                        handleRoomMsg(room._id)
                        isRoom.current=true
                    }}>
                    <Profilebox profilepic={room.profile} name={room.name} />
                    </div>
                    )
                })}
            </div >
                <hr style={{height:'50vh' , margin:'0px'}}/>
            <div className="joinedroom-wrapper" style={{padding:'5px' , width:'50%'}}>
                <p style={{fontWeight:"bold" , textAlign:'center'}} >Joined Rooms</p>
                {joinedRooms.map((room , index)=>{
                    return(
                    <div key={index} className="flex" 
                    style={{justifyContent:'left' , padding:'5px' , backgroundColor:current._id===user._id?'rgb(0, 135, 0)':'transparent'}} 
                    onClick={()=>{
                        setCurrent(room)
                        handleRoomMsg(room._id)
                        isRoom.current=true
                    }} >
                    <Profilebox profilepic={room.profile} name={room.name} />
                    <button style={{backgroundColor:'rgb(250 , 0 , 0)' , border:'none' , borderRadius:'10px'  }} onClick={()=>{handleLeaveRoom(room._id)}}>Leave</button>
                    </div>
                    )
                })}
            </div>

        </div>
        <div className="flex" style={{flexDirection:'column'}}>
            <input className="input-field" style={{width:'150px'}} type="text" placeholder="New Room Name" onChange={(e)=>{setNewRoom(e.target.value)}}/>
            <button className="new-room-btn" disabled={(!setNewRoom)?true:false} onSubmit={()=>{handleCreateRoom(newRoom)}}>Create New Room</button>
        </div>
        </div>
    )
}
export default Rightbar