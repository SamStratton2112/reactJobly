import CompanyCard from "./CompanyCard";
import { useContext, useState, useEffect } from "react";
import JoblyContext from "./JoblyContext";
import JoblyApi from "./api";


const CompanyList = ()=>{
    // get list of companies from context
    const {companies} = useContext(JoblyContext);
    // use state to track and update value of form
    const [formCo, setFormCo] = useState('');
    // use state to replace formCo with handle compatable version
    const [currHandle, setCurrHandle] = useState([])
    // use allCos to show companies results or search results 
    const [allCos, setAllCos] =useState(companies)
    // use to trigger useEffect that makes api call
    const [totalSubmits, setTotalSubmits] = useState(0)
    console.log(allCos)

    // update value of input field
    const handleChange = (e) =>{
        const {value} = e.target;
        setFormCo(value)
    }
    // update formCo value 
    useEffect(()=>{
        let handle = formCo.replace(' and ', '-').replace(' ', '-').replace(',', '').toLocaleLowerCase()
        setCurrHandle(handle)
    }, [formCo]);

    useEffect(()=>{
        try{
            async function getCompany(){
                const res = await JoblyApi.getCompany(currHandle);
                console.log(res)
                setAllCos(res)
            }
            getCompany()
        }catch(e){
            console.log(e)
        }
    }, [totalSubmits])

    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log(currHandle)
        setTotalSubmits(totalSubmits + 1)
        setFormCo('')
    }
    let res = [allCos]
    console.log(res)
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
                {allCos === undefined?companies.map(company=><CompanyCard key={company.handle} company={company}/>): res.map(company=><CompanyCard key={company.handle} company={company}/>)}
            </div>
        </div>
    )
}
export default CompanyList;