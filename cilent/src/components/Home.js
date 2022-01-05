import React,{useContext, useState, useEffect} from "react"
import {Link} from "react-router-dom"
import Form from "./Form.js"
import axios from "axios"
import { Context } from '../Context'

export default function Home(props) {

const [dailyQuote, SetDailyQuote]=useState([])
const {currentJournal, addJournal, view } = useContext(Context)


// daily quote api
useEffect(() => {
    getQuote()
 }, [])


 function getQuote(){
    axios.get("https://cors-anywhere.herokuapp.com/https://zenquotes.io/api/today" )
    .then(res => SetDailyQuote(res.data))
    .catch(err => console.log(err))
    console.log(dailyQuote)
}




return(
<><div className="quote">

{dailyQuote ? dailyQuote.map(dailyQuote => <p>{dailyQuote.q}<br />-{dailyQuote.a}</p>) : null}
</div><div className="heading">
    <h5>Welcome to your Mindfulness Journal. Feelings can be difficult to navigate or identify. Click  <Link to ="/feelings">here</Link>  
 to access a Feelings Wheel.
        If you head over to Journal Entries you will be able to view edit and delete entries.You can expand the text area for the notes section.
    </h5>
</div>

<>
                <Form
                submit={addJournal}
                btnText="Add Journal" />
            </>


<div className="currentJournal">
        {view === true ? <p>
<h1> Todays Entry </h1>
            Date:{currentJournal.date}<br/>
            Did I meditate:{currentJournal.meditation}<br/>

           Did I move: {currentJournal.movement}<br/>
           How am I feeling: {currentJournal.feeling}<br/>
            Notes:{currentJournal.note}<br/>

        </p> : null}
    </div>


</>


)

}