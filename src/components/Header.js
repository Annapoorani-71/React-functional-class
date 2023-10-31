import React from 'react'
import "./Header.css"
function Header({update}) {
  return (
    <div>
        <div className='heading1'>
            <h1>{update}</h1> 
        </div>
    </div>
  )
}
Header.defaultProps={update:"Second updation"}

export default Header