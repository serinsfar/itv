import React from 'react'
import './homeServices.css'
import about_img from '../../assets/about.png'

const homeServices = () => {
  return (
    <div className='homeService'>
        <div className="DatahomeService-Left">
        <img src={about_img} alt="" className='homeService-img' />
        </div>
        <div className="DatahomeService-right">
            <h2>DATA</h2>
            <p>Assessing, defining and modelling aeronautical and geospatial data to drive better results</p>

        </div>
    </div>

  )
}

export default homeServices