import React from 'react'
import ReactLoading from 'react-loading'

import RestaurantComponent from '../components/RestaurantComponent'

class SelectionContainer extends React.Component{
  constructor(props){
    super(props)
    this.state={
      chosenRestaurant : false
    }
  }

  componentDidMount(){
    fetch("/api.yelp.com/v3")
    .then(response=>{
    if(response.ok){
      return response
    } else{
      let errorMessage = `${response.status} (${response.statusText})`
      let error = new Error(errorMessage)
      throw(error)
    }
    })
    .then(response => response.json())
    .then(response=> JSON.parse(response))
    .then(body=>{
      let randomNum = Math.floor((Math.random() * 20)+1)
      this.setState({ chosenRestaurant: body.businesses[randomNum]})
    })
    .catch(error=> console.error(`Error in fetch ----> ${error.message}`))

  }

  render(){
    if (this.state.chosenRestaurant) {
      return(
        <div className=" header header-mainpage">
        <RestaurantComponent
        chosenRestaurant = {this.state.chosenRestaurant}
        />
        </div>
      )
    }else{
      return(
        <div className="row loading">
          <div className="columns large-centered">
            <ReactLoading type={"spokes"} color={'#A60825'}/>
          </div>
        </div>
      )
    }
  }

}


export default SelectionContainer;
