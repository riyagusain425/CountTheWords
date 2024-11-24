import React from 'react';
import {useState} from'react';

export default function TextCase(props) {
    let[text,setText]=useState("");
   const upperCase=()=>{
        let newText=text.toUpperCase();
     setText(newText);
    }
   const lowerCase=()=>{
        let newText=text.toLowerCase();
     setText(newText);
    }
    const clearText=()=>{
      let newText="";
      setText(newText);
    }
    const handleOnChange=(event)=>{
        setText(event.target.value)
    }
   
  return (
    <>
        <div className="container">
      <div className="form-group">
    <label htmlFor="myBox"><h3>Enter your text to analyse here </h3></label>
    <textarea className="form-control" id="myBox" value={text} onChange={handleOnChange}rows="6"></textarea>
  </div>
  <button className="btn btn-primary mx-2" onClick={upperCase}>Convert to Uppercase</button>
  <button className="btn btn-primary mx-2" onClick={lowerCase}>Convert to Lowercase</button>
  <button className="btn btn-primary mx-2" onClick={clearText}>Clear</button>
    </div>
    <div className="container my-3">
     <h4>Can be read in {0.08*text.length} minutes </h4>
     <p>Total {text.split(' ').length} words , {text.length} characters</p>
     <h4>Text Summary</h4>
     <p>{text}</p>
    </div>
    </>
  );
}
