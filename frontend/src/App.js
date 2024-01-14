import JoblyRoutes from './JoblyRoutes';
import NavBar from './NavBar';
import './App.css';
import { useEffect, useState } from 'react';
import JoblyContext from './JoblyContext';
import JoblyApi from './api';

function App() {
  let localstrg = localStorage.getItem('token')
  const [user, setUser] = useState({username: '', 
  password: ''})
  // on initial render token will be null
  const [token, setToken] = useState(localstrg)
  const [jobs, setJobs] = useState([])
  const [companies, setCompanies] = useState([])

  // whenever a user logs in, request a token and store it 
  useEffect(()=>{
    async function getUserToken(){
      let res = await JoblyApi.getUserToken(user.username,user.password, 'post')
      localStorage.setItem('token', res)
      setToken(res)//updating token indicates that there is a user so job and company get requests will fire
    }
    async function registerUserAndGetToken(){
      let res = await JoblyApi.registerUserAndGetToken(user.username,user.password, user.firstName, user.lastName, user.email, 'post')
      localStorage.setItem('token', res)
      setToken(res)
    }
    // if the user has less than 2 pieces of data getUserToken(), else registerUserAndGetToken()
    if(user.username !== '' && user.password !== ''){
      user.keys>2?registerUserAndGetToken() : getUserToken();
    }
    }, [user])

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
    getCompanies()
    getJobs()
  },[token])



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


// import { useNavigate} from 'react-router-dom';

// import JoblyRoutes from './JoblyRoutes';
// import NavBar from './NavBar';
// import './App.css';
// import { useEffect, useState } from 'react';
// import JoblyApi from './api';
// import JoblyContext from './JoblyContext';


// function App() {
//   const [user, setUser] = useState({ username: '', password: '' });
//   const [token, setToken] = useState(() => localStorage.getItem('token'));
//   const [jobs, setJobs] = useState([]);
//   const [companies, setCompanies] = useState([]);

//   const [initialRender, setInitialRender] = useState(true);

//   // fetch companies and jobs data from the API
//   useEffect(() => {
//     async function getCompanies() {
//       let companies = await JoblyApi.getCompanies();
//       setCompanies(companies);
//     }
//     async function getJobs() {
//       let jobs = await JoblyApi.getJobs();
//       setJobs(jobs);
//     }

//     if (!initialRender) {
//       getCompanies();
//       getJobs();
//     } else {
//       setInitialRender(false);
//     }
//   }, [initialRender]);

//   // fetch user token whenever a user logs in
//   useEffect(() => {
//     async function getUserToken() {
//       let res = await JoblyApi.getUserToken(
//         user.username,
//         user.password,
//         'post'
//       );
//       localStorage.setItem('token', res);
//       setToken(res);
//     }
//     async function registerUserAndGetToken() {
//       let res = await JoblyApi.registerUserAndGetToken(
//         user.username,
//         user.password,
//         user.firstName,
//         user.lastName,
//         user.email,
//         'post'
//       );
//       localStorage.setItem('token', res);
//       setToken(res);
//     }

//     if (!initialRender) {
//       if (user.keys > 2) {
//         registerUserAndGetToken();
//       } else {
//         getUserToken();
//       }
//     } else {
//       setInitialRender(false);
//     }
//   }, [user, initialRender]);

//   return (
//     <div className="App">
//       <JoblyContext.Provider
//         value={{ user, setUser, jobs, setJobs, companies, setCompanies }}
//       >
//         <NavBar />
//         <JoblyRoutes companies={companies} />
//       </JoblyContext.Provider>
//     </div>
//   );
// }

// export default App;
