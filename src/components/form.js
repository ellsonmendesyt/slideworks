import React,{useState,useEffect} from 'react'

import {rotulos} from  '../tags'
import Torrada from './torrada';

import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



toast.configure();

const Form = () => {

     const [name,setName]=React.useState('');
     const [email,setEmail]=React.useState('');
     const [desc,setDesc]=React.useState('');
     const [list,setList]=React.useState('61170decc241de1182844f30');
     const [pos, setPos]=React.useState('top');
     const [tags,setTags]=React.useState(rotulos);
    

     // eu deveria por isso em variavel de ambiente, mas como voces precisam testar deixei as chaves :(
     const key='9d8a7f134d73959e67911886ac9aa64b';
     const token='a0224ee5322b96887dbc583374e58a68ecd2e443f6e1a66e500e6d59aed7809c';
     const listId='61170decc241de1182844f30';
     const boardId='61170decc241de1182844f2f';
     const cardId='61170e13ba2a341bf6ae9833';


    const notify=()=>{
        toast.success('Cartão criado com sucesso', {position: toast.POSITION.TOP_CENTER, autoClose:2000});
    }


   const handleSubmit=(e)=>{
       e.preventDefault();
       
        const card = {
            name,email,desc,list,pos,tags
        }
          const activeLabels = tags.filter((tag)=> tag.marked);

         const labels= activeLabels.map((tag)=>tag.id);
        
         const url = "https://api.trello.com/1/cards";

        fetch(`${url}?key=${key}&token=${token}&idList=${list}&name=${card.name}&desc=${card.desc}&idLabels=${labels}&pos=${card.pos}`,{
            method:'POST',
            headers:{"Content-Type":"application/json"}

        })
        .then(()=>{notify() })
        .catch(err=>console.log(err));
       //nofificar
    //    notify();
       limpartCampos();
     
   }

// ATUALIZAR  recria a lista alternando o estado de marcada                                                                           
   const atualizar=(obj)=>{
       let novasTags=tags.filter((tag)=> tag.id != obj.id);
       let novoObj = {...obj};
       novoObj.marked = !novoObj.marked;
       setTags([novoObj,...novasTags])
   }

   const resetTags=()=>{
    tags.forEach(t=>{t.marked=false});
  }


    const limpartCampos=()=>{
        setName('');
        setEmail('');
        setDesc('');
        setList('1170decc241de1182844f30');
        setPos('top');
        resetTags();
    }


    return (
        <div className='col'>
          <div className="container">
            <form className="row meuform" onSubmit={handleSubmit}>
  
                <h6 className='text-center main-title'>Create a trello card </h6>
                <div className="col-md-6 ">
                {/* Name field */}
                <div className="mb-3 ">
                    <label className="form-label" htmlFor='nome'>nome</label>
                    <input 
                    value={name} 
                    required
                    type="text" 
                    className="form-control w-100" 
                    id='nome' 
                    placeholder="Digite o nome do cartao" 
                    autoComplete='off'
                    onChange={(e)=>setName(e.target.value)}  //interconeta campo e estado
                    />
                </div>
                {/* Email field */}

                <div className="mb-3 ">
                    <label value={email} className="form-label" htmlFor='email'>email</label>
                    <input type="email" 
                    required
                    value={email}
                    className="form-control w-100" 
                    id='email' 
                    placeholder="Digite o email" 
                    autoComplete='off'
                    onChange={(e)=>setEmail(e.target.value)} 
                    />
                </div>
                {/* Description field */}

                <div className="my-5">
                <label value={email} className="form-label" htmlFor='descricao'>descrição</label>
                <textarea 
                value={desc}
                required
                className="texto form-control" 
                id="descricao" 
                rows="6" 
                placeholder='Digite a descrição...'
                onChange={(e)=>setDesc(e.target.value)}
                ></textarea>
                </div>

                </div>
                {/* PAINEL DA DIREITA */}
                <div className="col-md-6 ">
                  <div title="Posição do carto na fila" className="d-flex justify-content-around mt-4 pt-2 ">

                 <div className="form-check form-check-inline ">
                      <input checked onChange={(e)=>setPos(e.target.value)} className="form-check-input box" type="radio" name="pos" id="top" value="top"/>
                       <label className="form-check-label" htmlFor="top">inicio</label>
                </div>

                 <div className="form-check form-check-inline">
                   <input  onChange={(e)=>setPos(e.target.value)} className="form-check-input" type="radio" name="pos" id="meio" value="4"/>
                   <label className="form-check-label" htmlFor="meio">meio</label>
                 </div>

                 <div className="form-check form-check-inline">
                   <input  onChange={(e)=>setPos(e.target.value)} className="form-check-input" type="radio" name="pos" id="fim" value="bottom" />
                   <label className="form-check-label" htmlFor="fim">fim </label>
                 </div>                    
                 </div>

                    <div className=" mt-5 ms-4 ">
                        <label className='mb-1' >Selecione a lista do cartão</label>
                        <select className="form-select selecao" aria-label="selecionar a lista" value={list} onChange={(e)=>setList(e.target.value)}>
                            <option className='opcao' value="61170decc241de1182844f30">A fazer</option>
                            <option className='opcao' value="61170decc241de1182844f31">Em andamento</option>
                            <option className='opcao' value="61170decc241de1182844f32" defaultValue >Completo</option>
                        </select>
                    </div>  
                    
                    <div className="tags-wrapper my-4  d-flex py-5 mt-2 ms-4">
                        
                        <div className="tags-box  w-75">
                            <h6 className='tags-title'>Tags</h6>
                            {
                                tags && tags.map((tag,i)=>(
                                    <button 
                                    key={i}
                                    className={`${tag?.marked ? "botao ativo m-1" : "botao m-1"}`}
                                    onClick={(e)=>{e.preventDefault();atualizar(tag)}}
                                    >
                                    {tag && tag.name}
                                </button>
                                ))
                            }
                        </div>  
                        <div className="submit-box w-25  d-flex justify-content-end align-items-end">
                            <button className='btn btn-primary w-100' type='submit'>Enviar</button>
                        </div>
                    </div>                  
                </div>
            </form>
          </div>
        </div>
    )
}

export default Form;