import JoblyContext from "./JoblyContext";
import { useContext } from "react";
import {useNavigate} from 'react-router-dom'
import JoblyApi from "./api";

const Logout = ()=>{
    const {setUser, user, setToken, setLoggedIn} = useContext(JoblyContext)
    const nav = useNavigate()
    const logout = () =>{
        // reset api token 
        JoblyApi.token=''
        // clear storage
        localStorage.clear()
        // set state
        setLoggedIn(false)
        // clear token state
        setToken('')
        // clear user state 
        setUser({username: '', 
        password: ''})
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