import React from "react";
const SearchBar = ({onSearchChange,onStateChange,onIndustryChange}) => {
       
    return (
            <div>         
            <select name="" id="" className="w-md ml-5 mt-5 shadow-xl rounded-md bg-amber-200 h-10" style={{outline:"none"}} onChange={(e)=>onStateChange(e.target.value)} >
                <option value="All States" className="font-semibold">All States</option>
                <option value="NSW">NSW</option>
                <option value="VIC">VIC</option>
                <option value="QLD">QLD</option>
                <option value="WA">WA</option>
                <option value="SA">SA</option>
                <option value="TAS">TAS</option>
                <option value="NT">NT</option>
                <option value="ACT">ACT</option>
            </select>

            <select name="" id="" className="w-md ml-5 mt-5 shadow-xl rounded-md bg-amber-200 h-10" style={{ outline: "none" }} onChange={(e) => onIndustryChange(e.target.value)}>
                <option value="All Industries">All Industries</option>
                <option value="Retail & Tourism">Retail & Tourism</option>
                <option value="Hospitality">Hospitality</option>
                <option value="Tourism">Tourism</option>
                <option value="Retail">Retail</option>
                <option value="Agriculture">Agriculture</option>
                <option value="Health & Wellness">Health & Wellness</option>
            </select>

            <form>
                <input
                    type="text" placeholder="  Search Companies..."
                    onChange={(e) => onSearchChange(e.target.value)}
                    className="search-bar bg-blue-200 mt-5 ml-4 h-10 rounded-2xl shadow w-md" />
            </form>
            </div>
        
    )
}

export default SearchBar