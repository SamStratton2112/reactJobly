import JoblyRoutes from './JoblyRoutes';
import NavBar from './NavBar';
import './App.css';
import { useEffect, useState } from 'react';
import JoblyContext from './JoblyContext';
import JoblyApi from './api';

function App() {
  const [user, setUser] = useState({username: '', 
  password: '', loggedIn: false})
  // on initial render token will be null
  const [token, setToken] = useState()
  const [jobs, setJobs] = useState([])
  const [companies, setCompanies] = useState([])

  // whenever a user logs in request a token and store it 
  useEffect(()=>{
    async function getUserToken(){
      let res = await JoblyApi.getUserToken(user.username,user.password, 'post')
      localStorage.setItem('token', JSON.stringify(res))
      setToken('token', res)
    }
    async function registerUserAndGetToken(){
      let res = await JoblyApi.registerUserAndGetToken(user.username,user.password, user.firstName, user.lastName, user.email, 'post')
      localStorage.setItem('token', JSON.stringify(res))
      setToken('token', res)
    }
    // if there is no one logged in and the token is empty, get a token and update the value of token triggering the below use effect
    if(user.loggedIn !== false && token!== ''){
      // if the user does not have username property getUserToken(), else registerUserAndGetToken()
      if(user.firstName){
        registerUserAndGetToken()
      }else{
        getUserToken()
      }
    }
    }, [user, token])

  useEffect(()=>{
    //  get companies and jobs if there is a token
    async function getCompanies(){
      let companies = await JoblyApi.getCompanies();
      setCompanies(companies);
    }
    async function getJobs(){
      let jobs = await JoblyApi.getJobs();
      setJobs(jobs)
    }
    //get companies and jobs if token is not empty
    if(token !== ''){
      getCompanies()
      getJobs()
    }
  },[token])
  console.log(token)
  console.log(localStorage)

  return (
    <div className="App">
      <JoblyContext.Provider value ={{user, setUser, jobs, setJobs, companies, setCompanies, setToken}}>
        <NavBar/>
        <JoblyRoutes companies={companies}/>
      </JoblyContext.Provider>
    </div>
  );
}

export default App;