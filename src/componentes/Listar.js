import React from 'react'; 
import {
    BrowserRouter,
    Routes,
    Route,
    Link,
} from "react-router-dom";

class Listar extends React.Component {
    constructor(props) {
        super(props);
    }
    state = { datosCargados: false, empleados: [] }
    

    //Metodo para cargar datos
    cargarDatos() {
        fetch("http://localhost/empleados/")
            .then(res => res.json())
            .then(
                (datosCargados) => {

                    this.setState({
                        isLoaded: true,
                        items: datosCargados.items,
                        empleados: datosCargados,
                        datosCargados: true
                    });
                    // console.log(datosCargados);
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

    borrarDatos(id){
        console.log(id);
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' }, 
        };
        fetch('http://localhost/empleados/?borrar='+id, requestOptions)
            .then(response => response.json())
            .then(
                (datosCargados) => {

                    this.setState({
                        
                    });
                    this.cargarDatos();
                    console.log(datosCargados);  
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

    //Consultar datos o consumir appi
    componentDidMount() {
        this.cargarDatos();
    }

    render() {
        const { datosCargados, empleados } = this.state
        if (!datosCargados) {
            return (
                <div>Cargando...</div>
            )
        } else {

            return (
                <div className="card">
                    <div className="card-header">
                        <Link className="btn btn-outline-success" to={"/crear"}>Agregar Empleado +</Link>
                    </div>
                    <div className="card-body">
                    <h4>Lista de Empleados</h4>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>NOMBRE</th>
                                    <th>CORREO</th>
                                    <th>ACCIONES</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    empleados.map(
                                        (empleado) => (
                                            <tr key={empleado.id}>
                                                <td >{empleado.id}</td>
                                                <td>{empleado.nombre}</td>
                                                <td>{empleado.correo}</td>
                                                <td>
                                                    <div className="btn-group" role="group" aria-label="">
                                                        <Link className="btn btn-warning" to={"/editar/"+empleado.id}>Editar</Link>
                                                        <button onClick={()=>this.borrarDatos(empleado.id)} 
                                                            type="button" className="btn btn-danger">Borrar
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                        )
                                    )
                                }
                            </tbody>
                        </table>
                    </div>
                    <div className='card-footer text-muted'></div>
                </div>
            );
        }
    }
}

export default Listar;