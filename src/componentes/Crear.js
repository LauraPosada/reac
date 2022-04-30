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
        this.state = {nombre_for: '',
                      correo_for:'',   
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
        const {nombre_for,correo_for} = this.state 
        
        var datosEnviar = {
            nombre: nombre_for,
            correo: correo_for
        } 
 

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(datosEnviar)
        };
        fetch('http://localhost/empleados/?insertar=1', requestOptions)
            .then(response => response.json())
            .then(
                (datosCargados) => {

                    this.setState({
                        
                    });
                    console.log(datosCargados);  
                    window.location.href = "/"
                },
                // Nota: es importante manejar errores aquí y no en 
                // un bloque catch() para que no interceptemos errores
                // de errores reales en los componentes.
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            ) 
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
                            <input type="text" name="nombre_for" onChange={this.cambioValor} 
                                value={this.state.value} className="form-control"
                                placeholder="" aria-describedby="helpId" />
                            <small id="helpId" className="text-muted">Ingresa Nombre</small>
                        </div>

                        <div className="form-group">
                            <label htmlFor="">Correo</label>
                            <input type="text" name="correo_for" onChange={this.cambioValor} 
                                value={this.state.value} className="form-control"
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