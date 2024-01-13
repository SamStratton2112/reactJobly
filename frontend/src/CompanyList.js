import CompanyCard from "./CompanyCard";
import { useContext } from "react";
import JoblyContext from "./JoblyContext";

const CompanyList = ()=>{
    const {companies} = useContext(JoblyContext);
    console.log(companies)
    return(
        <div>
            <form>
                <label htmlFor='name'>Search for a company:</label>
                <input 
                    id="name"
                    type="text"
                    name='name'
                    placeholder="Company Name"
                    // value={state}
                    // onChange={handleChange}
                />
                <button>Submit</button>
            </form>
            <div>
                {/* {companies.map(company=><CompanyCard company={company}/>)} */}
            </div>
        </div>
    )
}
export default CompanyList;