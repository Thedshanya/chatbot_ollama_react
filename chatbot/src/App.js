import './App.css';
import { useState } from 'react';


function App() {

  const [val,setVal]=useState('');
  const[output,setOut]=useState('');


  const handlesubmit =(e)=>{
    e.preventDefault();


  const qn={
    "model":"llama2-uncensored",
    "prompt":val,
    "stream":false
  };

  const option={
    method:'POST',

    headers:{
      'Content-Type':'application/json'
    },

    body:JSON.stringify(qn)
  };

  fetch('http://localhost:11434/api/generate/',option)

  .then(response=>response.text())
  .then(data=>display(data))
  .catch(error=>console.log("error"));

  }



  const change = (e)=>{
  setVal(e.target.value);
  }

  const display =(event)=>
  {
    setOut(event);
    // <p>{output}</p>
  }
  return (
    <div className="App">
    <form >
      <input onChange={change} type='text' value={val} placeholder='Ask'/>
      <br></br>
      <button onClick={handlesubmit} >Send</button>
    </form>
    <p>{output}</p>
    </div>
  );
}

export default App;
