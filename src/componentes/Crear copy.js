import React from 'react';
import {
    BrowserRouter,
    Routes,
    Route,
    Link,
  } from "react-router-dom";

class Crear extends React.Component {
    constructor(props) {
        super(props);
        this.state = {nombre: '',
                      corre:'',   
                     };

        this.cambioValor = this.cambioValor.bind(this);
        this.enviarDatosCrear = this.enviarDatosCrear.bind(this);
    }

    cambioValor(e) {
        const state = this.state;
        state[e.target.name] =  e.target.value;
        this.setState({state}); 
    }
 

    enviarDatosCrear = (e)=>{
        e.preventDefault(); 
        alert('A name was submitted: ' + this.state.value);
    }


    render() {
         
        return (
            <div className="card">
                <div className="card-header">
                    Empleados
                </div>
                <div className="card-body">
                    <form onSubmit={this.enviarDatosCrear}>
                        <div className="form-group">
                            <label htmlFor="">Nombre</label>
                            <input type="text" name="nombre_for" onChange={this.cambioValor} value={this.state.nombre_for} id="nombre_for" className="form-control"
                                placeholder="" aria-describedby="helpId" />
                            <small id="helpId" className="text-muted">Ingresa Nombre</small>
                        </div>

                        <div className="form-group">
                            <label htmlFor="">Correo</label>
                            <input type="text" name="correo_for" onChange={this.cambioValor} value={this.state.correo_for} id="correo_for" className="form-control"
                                placeholder="" aria-describedby="helpId" />
                            <small id="helpId" className="text-muted">Ingrese Correo</small>
                        </div>
                        <br></br>
                        <br></br> 

                        <div className="btn-group" role="group" aria-label="">
                            <button type="submit" className="btn btn-success">Agregar Empleado</button>
                        </div> 
                        <br></br> 
                        <div className="btn-group" role="group" aria-label="">
                            <Link className="btn btn-danger" to={"/"}>Cacelar</Link>
                        </div>
                    </form>
                </div>
                <div className="card-footer text-muted">

                </div>
            </div>
        );
    }
}

export default Crear;