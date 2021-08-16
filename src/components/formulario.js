import React from 'react'
// COMPONENTE NAO USADO, implementado o Form em seu lugar
const Formulario = () => {
    return (
        <form>
            <div className="container">
         <div className="row mt-5">
             <div className="col-md-6 ">
             <div class="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input type="text" className="form-control" id="name" placeholder="John Doe"/>
            </div>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">E-mail</label>
                <input type="email" className="form-control" id="email" placeholder="error@mail.com"/>
            </div>
            <div className="mt-3 mb-3">
                <textarea className="texto form-control" id="exampleFormControlTextarea1" rows="6" placeholder='Type something...'></textarea>
            </div>
             </div>

             <div className="col-md-6 ">
               <div className="d-flex justify-content-around mt-5">
               <div className="form-check form-check-inline">
                <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1"/>
                <label className="form-check-label" for="inlineCheckbox1">Opção 1</label>
                </div>
                <div className="form-check form-check-inline">
                <input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2"/>
                <label className="form-check-label" for="inlineCheckbox2">Opção 2</label>
                </div>
                <div className="form-check form-check-inline">
                <input className="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3"/>
                <label className="form-check-label" for="inlineCheckbox3">Opção 3</label>
                </div>
               </div>
               <div className="select__dropdown mt-5 ms-4 ">
                    <div className="dropdown ">
                    <button className=" w-100 btn  dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                        Dropdown
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        <li><a className="dropdown-item" href="#">Action</a></li>
                        <li><a className="dropdown-item" href="#">Another action</a></li>
                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                    </div>
               </div>
               <div className="tags-outer-wrapper mt-5">
                <div className="tags-inner-wrapper">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-10">
                                <label className="opcao o"> Web&nbsp;&nbsp;<input value='web' type="checkbox"/><span class="checkmark"></span></label>
                                <label className="opcao o"> illustration&nbsp;&nbsp;<input value='illustration' type="checkbox"/><span class="checkmark"></span></label>

                                {/* <label className="opcao o"> graphics&nbsp;&nbsp;<input type="checkbox"/><span class="checkmark"></span></label>
                                <label className="opcao o"> ui&nbsp;&nbsp;<input type="checkbox"/><span class="checkmark"></span></label>
                                <label className="opcao o"> design&nbsp;&nbsp;<input type="checkbox"/><span class="checkmark"></span></label>
                                <label className="opcao o"> app&nbsp;&nbsp;<input type="checkbox"/><span class="checkmark"></span></label>
                                <label className="opcao o"> iphone&nbsp;&nbsp;<input type="checkbox"/><span class="checkmark"></span></label>
                                <label className="opcao o"> interface&nbsp;&nbsp;<input type="checkbox"/><span class="checkmark"></span></label>
                                <label className="opcao o"> icon&nbsp;&nbsp;<input type="checkbox"/><span class="checkmark"></span></label>
                                <label className="opcao o"> web design&nbsp;&nbsp;<input type="checkbox"/><span class="checkmark"></span></label> */}
                            </div>
                            <div className="col-md-2 d-flex align-items-end justify-content-end">
                                <button type='submit' className="px-3 btn btn-primary">Enviar</button>
                            </div>
                        </div>
                    </div>
                
                </div>

               </div>
             </div>
         </div>
            </div>
        </form>
    )
}

export default Formulario
