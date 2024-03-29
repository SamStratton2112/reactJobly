import JoblyRoutes from './JoblyRoutes';
import NavBar from './NavBar';
import './App.css';
import { useEffect, useState } from 'react';
import JoblyContext from './JoblyContext';
import JoblyApi from './api';

function App() {
  // move logged in out of current state so we can use it to determine if someone is looged in
  const [user, setUser] = useState({username: '', 
  password: ''})
  const [loggedIn, setLoggedIn] = useState(false);
  const [userDetails, setUserDetails] = useState({username: '', 
  password: '', firstName: '', lastName: '', email: ''})
  // on initial render token will be null
  const [token, setToken] = useState()
  const [jobs, setJobs] = useState([])
  const [companies, setCompanies] = useState([])
  const [firstRender, setFirstRender]= useState(true)
  const [update, needsUpdate] = useState(false)
  const [currJobId, setCurrJobId] = useState(null)
  const [apps, setApps] = useState(userDetails.applications)

  // ensure that request doesn't fire if it is the first render 
  useEffect(()=>{
    if(token === undefined){
      setFirstRender(false)
    }
  },[token])
  
  // whenever a user logs in or registers request a token and store it in JoblyApi.token
  useEffect(()=>{
    async function getUserToken(){
      let res = await JoblyApi.getUserToken(user.username,user.password, 'post')
      localStorage.setItem('token', JSON.stringify(res))
      console.log(res)
      setToken(res)
      setLoggedIn(true)
    }
    async function registerUserAndGetToken(){
      let res = await JoblyApi.registerUserAndGetToken(user.username,user.password, user.firstName, user.lastName, user.email, 'post')
      localStorage.setItem('token', JSON.stringify(res))
      setToken(res)
      setLoggedIn(true)
    }
    if(user.username !== ''){
      console.log('LOGIN USER', user)
      // if the user does not have username property getUserToken(), else registerUserAndGetToken()
      if(user.firstName!==''){
        getUserToken()
      }else{
        registerUserAndGetToken()
      }
    }
    }, [ user])

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
    async function getUser(){
      let res = await JoblyApi.getUser(user.username)
      console.log('getUser', res)
      setUserDetails(res)
      setApps(userDetails.apps)
    }
    //get companies and jobs if token is not empty
    if(loggedIn === true){
      getCompanies()
      getJobs()
      getUser()
    }
  },[loggedIn, user])

  // edit user 
  useEffect(()=>{
    async function updateUser(){
      let res = await JoblyApi.updateUser(userDetails.username, {firstName: userDetails.firstName, lastName: userDetails.lastName, email: userDetails.email})
      console.log('res', res)
    }
    if(update === true){
    // if(JoblyApi.token !==undefined && userDetails!== ''){
      updateUser(userDetails)
      needsUpdate(false)
    }
  }, [userDetails, update])

  // Apply to a job
  useEffect(()=>{
    async function applyJob(){
      await JoblyApi.applyJob({username: user.username, jobId: currJobId})
    }
    async function getUser(){
      let res = await JoblyApi.getUser(user.username)
      console.log('getUser', res)
      setUserDetails(res)
    }
    if(currJobId!==null){
      applyJob()
      setCurrJobId(null)
      getUser()
    }
  },[user, currJobId])

  return (
    <div className="App">
      <JoblyContext.Provider value ={{user, setUser, jobs, setJobs, companies, setCompanies, loggedIn, setLoggedIn, setUserDetails, setToken, setCurrJobId, userDetails, needsUpdate, setFirstRender}}>
        <NavBar/>
        <JoblyRoutes companies={companies}/>
      </JoblyContext.Provider>
    </div>
  );
}

export default App;