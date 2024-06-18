import Profilebox from "./profilebox.jsx"
import send from '../assets/send.svg'
const Chats = ({profilepic , name , message})=>{
    return(
        <>
            <div>
                <Profilebox profilepic={profilepic} name={name}/>
            </div>
            <div>
                {message.map((msg, index)=>{
                    return(
                        <div key={index}>
                        {/* <p>{msg.username}</p>
                        <p>{msg.message}</p> */}
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