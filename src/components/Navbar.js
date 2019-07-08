import React from 'react'
import { BrowserRouter, Route, Switch, Link } from "react-router-dom"
import AboutComponent from './AboutComponent'
import App from '../containers/App'

class Navbar extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
  return(
    <div>
      <div>
        <div className="top-bar">
          <div className="top-bar-left">
            <ul className="dropdown menu" data-dropdown-menu>
              <li><Link to="/"><img className="logo" src="images/logo.png" href="/"/></Link></li>
              <li className="top-bar-sublink"><Link to="/about">About</Link></li>
            </ul>
          </div>
        </div>
      </div>
      <Switch>
      <Route exact path="/about" component={AboutComponent} />
      </Switch>
    </div>

  )
  }
}

export default Navbar
