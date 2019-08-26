import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import Navbar from '../components/Navbar'

const App = (props)=>{

  return(
    <div>
      <BrowserRouter>
        <Route path="/" render={(props)=><Navbar/>} />
      </BrowserRouter>
    </div>)
}

export default App
