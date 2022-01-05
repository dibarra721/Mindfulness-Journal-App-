import React,{ useState } from "react"
import Form from "./Form.js"


export default function Journal (props) {

    const {date, meditation, _id,  movement, feeling, note} = props

    const [editToggle, setEditToggle]= useState(false)
     

return (

<>

    
        <div className="allJournals">

            { !editToggle ?
                <>
                    <p>Date: {date}</p>
                    <p>Did I meditate: {meditation}<br />
                        Did I move: {movement}<br />
                        How do I feel: {feeling}<br />
                        Notes: {note}
                    </p>
                    <button className="deleteButton" onClick={() => props.deleteJournal(_id)}>Delete Entry </button>
                    <button
                        className="editButton"
                        onClick={() => setEditToggle(prevToggle => !prevToggle)}>Edit Entry</button>


                </>
                :
                <>
                    <Form
                        date={date}
                        meditation={meditation}
                        movement={movement}
                        feeling={feeling}
                        note={note}
                        _id={_id}
                        btnText="Submit Edit"
                        submit={props.editJournal}
                        toggleEdit={setEditToggle} />
                    <button onClick={() => setEditToggle(prevToggle => !prevToggle)}>Close</button>

                </>
                
                }






        </div> 
        
        
        </>

)





}