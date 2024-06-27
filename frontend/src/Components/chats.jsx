import Profilebox from "./profilebox.jsx"
import send from '../assets/send.svg'
import { useContext } from "react"
import { ChatContext } from "../Context/chatContext.js"
const Chats = ()=>{
    const {current , messages , handleSendMsg , handleRoomSend , isRoom} = useContext(ChatContext)
    return(
        <>
            <div>
                <Profilebox profilepic={current.profilepic} name={current.name}/>
            </div>
            <div>
                {messages.map((msg, index)=>{
                    return(
                        <div key={index}>
                            {/* hardcoding for now */}
                            <p>Username</p>
                            <p>Aand mand ka tola!</p>
                        {/* <p>{msg.username}</p> */}
                        {/* <p>{msg.message}</p> */}
                        </div>
                    )
                })}
            </div>
            <div className="flex">
                <input className="input-field" placeholder="send new message" />
                <p style={{padding:'4px'}}><img style={{width:'20px' , transform:'rotateZ(-60deg)' }} src={send}/></p>
            </div>
        </>
    )
}
export default Chats