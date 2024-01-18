const JobCard = ({job})=>{
    const handleApply = ()=>{
        
    }
    
    return(
        <div>
            <p>{job.title}</p>
            <p>Salary: {job.salary}</p>
            <p>Equity: {job.equity}</p>
            <button onClick={handleApply}>Apply</button>
        </div>
    )
}
export default JobCard;