const Profilebox = ({profilepic , id , name })=>{
    return(
        <div>
            <div><img src={profilepic}/></div>
            <div>{name}</div>
        </div>
    )
}
export default Profilebox