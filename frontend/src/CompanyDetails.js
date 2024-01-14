import JoblyApi from "./api";
import {useEffect , useState} from 'react';
import CompanyJobs from "./CompanyJobs";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import JoblyContext from "./JoblyContext";

// destructure company obj from parent props 
const CompanyDetails = ({company}) =>{
    // initialize state jobs and setJobs
    // const {token} = useContext(JoblyContext)
    // const nav = useNavigate()
    // if(token === undefined){
    //     alert('NOT AUTHORIZED')
    //     nav('/')
    // }
    const [jobs, setJobs] = useState([])
    useEffect(()=>{
        // use JoblyApi request to get company details which includes jobs
        async function getCompany(){
            let jobRes = await JoblyApi.getCompany(company.handle);
            console.log(jobRes.jobs)
            setJobs(jobRes.jobs)
        }
        // execute function
        getCompany()
        // only on first render 
    },[company.handle])

    return(
        <div>
            <div style={{textAlign: 'left', margin: '20px'}}>
                <h3>{company.name}</h3>
                <p>{company.description}</p>
                <p>Total Employees: {company.numEmployees}</p>
            </div>
            <div>
                {/* pass jobs to company jobs as props */}
                <CompanyJobs jobs={jobs}/>
            </div>
        </div>
    )
}

export default CompanyDetails;

