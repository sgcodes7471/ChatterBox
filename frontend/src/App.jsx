import { Router , BrowserRouter , Routes} from 'react-router-dom'
import Login from './Pages/Login/login'
import Signup from './Pages/Signup/signup'
import Dashboard from './Pages/Dashboard/dashboard'

function App() {
  
return(
    <>
    <BrowserRouter>
        <Router>
            <Routes exact path='/Login' element={<Login/>}/>
            <Routes exact path='/Signup' element={<Signup/>}/>
            <Routes exact path='/Dashboard' element={<Dashboard/>}/>
        </Router>
    </BrowserRouter>
    </>
)
}

export default App
