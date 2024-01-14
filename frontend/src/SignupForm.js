import { useContext, useState } from "react";
import JoblyContext from "./JoblyContext";
import {useNavigate} from 'react-router-dom'

const SignupForm = ()=>{
    const nav = useNavigate()
    const {setUser} = useContext(JoblyContext);
    const [formData, setFormData] = useState('')
    // handle form input changes
    const handleChange = e =>{
        const {name, value} = e.target;
        // udate formData values from inputs
        setFormData(data=>({
            ...data, 
            [name]: value
        }))
    }
    // set user to most recent inputs 
    const handleSubmit= e=>{
        e.preventDefault()
        // update user to submitted form data
        setUser(formData)
        nav('/')
    }

    return(
        <form onSubmit={handleSubmit}>
            <label htmlFor="username">Username: </label>
            <input
                type='text'
                id='username'
                name='username'
                placeholder="username"
                value={formData.username}
                onChange={handleChange}
            />
            <br/>
            <label htmlFor="password">Password: </label>
            <input
                type='password'
                id='password'
                name='password'
                placeholder="password"
                value={formData.password}
                onChange={handleChange}
            />
            <br/>
            <label htmlFor="firstName">First Name: </label>
            <input
                type='text'
                id='firstName'
                name='firstName'
                placeholder="first name"
                value={formData.firstName }
                onChange={handleChange}
            />
            <br/>
            <label htmlFor="lastName">Last Name: </label>
            <input
                type='text'
                id='lastName'
                name='lastName'
                placeholder="last name"
                value={formData.lastName }
                onChange={handleChange}
            />
            <br/>
            <label htmlFor="email">Email: </label>
            <input
                type='email'
                id='email'
                name='email'
                placeholder="email"
                value={formData.email}
                onChange={handleChange}
            />
            <br/>
            <button>Submit</button>
        </form>
        )
}
export default SignupForm;