import { useState } from "react"
import PassVisiblility from "../../Components/passVisibilty.jsx"
import {Link, useNavigate} from 'react-router-dom'
import axios from 'axios'
const Login  = ()=>{
    
    const [username , setUsername] = useState('')
    const [password , setPassword]=useState('')
    const [loading , setLoading] = useState(false)
    const [error , setError]=useState('')
    const [passVisible , setPassVisible] = useState(false)
    
    const navigate = useNavigate()

    const handlePost=async()=>{
        try{
            setLoading(true)
            const response = await axios.post('http://localhost:3000/api/users/Login' , {username , password})
            if(response.status > 399 )
                throw new Error(error.message)
            const data=await response.data
            if(data.error)
                throw new Error(error.message)
            setLoading(false)
            navigate('/api/users/Dashboard' , {replace:true})
        }catch(error){
            setError(`Error!${error.message}`)
            setLoading(false)
        }
    }
    
    return(<>
        <div style={{height:'100vh' , width:'100vw'}}>
        <h3 style={{textAlign:"center"}}>Login Form</h3>
        <div>
        <form onSubmit={(e)=>{
            e.preventDefault()
            handlePost()
        }}>
        <input className='input-field' type="text" placeholder="Enter your username" onChange={(e)=>{setUsername(e.target.value)}}/>
        <PassVisiblility placeholder={'Enter your Password'} setPassword={setPassword} setPassVisible={setPassVisible} passVisible={passVisible}/>
        <input type="submit" style={{display:"block"}} value='LogIn' disabled={loading?true:false}/>
        <div style={{textAlign:"center" , color:'red'}}>{error}</div>
        <Link to='/Signup' style={{textAlign:"center"}}>Do not have a account?</Link>
        </form>
        </div>
        </div>
        </>)
    }
    export default Login