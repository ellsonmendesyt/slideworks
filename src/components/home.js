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

///https://api.trello.com/1/cards?key=9d8a7f134d73959e67911886ac9aa64b&token=a0224ee5322b96887dbc583374e58a68ecd2e443f6e1a66e500e6d59aed7809c&idList=61170decc241de1182844f30&name=cartao criado via codigo

    //busca a lista de cartoes de um quadro
    useEffect(()=>{   
        fetch(`https://api.trello.com/1/boards/${boardId}/cards?key=${key}&token=${token}`)
        .then(res=>{
            return res.json(); 
        })
        .then(data=>{
        
        setCards(data);   
                          
        })
         .catch(err=>console.log(err));
    },[]); 


    useEffect(()=>{
        { cards.length>0 && console.log(cards)}  
    },[cards])

    return (
        <div className='row o'>
         <CardList cards={cards}/>
         {console.log(cards)}
        <Form/>
        

        </div>
    )
}
//https://images.unsplash.com/photo-1628850923193-544e7b81ebad?ixid=Mnw3MDY2fDB8MXxjb2xsZWN0aW9ufDF8MzE3MDk5fHx8fHwyfHwxNjI5MDM3Mjcy&ixlib=rb-1.2.1&w=2560&h=2048&q=90
export default Home
