import eye from '../assets/eye.svg'
import eyeSlash from '../assets/eyeSlash.svg'
const PassVisiblility = ({placeholder,setPassword , setPassVisible,  passVisible})=>{

    return(<>
    <p style={{display:'flex' , position:'relative'}}>
        <input className='input-field' style={{height:'17px' , width:'400px'}} type={passVisible?'type':'password'} placeholder={placeholder} onChange={(e)=>{setPassword(e.target.value)}}/>
        <span style={{margin:'2px', position:'absolute' , right:'10px', height:'min-content'}} onClick={()=>{setPassVisible(!passVisible)}}>
        {passVisible?(<img className='icons-svg' src={eye}/>):(<img className='icons-svg' src={eyeSlash}/>)}
        </span> 
        </p>
    </>)
}
export default PassVisiblility