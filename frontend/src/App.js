import JoblyRoutes from './JoblyRoutes';
import NavBar from './NavBar';
import './App.css';
import { useEffect, useState } from 'react';
import JoblyContext from './JoblyContext';
import JoblyApi from './api';

function App() {
  const [user, setUser] = useState({username: '', 
  password: ''})
  const [token, setToken] = useState(null)
  const [jobs, setJobs] = useState([])
  const [companies, setCompanies] = useState([])

  useEffect(()=>{
    // on initial render get companies and jobs
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

  // whenever a user logs in request a token and store it 
  useEffect(()=>{
    async function getUserToken(){
      console.log(user.password)
      let res = await JoblyApi.getUserToken(user.username,user.password, 'post')
      setToken(res)
    }
    async function registerUserAndGetToken(){
      console.log(user.password)
      let res = await JoblyApi.registerUserAndGetToken(user.username,user.password, user.firstName, user.lastName, user.email, 'post')
      setToken(res)
    }
    
    // if user.firstName is in data register user
    user.firstName? registerUserAndGetToken(): getUserToken();
  }, [user])

  return (
    <div className="App">
      <JoblyContext.Provider value ={{user, setUser, jobs, setJobs, companies, setCompanies}}>
        <NavBar/>
        <JoblyRoutes companies={companies}/>
      </JoblyContext.Provider>
    </div>
  );
}

export default App;
