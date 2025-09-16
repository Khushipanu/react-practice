import React,{useState} from 'react'
import axios from 'axios'
import './App.css'
const App = () => {
  const[data,setData]=useState([])
  const getData=async()=>{
    const response= await axios.get('https://picsum.photos/v2/list')
    setData(response.data )

  }

  return (
    <div id="main">
      <button onClick={getData}>get data</button>
      
      <div id="inside">
        {data.map(function(elem,idx){
          return <div key={idx} className="final"> 
          <img src={elem.download_url} alt="" />
          <h1>{elem.author}</h1>
           </div>
       
       })}
      </div>
    </div>
  )
}

export default App
