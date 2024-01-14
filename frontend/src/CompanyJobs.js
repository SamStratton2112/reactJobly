import JobCard from "./JobCard";

const CompanyJobs = ({jobs})=>{
    let jobsArr=[]
    jobs.map(j=>jobsArr.push(j))
    return(
        <div>JOBS
        {jobsArr.map(j=><div style={{border: '5px solid black', margin: '10px'}}><JobCard job={j}/></div>)}
        </div>
    )
}

export default CompanyJobs;