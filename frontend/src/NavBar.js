import { NavLink } from "react-router-dom";
import { useContext } from "react";
import JoblyContext from "./JoblyContext";

const NavBar = () =>{
    const {loggedIn, user} = useContext(JoblyContext)
    return(
        <div >
            {loggedIn !== true? 
            <nav>
                <NavLink exact to="/">Home</NavLink>
                <NavLink exact to="/login">Login</NavLink>
                <NavLink exact to="/signup">Register</NavLink>
            </nav>
            :
            <nav>
                <NavLink exact to="/">Home</NavLink>
                <NavLink exact to={`/profile`}>{user.username}</NavLink>
                <NavLink exact to="/companies">Companies</NavLink>
                <NavLink exact to="/jobs">Jobs</NavLink>
                <NavLink exact to={`/logout`}>Logout</NavLink>
            </nav>
        }
        </div>
    )
}

export default NavBar;