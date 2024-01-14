import { useContext, useEffect } from "react";
import JoblyContext from "./JoblyContext";
import JobCard from './JobCard'
import { useNavigate } from "react-router-dom";

const JobsList = () =>{
    // get Jobs and token from context 
    const nav=useNavigate()
    const {jobs, loggedIn} = useContext(JoblyContext);
    useEffect(()=>{
        if(!loggedIn){
            alert('Please log in to see jobs')
            nav('/')
        }
    },[loggedIn])

    return(
        <div>
            {/* create JobCard for each job */}
            {jobs.map(job=>(
                <div style={{border: '5px black solid', margin: '10px'}}><JobCard key={job} job={job}/></div>
            ))}
        </div>
    )
}

export default JobsList;