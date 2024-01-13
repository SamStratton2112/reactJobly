import {Routes, Route, Navigate} from 'react-router-dom';
import Home from './Home';
import CompanyList from './CompanyList';
import CompanyDetails from './CompanyDetails';
import JobList from './JobList';
import SignupForm from './SignupForm';
import LoginForm from './LoginForm';
import ProfileEditForm from './ProfileEditForm';
import JoblyContext from './JoblyContext';
import { useContext } from 'react';

const JoblyRoutes = () =>{
    const {companies} = useContext(JoblyContext);
    return(
    <Routes>
        <Route exact path ='/' element={<Home/>}/>
        <Route exact path ='/companies' element={<CompanyList/>}/>
        {/* {companies.map(company=>(
            <Route exact path={`/companies/${company.handle}`} element={<CompanyDetails company={company}/>}/>
        ))} */}
        <Route exact path ='/jobs' element={<JobList/>}/>
        <Route exact path ='/signup' element={<SignupForm/>}/>
        <Route exact path ='/login' element={<LoginForm/>}/>
        <Route exact path ='/profile' element={<ProfileEditForm/>}/>
        <Route path='*' element={<Navigate to='/'/>}/>
    </Routes>
    )
}

export default JoblyRoutes;