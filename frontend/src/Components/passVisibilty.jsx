import eye from '../assets/eye.svg'
import eyeSlash from '../assets/eyeSlash.svg'
const passVisiblility = ({placeholder,setPassword , setPassVisible,  passVisible})=>{

    return(<>
    <p>
        <input type={passVisible?'type':'password'} placeholder={placeholder} onChange={(e)=>{setPassword(e.target.value)}}/>
        <span onClick={()=>{setPassVisible(!passVisible)}}>
        {passVisible?(eye):(eyeSlash)}
        </span> 
        </p>
    </>)
}
export default passVisiblility