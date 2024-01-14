import JoblyContext from "./JoblyContext";
import { useContext } from "react";
import {useNavigate} from 'react-router-dom'
import JoblyApi from "./api";

const Logout = ()=>{
    const {setUser, user, setToken} = useContext(JoblyContext)
    const nav = useNavigate()
    const logout = () =>{
        JoblyApi.token=''
        localStorage.clear()
        setToken('')
        setUser({username: '', 
        password: '' })
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