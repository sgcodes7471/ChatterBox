import { Route , BrowserRouter , Routes} from 'react-router-dom'
import Login from './Pages/Login/login.jsx'
import Signup from './Pages/Signup/signup.jsx'
import Dashboard from './Pages/Dashboard/dashboard.jsx'

function App() {
  
return(

    <BrowserRouter>
        <Routes>
            <Route exact path='/Login' element={<Login/>}/>
            <Route exact path='/Signup' element={<Signup/>}/>
            <Route exact path='/Dashboard' element={<Dashboard/>}/>
        </Routes>
    </BrowserRouter>
)
}

export default App
