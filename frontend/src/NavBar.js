import { NavLink } from "react-router-dom";
// import { useContext } from "react";
// import JoblyContext from "./JoblyContext";

const NavBar = () =>{
    // const {user} = useContext(JoblyContext)
    let loggedIn = true
    return(
        <div>
            {loggedIn? 
            <nav>
                <NavLink exact to="/">Home</NavLink>
                <NavLink exact to="/companies">Companies</NavLink>
                <NavLink exact to="/jobs">Jobs</NavLink>
                {/* <NavLink exact to=`/logout${user.name}`>Logout</NavLink> */}
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