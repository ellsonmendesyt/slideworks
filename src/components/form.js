import React,{useState,useEffect} from 'react'

import {rotulos} from  '../tags'
import Tag from './tag';



const Form = () => {

     const [name,setName]=React.useState('');
     const [email,setEmail]=React.useState('');
     const [desc,setDesc]=React.useState('');
     const [color,setColor]=React.useState('orange');
     const [size, setSize]=React.useState('small');
     const [isChecked,setIsChecked]=React.useState(false);


     //tags
     //cria um vetor de falsos do msmo tamanho do vetor de tags
    //  const [marcados, setMarcados]= React.useState(new Array(tags.length).fill(false));


     const [tags,setTags]=React.useState(rotulos);

   const handleSubmit=(e)=>{
       e.preventDefault();
      
        const card = {
            name,email,desc,color,size,tags
        }

        console.log(card)
   }

// ATUALIZAR                             ATUALIZAR                 
   const atualizar=(obj)=>{
       let novasTags=tags.filter((tag)=> tag.id != obj.id);
       let novoObj = {...obj};
       novoObj.marked = !novoObj.marked;
       setTags([...novasTags, novoObj])
   }

//   React.useEffect(()=>{
//  {console.log(tags)};
//   },[tags]);


    return (
        <div className='col'>
          <div className="container">
            <form className="row" onSubmit={handleSubmit}>
  
                <h5 className='text-center my-4'>Create a trello card {isChecked?'   sim':'  nao'}</h5>

               


                <div className="col-md-6 ">
                {/* Name field */}
                <div className="mb-3 ">
                    <label className="form-label" htmlFor='nome'>nome</label>
                    <input value={name} 
                    type="text" 
                    className="form-control w-100" 
                    id='nome' 
                    placeholder="cartao teste" 
                    autoComplete='off'
                    onChange={(e)=>setName(e.target.value)}  //interconeta campo e estado
                    />
                </div>
                {/* Email field */}
                <div className="mb-3 ">
                    <label className="form-label" htmlFor='email'>email</label>
                    <input type="email" 
                    className="form-control w-100" 
                    id='email' 
                    placeholder="demo@host.com" 
                    autoComplete='off'
                    onChange={(e)=>setEmail(e.target.value)}
                    />
                </div>
                {/* Description field */}
                <div className="my-5">
                <textarea className="texto form-control" 
                id="exampleFormControlTextarea1" 
                rows="6" 
                placeholder='Type something...'
                onChange={(e)=>setDesc(e.target.value)}
                ></textarea>
                </div>

                </div>
                {/* PAINEL DA DIREITA */}
                <div className="col-md-6 ">
                  <div className="d-flex justify-content-around mt-4 pt-2 ">

                 <div className="form-check form-check-inline">
                      <input defaultChecked onChange={(e)=>setSize(e.target.value)} className="form-check-input" type="radio" name="size" id="size1" value="small"/>
                       <label className="form-check-label" htmlFor="size1">1</label>
                </div>

                 <div className="form-check form-check-inline">
                   <input onChange={(e)=>setSize(e.target.value)} className="form-check-input" type="radio" name="size" id="size2" value="medium"/>
                   <label className="form-check-label" htmlFor="size2">2</label>
                 </div>

                 <div className="form-check form-check-inline">
                   <input onChange={(e)=>setSize(e.target.value)} className="form-check-input" type="radio" name="size" id="size3" value="big" />
                   <label className="form-check-label" htmlFor="size3">3 </label>
                 </div>                    
                 </div>

                    <div className="select__dropdown mt-5 ms-4 ">
                        <select className="form-select" aria-label="selecionar cores" value={color} onChange={(e)=>setColor(e.target.value)}>
                            <option value="white">branco</option>
                            <option value="orange">laranja</option>
                            <option value="purple" defaultValue >violeta</option>
                        </select>
                    </div>  
                    
                    <div className="tags-wrapper my-4  d-flex py-5 mt-5 ms-4">
                        
                        <div className="tags-box  w-75">


                            {
                                tags.map((tag,i)=>(
                                    <button 
                                    key={i}
                                    className={`${tag.marked ? "btn btn-primary m-1" : "btn btn-outline-primary m-1"}`}
                                    onClick={(e)=>{e.preventDefault();atualizar(tag)}}
                                    >
                                    {tag.name}
                                </button>
                                ))
                            }



                          

                            
                        </div>  
                        <div className="submit-box w-25  d-flex justify-content-end align-items-end">
                            <button className='btn btn-primary w-100' type='submit'>Enviar</button>
                        </div>
                    </div>                  
                </div>56
            </form>
          </div>
        </div>
    )
}

export default Form
