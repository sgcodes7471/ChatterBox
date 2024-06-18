import { useState } from "react"

const Chats = ({profilepic , name , message})=>{
    return(
        <div>
            <div>
                <div>{profilepic}</div>
                <div>{name}</div>
            </div>
            <div>
                {message.map(msg=>{
                    return(
                        <div>
                        <p>{msg.username}</p>
                        <p>{msg.message}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
export default Chats