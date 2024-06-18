import { useState } from 'react'
import search from '../assets/search.svg'

const Navbar = ()=>{
    const [searchWord , setSearchWord]  = useState()
    const handleSearch=()=>{

    }
    const handleLogout=()=>{

    }
    return(
        <div>
            <div>
                <input type="text" placeholder="Search for users of rooms..." onChange={(e)=>{setSearchWord(e.target.value)}}/>
                <p onClick={handleSearch}>{search}</p>
            </div>
            <div>
                <button onClick={()=>{
                    let confirm  = confirm('You want to LogOut?')
                    if(confirm){
                        handleLogout()
                    }
                }}>Logout</button>
            </div>
        </div>
    )
}

export default Navbar