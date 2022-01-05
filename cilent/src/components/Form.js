import React, { useState, useContext } from "react";
import { Context } from "../Context";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function Form(props) {
  const { btnText } = props;
  const { _id, toggleEdit } = useContext(Context);

  const [date, setDate] = useState(new Date());
  const handleCalendarClose = () => console.log("Calendar closed");
  const handleCalendarOpen = () => console.log("Calendar opened");

  const intiInputs = {
    date: props.date || new Date(),
    meditation: props.meditation || "",
    movement: props.movement || "",
    feeling: props.feeling || "",
    note: props.note || "",
  };

  const [inputs, setInputs] = useState(intiInputs);

  function handleChange(e) {
    const { name, value } = e.target;
    setInputs((prevInputs) => ({ ...prevInputs, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log("handle submit was called");
    props.submit(inputs, props._id);
    setInputs(intiInputs);
    if (_id) {
      toggleEdit((prevEdit) => !prevEdit);
    }
  }

  return (
    <>
      <div className="formWrapper">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#a1c9c9"
            fillOpacity="0.9"
            d="M0,192L20,170.7C40,149,80,107,120,128C160,149,200,235,240,245.3C280,256,320,192,360,186.7C400,181,440,235,480,250.7C520,267,560,245,600,250.7C640,256,680,288,720,277.3C760,267,800,213,840,192C880,171,920,181,960,202.7C1000,224,1040,256,1080,229.3C1120,203,1160,117,1200,112C1240,107,1280,181,1320,218.7C1360,256,1400,256,1420,256L1440,256L1440,0L1420,0C1400,0,1360,0,1320,0C1280,0,1240,0,1200,0C1160,0,1120,0,1080,0C1040,0,1000,0,960,0C920,0,880,0,840,0C800,0,760,0,720,0C680,0,640,0,600,0C560,0,520,0,480,0C440,0,400,0,360,0C320,0,280,0,240,0C200,0,160,0,120,0C80,0,40,0,20,0L0,0Z"
          ></path>
        </svg>
        <h1>Mindfulness Journal</h1>
        <form onSubmit={handleSubmit}>
          Date:
          <DatePicker
            selected={date}
            name="date"
            value={inputs.date}
            timeInputLabel="Time:"
            locale="en-GB"
            dateFormat="MM/dd/yyyy h:mm aa"
            timeFormat="HH:mm"
            onChange={(date) => setDate(date)}
            onCalendarClose={handleCalendarClose}
            onCalendarOpen={handleCalendarOpen}
            required
          />
          {/* <input
                    type="text"
                    name="date"
                    value={inputs.date}
                    onChange={handleChange}
                    placeholder="00-00-0000"
                    required /> */}
          <br />
          Did I meditate:

          <select
            onChange={handleChange}
            value={inputs.meditation}
            type="meditation"
            name="meditation"
            required
          >
            <option>Yes or No</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
          {/* <input
            type="text"
            name="meditation"
            value={inputs.meditation}
            onChange={handleChange}
            placeholder="Yes or No"
            required
          /> */}
          <br />
          Did I move:
          <select
            onChange={handleChange}
            value={inputs.movement}
            type="movement"
            name="movement"
            required
          >
            <option>Yes or No</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
          {/* <input
                    type="text"
                    name="movement"
                    value={inputs.movement}
                    onChange={handleChange}
                    placeholder="Yes or No"
                    required /> */}
          <br />
          How am I feeling :
          <input
            type="text"
            name="feeling"
            value={inputs.feeling}
            onChange={handleChange}
            placeholder="How am I feeling"
            required
          />
          <br />
          Notes:
          <textarea
            type="text"
            name="note"
            textarea="true"
            value={inputs.note}
            onChange={handleChange}
            placeholder="Any extra notes. How long did I meditate for? Was it morning? How long did I move for. 
                    What time of day was it "
          />
          <button>{btnText}</button>
        </form>
      </div>
    </>
  );
}