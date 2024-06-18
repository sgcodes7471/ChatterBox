const Profilebox = ({profilepic , name })=>{
    return(
        <>
            <div><img src={profilepic}/></div>
            <div style={{fontWeight:'bold' , margin:'0px 5px'  , fontSize:'1rem'}}>{name}</div>
        </>
    )
}
export default Profilebox