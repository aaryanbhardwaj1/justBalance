import React from 'react'

import justBalanceLogo from '../assets/justBalanced2.png'
import meal1 from '../assets/meal1.jpg'
import meal2 from '../assets/meal2.jpg'
import meal3 from '../assets/meal3.jpeg'
import meal4 from '../assets/meal4.jpg'
import meal5 from '../assets/meal5.jpg'
import meal6 from '../assets/meal6.jpg'

const Home = () => {
  return (
    <>
      
      <div className="split left background">          
      <div className="centered">
          {/* <img src={justBalanceLogo} className="logo" alt="JustBalanceLogo" />
          <h1>AI-Powered Nutrition</h1>
          <h2>Turn Ingredients into Delicious Meals!</h2> */}
        </div>
      </div>

      <div className="split right">
          <div className="centered mediumbox">
            <span><img src={justBalanceLogo} className="logo" alt="JustBalanceLogo" /></span>
            <div>
            <h2 className='typewriter'>Smart. Simple. Nutritious.</h2>
            </div>
            <div>
            <h3>Powered by AI, We help you create healthy, <br/> balanced diets tailored to your lifestyle.</h3>
            </div>
            <div className="carousel-container">

            <div className="imagecarousel">

              <img src={meal1} className='meal'/>
              <img src={meal2} className='meal' />
              <img src={meal3} className='meal' />
              <img src={meal4} className='meal' />
              <img src={meal5} className='meal' />
              <img src={meal6} className='meal' />  

              </div>
              </div>

            <button>Get started</button>
          </div>

      </div>

      
    </>
  )
}

export default Home
