import React, { useState } from 'react'
import './App.css'
const App = () => {

  const [result,setResult] = useState("");
  const handle_event = (e)=>
  {
      setResult(result.concat(e.target.name));
  }
  const clear = () =>
  {
      setResult("")
  }
  const backspace = () =>
  {
      setResult(result.slice(0,result.length-1))
  }
  const calculate = () =>
  {
    try
    {
      setResult(eval(result).toString());
    }
    catch(err)
    {
      setResult('Error')
    }
  }
  return (
    <>
    <center>
      <div className='container'>
        <form className='display'>
          <center><input type='text' value={result} className="display-text"/></center>
        </form>
        <br></br>
        <div className="keypad">
          <button name="1" onClick={handle_event} className="key-btn">1</button>
          <button name="2" onClick={handle_event} className="key-btn">2</button>
          
          <button name="3" onClick={handle_event} className="key-btn">3</button>
          <button onClick={backspace} className="highlight">c</button>
          <button name="4" onClick={handle_event} className="key-btn">4</button>
          <button name="5" onClick={handle_event} className="key-btn">5</button>
          <button name="6" onClick={handle_event} className="key-btn">6</button>
          <button name="+" onClick={handle_event} className="highlight">+</button>

          <button name="7" onClick={handle_event} className="key-btn">7</button>
          <button name="8" onClick={handle_event} className="key-btn">8</button>
          <button name="9" onClick={handle_event} className="key-btn">9</button>
          <button name="-" onClick={handle_event} className="highlight">-</button>

          <button name="0" onClick={handle_event} className="key-btn">0</button>
          <button name="/" onClick={handle_event} className="highlight">/</button>
          <button  onClick={calculate} className="highlight_equ">=</button>
          
          <button name="*" onClick={handle_event} className="highlight">*</button>
          <button onClick={clear} id="clear" className="highlight_clear">clear</button>
          
        </div>

      </div>
    </center>

    </>
  )
}

export default App;