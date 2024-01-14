import CompanyCard from "./CompanyCard";
import { useContext, useState, useEffect } from "react";
import JoblyContext from "./JoblyContext";
import JoblyApi from "./api";
import { useNavigate } from "react-router-dom";



const CompanyList = ()=>{
    const nav=useNavigate()
    // get list of companies from context
    const {companies, loggedIn} = useContext(JoblyContext);
    // use state to track and update value of form
    const [formCo, setFormCo] = useState('');
    // use state to replace formCo with handle compatible version
    const [currHandle, setCurrHandle] = useState()
    // use allCos to show companies results or search results 
    const [allCos, setAllCos] =useState([])
    // track initial render 
    const [initialRender, setInitialRender] = useState(true)

    // update value of input field
    const handleChange = (e) =>{
        const {value} = e.target;
        setFormCo(value)
    }

    // filter company results from user input
    useEffect(()=>{
        async function getCompany(){
            const res = await JoblyApi.getCompany(currHandle);
            setAllCos(res)
        }
        if(!initialRender){
            getCompany()
            setInitialRender(true)
        }
    }, [currHandle, initialRender])

    // trigger get request
    const handleSubmit=(e)=>{
        e.preventDefault()
        let handle = formCo.replace(' and ', '-').replace(' ', '-').replace(',', '').toLocaleLowerCase()
        console.log(handle)
        setCurrHandle(handle)
        setInitialRender(false)
        setFormCo('')
    }

    useEffect(()=>{
        if(!loggedIn){
            alert('Please log in to see companies')
            nav('/')
        }
    },[loggedIn])

    // ensure allCos is an array
    let res = [allCos]
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor='name'>Search for a company:</label>
                <input 
                    id="name"
                    type="text"
                    name='name'
                    placeholder="Company Name"
                    onChange={handleChange}
                    value={formCo}
                />
                <button>Submit</button>
            </form>
            <div>
                {/* if allCos is empty then list companies from context */}
                {allCos.length<1?
                    companies.map(company=><CompanyCard key={company.handle} company={company}/>)
                    : 
                    // else list the results of the request as an array 
                    res.map(company=><CompanyCard key={company.handle} company={company}/>)}
            </div>
        </div>
    )
}
export default CompanyList;