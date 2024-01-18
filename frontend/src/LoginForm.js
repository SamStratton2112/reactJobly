import { useContext, useState } from "react";
import JoblyContext from "./JoblyContext";
import {useNavigate} from 'react-router-dom'

const LoginForm = ()=>{
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
        // update user information to submitted form data
        setUser(formData)
        if(formData.username===''){
            alert('Invalid Username or password!')
        }
        nav('/')
    }
    console.log(formData)
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
            <button>Submit</button>
        </form>
        )
}
export default LoginForm;