import React from 'react'

import './slider.css';

const Slider = ({show,toggle}) => {
    return (
        <div className='row justify-content-center'>
        <label className="switch" >
          <input type="checkbox"  
           value={show}
           onChange={toggle}
          />
          <div className="slider round"></div>
        </label>
      </div>
    )
}

export default Slider
