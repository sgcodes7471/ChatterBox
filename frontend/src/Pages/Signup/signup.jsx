import { useState } from "react"
import {Link} from 'react-router-dom'
import PassVisiblility from "../../Components/passVisibilty.jsx"

const Signup  = ()=>{
    
    const [username , setUsername] = useState('')
    const [password , setPassword]=useState('')
    const [confPassword,setConfPassword]=useState('')
    const [loading , setLoading] = useState(false)
    const [error , setError]=useState('')
    const [passVisible , setPassVisible] = useState(false)
    
    const handlePost=()=>{
        try{
            
        }catch(error){
            setError(`Error!${error.message}`)
        }
    }
    
    return(<>
        <div style={{height:'100vh' , width:'100vw' }}>
        <h3 style={{textAlign:"center"}}>Signup Form</h3>
        <div>
        <form onSubmit={(e)=>{
            e.preventDefault()
            handlePost()
        }} >
        <input className='input-field' type="text" placeholder="Enter your username" onChange={(e)=>{setUsername(e.target.value)}}/>
        <p>
        <input style={{margin:'4px'}} type="radio" name="gender"/>Male
        <input style={{margin:'4px'}} type="radio" name="gender"/>Female
        <input style={{margin:'4px'}} type="radio" name="gender"/>Custom
        </p>
        <PassVisiblility placeholder={'Enter your Password'} setPassword={setPassword} setPassVisible={setPassVisible} passVisible={passVisible}/>
        <input className='input-field' type="password" placeholder="Confirm your Password" onChange={(e)=>{setConfPassword(e.target.value)}}/>
        <input type="submit" style={{display:"block" , marginTop:'20px'}}  value='Signup' disabled={loading?true:false}/>
        <div style={{textAlign:"center" , color:'red'}}>{error}</div>
        <Link to='/Login' >Already have an account?</Link>
        </form>
        </div>
        </div>
        </>)
    }
    export default Signup