import { Link } from "react-router-dom";

// company is passed as a prop from CompanyList
const CompanyCard = ({company})=>{
    // return a list of company cards with each card being a link to compaby details
    return(
        <Link to={`/companies/${company.handle}`}>
            <div style={{border: '5px black solid', margin: '10px'}}>
                <p>{company.name}</p>
                <p>{company.description}</p>
            </div>
        </Link>
    )
}

export default CompanyCard;