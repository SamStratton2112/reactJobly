import { NavLink } from "react-router-dom";
import { useContext } from "react";
import JoblyContext from "./JoblyContext";

const NavBar = () =>{
    const {user} = useContext(JoblyContext)
    let loggedIn;
    user.username !== ''? loggedIn=true: loggedIn=false;
    return(
        <div >
            {loggedIn? 
            <nav>
                <NavLink exact to="/">Home</NavLink>
                <NavLink exact to="/companies">Companies</NavLink>
                <NavLink exact to="/jobs">Jobs</NavLink>
                <NavLink exact to={`/logout/${user.username}`}>Logout{user.username} </NavLink>
            </nav>
            :
            <nav>
                <NavLink exact to="/">Home</NavLink>
                <NavLink exact to="/login">Login</NavLink>
                <NavLink exact to="/signup">Register</NavLink>
            </nav>
        }
        </div>
    )
}

export default NavBar;