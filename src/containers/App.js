import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import Navbar from '../components/Navbar'

class App extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
      <div>
        <BrowserRouter>
          <Route path="/" component={Navbar} />
        </BrowserRouter>
      </div>
    )
  }
}

export default App
