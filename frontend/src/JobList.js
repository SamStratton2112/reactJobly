import { useContext } from "react";
import JoblyContext from "./JoblyContext";
import JobCard from './JobCard'
// import { useNavigate } from "react-router-dom";

const JobsList = () =>{
    // get Jobs and token from context 
    const {jobs, token} = useContext(JoblyContext);
    // const nav = useNavigate()
    // if(token === undefined){
    //     alert('NOT AUTHORIZED')
    //     nav('/')
    // }

    return(
        <div>
            {/* create JobCard for each job */}
            {jobs.map(job=>(
                <div style={{border: '5px black solid', margin: '10px'}}><JobCard job={job}/></div>
            ))}
        </div>
    )
}

export default JobsList;