import React from 'react'
import HeaderComponent from '../components/HeaderComponent'
import {Router, Link} from 'react-router-dom'
import SelectionContainer from './SelectionContainer'

const MainPageContainer=(props)=>{

  return(
    <div className="row main-content">
      <HeaderComponent/>
      <div className="row">
        <div className="columns large-5">
        <Link to= "/mainpage/selection" className="button main-button-position">Tell me what to eat!</Link>
        </div>
      </div>
    </div>
  )

}

export default MainPageContainer
