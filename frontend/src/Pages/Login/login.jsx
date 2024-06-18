import { useState } from "react"
import passVisiblility from "../../Components/passVisibilty.jsx"
import {Link} from 'react-router-dom'
const Login  = ()=>{
    
    const [username , setUsername] = useState('')
    const [password , setPassword]=useState('')
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
        <div>
        <div>Login Form</div>
        <div>
        <form onSubmit={(e)=>{
            e.preventDefault()
            handlePost()
        }}>
        <input type="text" placeholder="Enter your username" onChange={(e)=>{setUsername(e.target.value)}}/>
        <passVisiblility placeholder={'Enter your Password'} setPassword={setPassword} setPassVisible={setPassVisible} passVisible={passVisible}/>
        <input type="submit" value='LogIn' disabled={loading?true:false}/>
        </form>
        <div>{error}</div>
        </div>
        <Link to='api/user/Signup'>Do not have a account?</Link>
        </div>
        </>)
    }
    export default Login