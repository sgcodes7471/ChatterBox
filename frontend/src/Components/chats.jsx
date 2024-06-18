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
                        <p>{msg.username}</p>
                        <p>{msg.message}</p>
                        </div>
                    )
                })}
            </div>
            <div>
                <input placeholder="send new message" />
                <p><img src={send}/></p>
            </div>
        </>
    )
}
export default Chats