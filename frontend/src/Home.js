import { useContext } from "react";
import JoblyContext from "./JoblyContext";

const Home = () =>{
    const {user, token} = useContext(JoblyContext);
    return(
        <div>
            {token!==undefined ?<div>Welcom back {user.username}!</div> : <div>Welcome to Jobly!</div>}
        </div>
    )
}
export default Home;