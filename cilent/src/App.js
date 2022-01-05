import React from "react"
import {Route, Routes} from "react-router-dom"
import './App.css';
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import JournalList from "./components/JournalList"
import Mindfulness from "./components/Mindfulness";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import Feelings from "./components/Feelings";

export default function App() {

  return(
    <><div className="wrapper">
      <NavBar />
    
      <Routes>
        <Route  exact path="/" element={<Home />} render={() => <Home />} />
        <Route exact path="/journals" element={<JournalList />} render={() => <JournalList />} />
        <Route exact path="/mindfulness" element={<Mindfulness />} render={() => <Mindfulness />} />
        <Route exact path="/feelings" element={<Feelings/>} render={() => <Feelings />} />

        <Route path= "*"element={<NotFound/>} render={() => <NotFound />} />
       

      </Routes>


    </div><Footer /></>
  )
}