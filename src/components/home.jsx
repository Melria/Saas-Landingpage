import React from 'react';
import dashboard from '../assets/dashboard.jpg';

export const  Home=()=>{
  return (
    <div className='home' id="home">
        <h1>Make Your First <span>Impression</span> Count</h1>
        <p className='homeText'>powerful seal-serve product analytics to help you convert<br/>
        engage and retain  more users </p>
        <div className='dashDiv'>
            <img src={dashboard} alt="dashboard" className='dashImg' />
        </div>
    </div>
  )
}
