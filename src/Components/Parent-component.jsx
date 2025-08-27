import React,{Fragment,useState} from "react";
import Companies from "./Companies-list";
import CompanyMap from "./Map";
import Records from "../Companies/companies.json"
import SearchBar from "./SearchBar";
const ParentComponent = () => {
    const [search, setSearch] = useState("")
    const [state,setState]=useState("")
    const [industry, setIndustry] = useState("")
    
    const finalRecords = Records.filter((record) => {
        const matchState = state ? record.state === state : true;
        const matchIndustry = industry ? record.industry === industry : true;
        return matchState && matchIndustry
    });

    
    const filteredRecords = finalRecords.filter((record) =>
        record.companyName.toLowerCase().includes(search.toLowerCase()) || record.industry.toLowerCase().includes(search.toLowerCase())
    )
    return (
        <Fragment>
        <div className="flex h-screen">
        <div className="w-2/5  overflow-y-scroll p-4">
        <SearchBar onSearchChange={setSearch} onStateChange={setState} onIndustryChange={setIndustry} />
        <Companies records={filteredRecords} />
        </div>
                
        <div className="w-3/5">
        <CompanyMap companies={filteredRecords} />
        </div>
        </div>
        </Fragment>
    )
}

export default ParentComponent