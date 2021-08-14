import React from 'react'

const Card = ({card}) => {
    return (
<div className="card  m-2 " style={{ width:'20rem' }}>
  {/* <img src="..." className="card-img-top" alt="..."/> */}
  <div className="card-body">
    <h5 className="card-title">{card && card.name}</h5>
    <p className="card-text">{card.desc}</p>
    
  </div>
</div>
    )
}

export default Card
