import { Route , BrowserRouter , Routes} from 'react-router-dom'
import Login from './Pages/Login/login.jsx'
import Signup from './Pages/Signup/signup.jsx'
import Dashboard from './Pages/Dashboard/dashboard.jsx'

function App() {
  
return(

    <BrowserRouter>
        <Routes>
            <Route exact path='api/users/Login' element={<Login/>}/>
            <Route exact path='api/users/Signup' element={<Signup/>}/>
            <Route exact path='api/users/Dashboard' element={<Dashboard/>}/>
        </Routes>
    </BrowserRouter>
)
}

export default App
