import { useContext } from "react";
import JoblyContext from "./JoblyContext";
import JobCard from './JobCard'

const JobsList = () =>{
    const {jobs} = useContext(JoblyContext);
    return(
        <div>
            {jobs.map(job=>(
                <div style={{border: '5px black solid', margin: '10px'}}><JobCard job={job}/></div>
            ))}
        </div>
    )
}

export default JobsList;