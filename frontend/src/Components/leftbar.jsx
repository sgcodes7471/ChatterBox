import Profilebox from "./profilebox.jsx"

const Leftbar = ({userList})=>{
    return(
        <div>
            {userList.map(user=>{
                return(<>
                    <Profilebox profilepic={user.profile} id={user._id} name={user.username}/>
                </>)
            })}
        </div>
    )
}
export default Leftbar