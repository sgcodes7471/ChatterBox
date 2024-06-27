import { useContext, useState } from 'react'
import search from '../assets/search.svg'
import { ChatContext } from '../Context/chatContext'

const Navbar = ()=>{
    const {handleLogout} = useContext(ChatContext)
    const [searchWord , setSearchWord]  = useState()
    const handleSearch=()=>{

    }
    return(
        <div style={{display:'flex' }}>
            <div>
                <button onClick={()=>{
                    let confirm  = confirm('You want to LogOut?')
                    if(confirm){
                        handleLogout()
                    }
                }} style={{backgroundColor:'white', margin:'0px 20px' , borderRadius:'20px', fontWeight:'bold' , padding:'5px' , border:'none' , color:'#242424'}}>Logout</button>
            </div>
            <div className='flex'>
                <input className='input-field' type="text" placeholder="Search for users of rooms..." onChange={(e)=>{setSearchWord(e.target.value)}}/>
                <span onClick={handleSearch}><img className='icons-svg' src={search}/></span>
            </div>
        </div>
    )
}

export default Navbar