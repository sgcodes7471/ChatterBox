const Profilebox = ({profilepic , name })=>{
    return(
        <>
            <div ><img style={{border:'1px solid white' , borderRadius:'1000px' , height:'auto'}} src={profilepic}/></div>
            <div style={{fontWeight:'bold' , margin:'0px 5px'  , fontSize:'1rem'}}>{name}</div>
        </>
    )
}
export default Profilebox