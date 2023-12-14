import logo from './logo.svg';
import './App.css';
import React ,{useState} from 'react';
function App() {
  const [shortURL,setShortURL ]=useState('')
  const [longURL,setlongtURL ]=useState('')

  function handleClick(){
    const randomid = Math.random().toString(36).substring(7);
    setlongtURL('http://cp405.co/${randomid}')
  }
 return( 
 <div className= "container">
    <h1>Tiny Url</h1>
 <div className= "Form">
  <label htmlFor='longURL'>Enter a long url</label> 
  <input type ="text" id ="longURL"/>
  value = {longURL} onChange = {(e) => setlongtURL(e.target.value)}

  

</div>
<button className= "btn" onClick={handleClick}>shorten URL</button>
<div className="result">
  <p id ="shortURL"></p>
</div>
</div>
 )
}
export default App;

