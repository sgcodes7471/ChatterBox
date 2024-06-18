import { useState } from "react"
import Profilebox from "./profilebox.jsx"

const Rightbar = ({myRooms , joinedRooms})=>{
    const [newRoom , setNewRoom] = useState(null)
    const [error , setError] = useState('')

    const handleCreateRoom=()=>{
        try{

        }catch(error){
            setError(error.message)
        }
    }
    return(
        <div style={{display:'flex' , flexDirection:'column' }}>
        <div style={{display:'flex'}}> 

            <div className="myroom-wrapper" style={{padding:'5px' , width:'50%'}}>
                <p style={{fontWeight:"bold" , textAlign:'center'}}>My Rooms</p>
                {myRooms.map((room)=>{
                    return(
                    <div className="flex" style={{justifyContent:'left' , padding:'5px'}}>
                    <Profilebox profilepic={room.profile} name={room.name} />
                    </div>
                    )
                })}
            </div >
                <hr style={{height:'50vh' , margin:'0px'}}/>
            <div className="joinedroom-wrapper" style={{padding:'5px' , width:'50%'}}>
                <p style={{fontWeight:"bold" , textAlign:'center'}} >Joined Rooms</p>
                {joinedRooms.map((room)=>{
                    return(
                    <div className="flex" style={{justifyContent:'left' , padding:'5px'}}>
                    <Profilebox profilepic={room.profile} name={room.name} />
                    </div>
                    )
                })}
            </div>

        </div>
        <div className="flex" style={{flexDirection:'column'}}>
            <input className="input-field" style={{width:'150px'}} type="text" placeholder="New Room Name" onChange={(e)=>{setNewRoom(e.target.value)}}/>
            <button className="new-room-btn" disabled={(!setNewRoom)?true:false} onSubmit={handleCreateRoom}>Create New Room</button>
        </div>
        </div>
    )
}
export default Rightbar