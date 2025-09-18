
import React from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import About from './pages/About'
import Product from './pages/Product'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Header from './components/Header'
const App=()=>{
  return(
    <div>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>} />
        <Route path='/product' element={<Product/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </div>

  )
}
export default App

























// import React,{useEffect,useState} from 'react'
// import axios from 'axios'
// import './App.css'
// const App = () => {
//   const[data,setData]=useState([])
//   const getData=async()=>{
//     const response= await axios.get('https://picsum.photos/v2/list')
//     setData(response.data)
//   }
//   useEffect(()=>{

//   })
//   return (
//     <div id="main">
//       <button onClick={getData}>get data</button>
//       <div id="inside">
//         {data.map(function(elem,idx){
//           return <div key={idx} className="final"> 
//           <img src={elem.download_url} alt="" />
//           <h1>{elem.author}</h1>
//            </div>
//        })}
//       </div>
//     </div>
//   )

// }

// export default App


//react router DOM