// import JoblyApi from "./api";
// import {useEffect, useState} from 'react';
// import JobCard from "./JobCard";


const CompanyDetails = ({company}) =>{
    // const [ jobs, setJobs] = useState('')
    return(
        <div>
            <div style={{textAlign: 'left', margin: '20px'}}>
                <h3>{company.name}</h3>
                <p>{company.description}</p>
                <p>Total Employees: {company.numEmployees}</p>
            </div>
            {/* <div>{jobs.map(j=><JobCard job={j}/>)}</div> */}
        </div>
    )
}

export default CompanyDetails;

// useEffect(()=>{
//     async function getCompanyJobs(){
//         let jobRes = await JoblyApi.getCompanyJobs(company.handle);
//         console.log(jobRes)
//         let jobsArr = Object.entries(jobRes)
//         console.log(jobsArr)
//         setJobs(jobsArr)
//         console.log(jobs)
//         return jobsArr
//     }
//     let js = getCompanyJobs(company.handle)
//     console.log(js)
//     setJobs(js)
// },[company.handle])
// console.log(jobs)