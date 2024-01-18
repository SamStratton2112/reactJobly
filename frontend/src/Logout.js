import JoblyContext from "./JoblyContext";
import { useContext } from "react";
import {useNavigate} from 'react-router-dom'
import JoblyApi from "./api";

const Logout = ()=>{
    const {setUser, user, setUserDetails, setToken, setLoggedIn} = useContext(JoblyContext)
    const nav = useNavigate()
    const logout = () =>{
        // reset api token 
        JoblyApi.token= null
        // clear storage
        localStorage.clear()
        // clear user 
        setToken(null)
        setLoggedIn(false)
        setUser({username: '', 
        password: ''})
        setUserDetails({username: '', 
        password: '', firstName: '', lastName: '', email: ''})
        // reditect home with logout navbar
        nav('/')
    }
    return(
        <div>
            <h3>Logout {user.username}?</h3>
            <button onClick={logout}>Logout</button>
        </div>
    )
}

export default Logout;