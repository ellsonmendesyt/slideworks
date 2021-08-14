import React,{useState,useEffect} from 'react'

import CardList from './cardList'
import Form from './form';



const Home = () => {


const [cards,setCards]=useState([]);

const key='9d8a7f134d73959e67911886ac9aa64b';
const token='a0224ee5322b96887dbc583374e58a68ecd2e443f6e1a66e500e6d59aed7809c';
const listId='61170decc241de1182844f30';
const boardId='61170decc241de1182844f2f';
const cardId='61170e13ba2a341bf6ae9833';


    //busca a lista de cartoes de um quadro
    // useEffect(()=>{   
    //     fetch(`https://api.trello.com/1/boards/${boardId}/cards?key=${key}&token=${token}`)
    //     .then(res=>{
    //         return res.json(); 
    //     })
    //     .then(data=>{
        
    //     setCards(data);                        
    //     })
    //      .catch(err=>console.log(err));
    // },[]); 

    return (
        <div className='row o'>
         <CardList cards={cards}/>
         
        <Form/>
        

        </div>
    )
}

export default Home
