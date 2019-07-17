import React from 'react'

const RestaurantComponent = props =>{
  let restaurant = props.chosenRestaurant
  if (restaurant.categories[0].title) {

  }

  debugger
  return(

    <div>
      <div className="row header">
        <div className="columns">
            <h2 className>Why don't you try out...</h2>
        </div>
      </div>

      <div className="rows">
          <div className="columns columns-block small-5 small-offset-1 large-4  ">
            <img className="selection-img" src={restaurant.image_url} alt="" />
        </div>
        <div className ="columns large-6">
            <div className="columns large-8 large-offset-2 large-centered">
              <h2>{restaurant.name}</h2>
          </div>
          <div className="row ">
            <div className="columns small-5 large-10 large-offset-1">
              <h5><b>Address:</b> {restaurant.location.address1}</h5>
              <h5><b>Category:</b> {restaurant.categories[0].title}</h5>
              <h5><b>Cost:</b> {restaurant.price} </h5>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default RestaurantComponent
