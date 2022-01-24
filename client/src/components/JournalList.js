import React, {useContext} from "react";
import {Context} from "../Context"
import Journal from "./Journal";

function JournalList(props){

    const {journals, handleMeditation, deleteJournal, editJournal, handleMovement} =useContext(Context)
    // const [editToggle, setEditToggle]= useState(false)
console.log(props)

return (

    <>
    <>
    <h2>All Your Past Journals. You can Edit and Delete Them.<br/>You can also filter by whether you have meditated for moved. To track if those activities
     affect how you are feeling <br/></h2>


     <div className="filter">
         Filter by Movement


         <select onChange={handleMovement} className="filter">
    <option value="reset">All Journals</option>
    <option value="Yes">Yes</option>
    <option value="No">No</option>

    </select>
    <br/>
    Filter by Mediation
    <select onChange={handleMeditation} className="filter">
    <option value="reset">All Journals</option>
    <option value="Yes">Yes</option>
    <option value="No">No</option>

    </select>
     </div>


    <div className="container">
    {journals ? journals.map(journal => 
        <Journal

            {...journal}
            key={journal._id}
            btnText="edit"
            editJournal={editJournal}
            deleteJournal={deleteJournal}
            />
            ): null}

    </div>
    
    
    

       </> 
       </>
    
)




}

export default JournalList;