import React, {useState, useEffect} from 'react'
import ReactLoading from 'react-loading'
import RestaurantComponent from '../components/RestaurantComponent'

const SelectionContainer =(props)=>{

  const [chosenRestaurant,  setChosenRestaurant] = useState(false)

  let fetchData=()=>{
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
      let randomNum = Math.floor((Math.random() * body.businesses.length )+1)
      setChosenRestaurant(body.businesses[randomNum])
    })
    .catch(error=> console.error(`Error in fetch ----> ${error.message}`))
  }

  useEffect(()=>{
    fetchData()
  }, [])

  if (chosenRestaurant) {
    return(
      <div className=" header header-mainpage">
      <RestaurantComponent
      chosenRestaurant = {chosenRestaurant}
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


export default SelectionContainer;
