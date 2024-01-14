import JoblyApi from "./api";
import {useEffect , useState} from 'react';
import CompanyJobs from "./CompanyJobs";

const CompanyDetails = ({company}) =>{
    const [jobs, setJobs] = useState([])
    useEffect(()=>{
        async function getCompany(){
            let jobRes = await JoblyApi.getCompany(company.handle);
            console.log(jobRes.jobs)
            setJobs(jobRes.jobs)
        }
        getCompany()
    },[])

    return(
        <div>
            <div style={{textAlign: 'left', margin: '20px'}}>
                <h3>{company.name}</h3>
                <p>{company.description}</p>
                <p>Total Employees: {company.numEmployees}</p>
            </div>
            <div>
                <CompanyJobs jobs={jobs}/>
            </div>
        </div>
    )
}

export default CompanyDetails;

