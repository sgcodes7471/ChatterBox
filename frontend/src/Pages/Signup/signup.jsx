import { useState } from "react"
import passVisiblility from "../../Components/passVisibilty.jsx"

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
        <div>
        <div>Signup Form</div>
        <div>
        <form onSubmit={(e)=>{
            e.preventDefault()
            handlePost()
        }}>
        <input type="text" placeholder="Enter your username" onChange={(e)=>{setUsername(e.target.value)}}/>
        <p>
        <input type="radio" name="gender"/>Male
        <input type="radio" name="gender"/>Female
        </p>
        <passVisiblility placeholder={'Enter your Password'} setPassword={setPassword} setPassVisible={setPassVisible} passVisible={passVisible}/>
        <input type="password" placeholder="Confirm your Password" onChange={(e)=>{setConfPassword(e.target.value)}}/>
        <input type="submit" value='Signup' disabled={loading?true:false}/>
        </form>
        <div>{error}</div>
        </div>
        <Link to='api/user/Login'>Already have an account?</Link>
        </div>
        </>)
    }
    export default Signup