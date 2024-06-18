import { useState } from "react"
import Profilebox from "./profilebox.jsx"

const Rightbar = ({myRooms , joinedRooms})=>{
    const [newRoom , setNewRoom] = useState(null)
    const handleCreateRoom=()=>{
        
    }
    return(
        <div>
        <div>
            <div>
                <p>My Rooms</p>
                {myRooms.map(room=>{
                    <Profilebox profilepic='' id={room._id} name={room.name} />
                })}
            </div>
            <div>
                <p>Joined Rooms</p>
            {joinedRooms.map(room=>{
                    <Profilebox profilepic='' id={room._id} name={room.name} />
                })}
            </div>
        </div>
        <div>
            <input type="text" placeholder="New Room Name" onChange={(e)=>{setNewRoom(e.target.value)}}/>
            <button disabled={(!setNewRoom)?true:false} onSubmit={handleCreateRoom}>Create New Room</button>
        </div>
        </div>
    )
}
export default Rightbar