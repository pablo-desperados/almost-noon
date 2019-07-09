import React from 'react'
import HeaderComponent from '../components/HeaderComponent'
import {Router} from 'react-router-dom'
import SelectionContainer from './SelectionContainer'

class MainPageContainer extends React.Component{
  constructor(props){
    super(props)
    this.state={

    }
    this.possiblefetch = this.possiblefetch.bind(this)
  }

  possiblefetch(){
    debugger
  }


render(){
  return(
    <div className="row main-content">
      <HeaderComponent/>
      <div className="row">
        <div className="columns large-5">
        <a href="/mainpage/selection" onClick={this.possiblefetch} className="button main-button-position">Tell me what to eat!</a>
        </div>
      </div>
    </div>
  )

}

}


export default MainPageContainer
