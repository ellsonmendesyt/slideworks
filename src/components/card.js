import React from 'react'
import './card.css';
import CardList from './cardList';

const Card = ({card}) => {

const [labels,setLabels]=React.useState(card.labels);


   React.useEffect(()=>{
    labels.forEach((label)=>{console.log(label.name)});
   });

    return (
      <div className="card  m-2 " style={{ width:'15rem' }}>
        <div className="card-header d-flex justify-content-between text-muted align-items-center">
          <h5 className="card-title text-muted">{card && card.name}</h5>
          <i className="fa fa-ellipsis-h" aria-hidden="true"></i>
        </div>
        <div className="card-body ">
          <h6 className="card-title text-muted">{card && card.desc}</h6>
          {
            labels.map((label,i)=>
            {
            return <span className='tag ' key={i} 
            style={{ backgroundColor:label.color }} >
            {label.name}</span>})
          }
          
        </div>
        <div className="card-footer mb-2">
          <div className="options w-100 d-flex justify-content-between  ">
            <div>
            {card.desc && <i className="fa fa-align-left" aria-hidden="true" title='esse cartão tem uma descrição'></i>}
            </div>
            <div>
            <i className="fa fa-video-camera mx-3" aria-hidden="true" title='criar um video'></i>
            <i className="fa fa-object-ungroup" aria-hidden="true" title='criar cartao de um template'></i>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  export default Card

