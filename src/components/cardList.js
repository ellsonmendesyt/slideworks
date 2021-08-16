import React from 'react'
import Card from './card'

//cada lista é uma fila
const CardList = ({cards}) => {
    
    return (
        <div className='row justify-content-center'>
           {  cards.map((card,index)=>(<Card card={card} key={index}/>))   }
        </div>
    )
}

export default CardList
