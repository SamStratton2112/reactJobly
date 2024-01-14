import CompanyCard from "./CompanyCard";
import { useContext, useState, useEffect } from "react";
import JoblyContext from "./JoblyContext";
import JoblyApi from "./api";


const CompanyList = ()=>{
    // get list of companies from context
    const {companies, token} = useContext(JoblyContext);
    // use state to track and update value of form
    const [formCo, setFormCo] = useState('');
    // use state to replace formCo with handle compatible version
    const [currHandle, setCurrHandle] = useState([])
    // use allCos to show companies results or search results 
    const [allCos, setAllCos] =useState(companies)
    // use to trigger useEffect that makes api call
    const [totalSubmits, setTotalSubmits] = useState(0)

    // update value of input field
    const handleChange = (e) =>{
        const {value} = e.target;
        setFormCo(value)
    }
    // update formCo value to be handle compatible
    useEffect(()=>{
        let handle = formCo.replace(' and ', '-').replace(' ', '-').replace(',', '').toLocaleLowerCase()
        setCurrHandle(handle)
    }, [formCo]);

    // filter company results from user input
    useEffect(()=>{
        try{
            async function getCompany(){
                const res = await JoblyApi.getCompany(currHandle);
                setAllCos(res)
            }
            getCompany()
        }catch(e){
            console.log(e)
        }
    }, [totalSubmits])

    // trigger get request
    const handleSubmit=(e)=>{
        e.preventDefault()
        setTotalSubmits(totalSubmits + 1)
        setFormCo('')
    }
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
                {/* if allCos is undefined then list companies from context */}
                {allCos === undefined?
                    companies.map(company=><CompanyCard key={company.handle} company={company}/>)
                    : 
                    // else list the results of the request
                    res.map(company=><CompanyCard key={company.handle} company={company}/>)}
            </div>
        </div>
    )
}
export default CompanyList;