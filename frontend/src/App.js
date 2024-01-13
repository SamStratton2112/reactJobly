import JoblyRoutes from './JoblyRoutes';
import NavBar from './NavBar';
import './App.css';
import { useEffect, useState } from 'react';
import JoblyContext from './JoblyContext';
import JoblyApi from './api';

function App() {
  const [user, setUser] = useState(null)
  const [jobs, setJobs] = useState([])
  const [companies, setCompanies] = useState([])

  useEffect(()=>{
    async function getCompanies(){
      let companies = await JoblyApi.getCompanies();
      setCompanies(companies);
    }
    async function getJobs(){
      let jobs = await JoblyApi.getJobs();
      setJobs(jobs)
    }
    getCompanies()
    getJobs()
  }, [])
  console.log(companies, jobs)

  return (
    <div className="App">
      <JoblyContext.Provider value ={{user, setUser, jobs, setJobs, companies, setCompanies}}>
        <NavBar/>
        <JoblyRoutes/>
      </JoblyContext.Provider>
    </div>
  );
}

export default App;
