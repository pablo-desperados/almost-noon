import React from 'react';
import {Link} from "react-router-dom";
// import {useSpring, animated} from 'react-spring';

const AboutComponent=(props)=>{


return(
  // <Spring>
  //   {props=>(
  //     <div style={props}>
    <div>
      <div data-toggler data-animate="fade-in fade-out"  className= "row">
        <div className=" text-center columns large-8 large-centered header">
          <img src="/images/chicken-logo.png" className="logo" />
          <h1>Making choosing where to eat easier than ever!</h1>
        </div>
        <br/>
      </div>
      <div className= "row">
        <div className="columns large-12">
          <h3 className="subheader">Do you spend more time trying to figure out where to eat than you spend actually eating?</h3>
        </div>
      </div>
          <br/>
      <div className= "row">
        <div className="columns large-12 body-about">
          <p>To get fast and realiable recommendations of local restaurants, simply click our the random button in our main page!</p>
          <p>Quit being dissapointed by review websites with sponsored content, fake reviews, and dishonest practices.</p>
          <p>Start getting honest recommendations now! </p>
          <Link to="/" className="button button-about">Try it now!</Link>
        </div>
      </div>
    </div>
  //   )}
  // </Spring>
)

}
export default AboutComponent
