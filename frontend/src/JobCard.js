import { useContext} from "react"
import JoblyContext from "./JoblyContext"
import { useNavigate } from "react-router-dom"

const JobCard = ({job})=>{
    const nav = useNavigate()
    const {userDetails, setCurrJobId} = useContext(JoblyContext)
    
    const handleApply = (id)=>{
        setCurrJobId(id)
        nav('/')
        alert('Applications successful!')
    }
    let userApps = userDetails.applications

    return(
        <div>
            <p>{job.title}</p>
            <p>Salary: {job.salary}</p>
            <p>Equity: {job.equity}</p>
            {userApps.includes(job.id)?
            null
            :
            <button onClick={()=>handleApply(job.id)}>Apply</button>}
        </div>
    )
}
export default JobCard;