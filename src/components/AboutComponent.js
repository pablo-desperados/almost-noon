import React from 'react';
import {Link} from "react-router-dom";
import {useSpring, animated} from 'react-spring';

const AboutComponent=(props)=>{

const fade = useSpring({
  from: {
    opacity: 0
  },
    opacity: 1

})

return(
    <animated.div style={fade}>
      <div data-toggler className= "row">
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
          <Link to="/mainpage" className="button">Try it now!</Link>
        </div>
      </div>
    </animated.div>
  )

}
export default AboutComponent
