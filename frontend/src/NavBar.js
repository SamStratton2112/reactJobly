import { NavLink } from "react-router-dom";
import { useContext } from "react";
import JoblyContext from "./JoblyContext";

const NavBar = () =>{
    const {userDetails} = useContext(JoblyContext)
    return(
        <div >
            {userDetails.username === ''? 
            <nav>
                <NavLink exact to="/">Home</NavLink>
                <NavLink exact to="/login">Login</NavLink>
                <NavLink exact to="/signup">Register</NavLink>
            </nav>
            :
            <nav>
                <NavLink exact to="/">Home</NavLink>
                <NavLink exact to={`/users/${userDetails.username}`}>{userDetails.username}</NavLink>
                <NavLink exact to="/companies">Companies</NavLink>
                <NavLink exact to="/jobs">Jobs</NavLink>
                <NavLink exact to={`/logout`}>Logout</NavLink>
            </nav>
        }
        </div>
    )
}

export default NavBar;