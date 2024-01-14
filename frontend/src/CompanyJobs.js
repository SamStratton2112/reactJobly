import JobCard from "./JobCard";
// destructure jobs array of objects from props
const CompanyJobs = ({jobs})=>{
    return(
        <div>JOBS
        {jobs.map(j=><div style={{border: '5px solid black', margin: '10px'}}><JobCard job={j}/></div>)}
        </div>
    )
}

export default CompanyJobs;