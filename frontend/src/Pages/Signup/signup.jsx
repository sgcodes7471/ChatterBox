import { useState, useTransition } from "react"
import {Link, useNavigate} from 'react-router-dom'
import PassVisiblility from "../../Components/passVisibilty.jsx"
import axios from 'axios'

const Signup  = ()=>{
    
    const [username , setUsername] = useState('')
    const [email , setEmail]=useState('')
    const [gender , setGender]=useState('')
    const [password , setPassword]=useState('')
    const [confPassword,setConfPassword]=useState('')
    const [loading , setLoading] = useState(false)
    const [error , setError]=useState('')
    const [passVisible , setPassVisible] = useState(false)
    
    const navigate = useNavigate()

    const handlePost=async()=>{
        try{
            setLoading(true)
            const response = await axios.post('http://localhost:3000/api/users/Signup' ,
                 {username, password, email , password , gender})
            if(response.status > 399 )
                throw new Error(error.message)
            const data=await response.data
            if(data.error)
                throw new Error(error.message)
            setLoading(false)
            alert('Account Successfully created! Go LogIn')
            navigate('/api/users/Signup' , {replace:true})
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
        <input className='input-field' type="text" placeholder="Enter your Email" onChange={(e)=>{setEmail(e.target.value)}}/>
        <p>
        <input style={{margin:'4px'}} type="radio" name="gender" onClick={()=>{setGender('Male')}}/>Male
        <input style={{margin:'4px'}} type="radio" name="gender" onClick={()=>{setGender('Female')}}/>Female
        <input style={{margin:'4px'}} type="radio" name="gender" onClick={()=>{setGender('Clown')}}/>Custom
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