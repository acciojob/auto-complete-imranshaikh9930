
import React,{useEffect, useState} from "react";
import './../styles/App.css';

const App = () => {
  const  fruits = ["apple", "banana", "cherry", "date", "elderberry", "fig"];
  const[input,setInput] = useState("");
  const [arr,setArr] = useState([])

 useEffect(()=>{

  const filteredSuggestions = fruits.filter(fruit =>
    fruit.toLowerCase().includes(input.toLowerCase())
  );
  
  setArr(filteredSuggestions);
  
 },[input])

  return (
    <div>

      <h1>Search Item</h1>
      
      <input type="text" value={input} onChange={(e)=>setInput(e.target.value)} />
    {
      arr.map((item)=>
      (
        <ul>
          <li key={item}>{item}</li>
        </ul>
      )
      )
    }
    </div>
  )
}

export default App
