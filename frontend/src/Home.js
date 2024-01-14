import { useContext } from "react";
import JoblyContext from "./JoblyContext";

const Home = () =>{
    const {user} = useContext(JoblyContext);
    console.log(user)
    return(
        <div>
            {user.loggedIn?<div>Welcom back {user.username}!</div> : <div>Welcome to Jobly!</div>}
        </div>
    )
}
export default Home;