import {Routes, Route, Navigate} from 'react-router-dom';
import Home from './Home';
import CompanyList from './CompanyList';
import CompanyDetails from './CompanyDetails';
import JobList from './JobList';
import SignupForm from './SignupForm';
import LoginForm from './LoginForm';
import ProfileEditForm from './ProfileEditForm';
import { useContext } from 'react';
import JoblyContext from './JoblyContext';
import Logout from './Logout';

const JoblyRoutes = () =>{
    // get all companies from context
    const {companies} = useContext(JoblyContext);
    return(
    <Routes>
        <Route key="home" exact path ='/' element={<Home/>}/>
        <Route exact key="companies" path ='/companies' element={<CompanyList/>}/>
        {/* create route for each company handle */}
        {companies.map(company=>(
            // pass company object down to company details 
            <Route key={company.handle} exact path={`/companies/${company.handle}`} element={<CompanyDetails company={company}/>}/>
        ))}
        <Route exact key="jobs" path ='/jobs' element={<JobList/>}/>
        <Route exact key="signup" path='/signup' element={<SignupForm/>}/>
        <Route exact key="login" path='/login' element={<LoginForm/>}/>
        <Route exact key="edit" path='/users/:username' element={<ProfileEditForm/>}/>
        <Route exact key="logout" path='/logout' element={<Logout/>}/>
        <Route path='*' key="*" element={<Navigate to='/'/>}/>
    </Routes>
    )
}

export default JoblyRoutes;