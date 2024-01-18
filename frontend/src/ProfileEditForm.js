import {useEffect, useContext, useState} from 'react';
import JoblyContext from './JoblyContext'
import {useNavigate} from'react-router-dom'

const ProfileEditForm = ()=>{
    const nav= useNavigate()
    const {userDetails, setUserDetails, loggedIn, needsUpdate} = useContext(JoblyContext)
    const [formData, setFormData] = useState({firstName: userDetails.firstName, lastName: userDetails.lastName, email: userDetails.email, password: '', isAdmin: userDetails.isAdmin, username: userDetails.username})
    useEffect(()=>{
        if(!loggedIn){
            alert('Please log in to see jobs')
            nav('/')
        }
    },[nav, loggedIn])
    
    const handleChange = e =>{
        console.log(e)
        const {name, value} = e.target;
        // udate formData values from inputs
        setFormData(data=>({
            ...data, 
            [name]: value
        }))
    }

    // submit check form data
    const handleSubmit = e =>{
        e.preventDefault()
        console.log('FORM DATA',formData)
        needsUpdate(true)
        setUserDetails(formData)
        nav('/')
    }

    console.log(userDetails)
    return(
        <form onSubmit={handleSubmit}>
            <label htmlFor="firstName">First Name:</label>
            <input
                type='text'
                id='firstName'
                name='firstName'
                value={formData.firstName}
                onChange={handleChange}
            />
            <br/>
            <label htmlFor="lastName">Last Name:</label>
            <input
                type='text'
                id='lastName'
                name='lastName'
                value={formData.lastName}
                onChange={handleChange}
            />
            <br/>
            <label htmlFor="email">Email:</label>
            <input
                type='text'
                id='email'
                name='email'
                value={formData.email}
                onChange={handleChange}
            />
            <br/>
            <label htmlFor="password">Password:</label>
            <input
                type='password'
                id='password'
                name='password'
                onChange={handleChange}
            />
            <br/>
            <button>submit</button>
        </form>
    )
}
export default ProfileEditForm;