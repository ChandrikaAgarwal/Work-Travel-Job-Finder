import React,{useState} from "react";
const Companies = (props) => {
       
    let records = props.records
   console.log("records: ",records);
   
    return (
        <div className="mt-10 ml-4">
           
            <ul>
                {records.map(record => (
                <li key={record.companyId} className="rounded-2xl p-4 mb-4 shadow-xl shadow-green-5000 bg-green-200">
                <div className="flex">
                <div className="">
                <h2 className="text-xl font-bold text-blue-800">{record.companyName }</h2>
                <p className="text-md font-mono italic">{record.industry }</p>
                <p className="font-light">{record.address}</p>
                <p className="font-semibold text-blue-500">{record.phoneNumber}</p>
                         
                </div>
                <div className="flex items-center ml-28 space-x-2">
                <label htmlFor="checkBox">Contacted:</label>
                <input type="checkbox" name="checkBox" className="h-4 w-4"/>
                </div>
                </div>
                </li>
                ))}

            </ul> 
            
        </div>
   )
    
}

export default Companies;