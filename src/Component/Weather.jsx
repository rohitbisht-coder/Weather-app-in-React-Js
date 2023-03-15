import React from 'react'
 import './weather.css'
const Weather = (props) => {
  return (
    <>
    <h3> Do You Mean??</h3>
    <h1 className='Hover'>
     <span className="material-symbols-outlined">
  home_pin
  </span>{props.Data.city_name}</h1>

  
<p className='Hover'><span className="material-symbols-outlined">
  thermostat
  </span>{props.Data.app_temp }</p>
  
<p className='Hover'><span className="material-symbols-outlined">
  history
  </span>
  {props.Data.app_temp}
  </p>
  
<p className='Hover'><span className="material-symbols-outlined">
  wb_twilight
</span>{props.Data.datetime}</p>
  
 <p className='Hover'><span className="material-symbols-outlined">
cloud
</span>{props.Data.clouds}</p>
  </>
  )
}

export default Weather
