import { useContext } from "react";
import JoblyContext from "./JoblyContext";
import JobCard from './JobCard'

const JobsList = () =>{
    // get Jobs from context 
    const {jobs} = useContext(JoblyContext);
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