import { useContext } from "react"
import JoblyContext from "./JoblyContext"

const JobCard = ({job})=>{
    const {userDetails} = useContext(JoblyContext)
    const handleApply = ()=>{
        
    }
    let apps = userDetails.applications
    console.log(apps)
    for(let app of apps){
        if(app === job.id){
            console.log('TRUE', job.id, job.title)
            console.log(app)
        }
    }
    
    return(
        <div>
            <p>{job.title}</p>
            <p>Salary: {job.salary}</p>
            <p>Equity: {job.equity}</p>
            {apps.includes(job.id)?
            null
            :
            <button>Apply</button>}
        </div>
    )
}
export default JobCard;