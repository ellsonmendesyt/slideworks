import React,{useRef,useEffect,useState} from 'react'

import {Toast} from 'bootstrap';

//implementaçao do toast

const Torrada = ({titulo,msg}) => {

    const torradaRef = useRef();
    const [isVisible,setIsVisible]=useState(false);

    const [info,setInfo]=useState(msg);
    const [title,setTitle]=useState(titulo);

    useEffect(()=>{

        //pega o elemento da dom virtual
        let toastEl = torradaRef.current; 

        new Toast(toastEl, {autohide:true});
            let toastObj = Toast.getInstance(toastEl);

            isVisible? toastObj.show():toastObj.hide();
            
            let desligar = function(){setIsVisible(false)}
            toastEl.addEventListener('hidden.bs.toast', desligar);

            return ()=>toastEl.removeEventListener('hidden.bs.toast',desligar);
    });


    return (
        <div className='py-5 ' >
        
            <button
            className={isVisible?'btn btn-primary':'btn btn-warning'}
            onClick={()=>{setIsVisible(isVisible => !isVisible)}}
            >{isVisible?'esconder':'mostrar'}</button>

            <div className={'toast position-absolute top-0 end-0 m-4'} ref={torradaRef}>
             <div className="toast-header">
                 <h4>{title}</h4>
                 <button className='btn btn-close ms-auto' onClick={()=>{setIsVisible(isVisible=>!isVisible)}}></button>
             </div>
             <div className="toast-body">
                 <h6>{info}</h6>
             </div>
            </div>
        </div>
    )
}

export default Torrada