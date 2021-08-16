import React,{useState,useEffect} from 'react'

import CardList from './cardList'
import Form from './form';
import Slider from './slider'


const Home = () => {


const [cards,setCards]=useState([]);
const [show,setShow]=React.useState(false);


//info do cartao publico do trello: quadro atual, lista, etc
// a chave e o token está gravado aqui, mas em cenario real ficaria em ambiente de variavel
const key='9d8a7f134d73959e67911886ac9aa64b';
const token='a0224ee5322b96887dbc583374e58a68ecd2e443f6e1a66e500e6d59aed7809c';
const listId='61170decc241de1182844f30';
const boardId='61170decc241de1182844f2f';
const cardId='61170e13ba2a341bf6ae9833';


 const toggle=()=>{
     setShow(!show);
     
 }

    //busca a lista de cartoes de um quadro
    useEffect(()=>{   
        fetch(`https://api.trello.com/1/boards/${boardId}/cards?key=${key}&token=${token}`)
        .then(res=>{return res.json(); })
        .then(data=>{setCards(data);})
        .catch(err=>console.log(err));
    },[show]); 

    useEffect(()=>{
        { cards.length>0 && console.log(cards)}  
    },[cards])

    return (
        <div className='row  justify-content-center'>
        <Form/>
        <Slider toggle={toggle}/>
        { show && cards.length>0 && < CardList cards={cards} /> }
        </div>
    )
}
export default Home
