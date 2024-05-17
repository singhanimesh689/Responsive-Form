import React,{useState} from 'react'
import Home from './container/Home/Home'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Subscribed from './components/subscribed/Subscribed';
import "./App.css";

const App = () => {
  const [data,setData] = useState('');

  const handleData = (data1)=>{
    console.log(data1);
    setData(data1);
  }
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home getData={handleData}/>}></Route>
            <Route path='/submit' element={<Subscribed email={data}/>}></Route>
        </Routes>
    </BrowserRouter>

  )
}

export default App
