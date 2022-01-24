import React, {useState, useEffect} from "react"
import axios from "axios"
import "./App.css"

const Context = React.createContext()

function ContextProvider(props) {

const [journals, setJournals]= useState([])
const [currentJournal, setCurrentJournal]= useState({})
const [view, SetView]= useState(false)


// axios requests

function getJournals(){
    axios.get('/journals')
    .then(res => setJournals(res.data))
    .catch(err => console.log(err.response.data.errMsg))
    console.log(journals)
}

useEffect(() => {
    getJournals()
    console.log(journals)
 }, [])
 


function addJournal(newJournal) {
    axios.post('/journals', newJournal)
    .then ( res => {
        setCurrentJournal(res.data)
        SetView(true)
        setJournals(prevJournals => [...prevJournals, res.data])
        console.log(journals)
        console.log(currentJournal)
    })
}

function deleteJournal(journalId) {
    axios.delete(`./journals/${journalId}`,)
    .then(res => {
        setJournals(prevJournals => prevJournals.filter(journal => journal._id !== journalId))
    })
    .catch(err => console.log(err))
}


function editJournal(updates , journalId){
    axios.put(`./journals/${journalId}`, updates)
    .then(res => {
        setJournals(prevJournals => prevJournals.map(journal => journal._id !== journalId ? journal : res.data))
    })
    .catch(err => console.log(err))
    
}

function handleMovement(e){
    if(e.target.value === "reset") {
      getJournals()
    }
    axios.get(`/journals/search/movement?movement=${e.target.value}`)
    .then(res => setJournals(res.data))
    .catch(err => console.log(err))
  }

  function handleMeditation(e){
    if(e.target.value === "reset") {
      getJournals()
    }
    axios.get(`/journals/search/meditation?meditation=${e.target.value}`)
    .then(res => setJournals(res.data))
    .catch(err => console.log(err))
  }





return(
    <>
        <Context.Provider
            value={{
                addJournal,
                setJournals,
                setCurrentJournal,
                getJournals,
                deleteJournal,
                editJournal,
                handleMovement,
                handleMeditation,
                currentJournal,
                view,
                journals,
                // btnText
            }}
        >
            {props.children}
        </Context.Provider></>
)


}

    export {ContextProvider,Context}