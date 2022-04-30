import './App.css';
import Listar from "./componentes/Listar";
import Crear from "./componentes/Crear";
import Editar from "./componentes/Editar";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";


function App() {
  return (
    <BrowserRouter>

      <nav className="navbar navbar-expand navbar-light bg-light">
        <div className="nav navbar-nav">
          <Link className="nav-item nav-link active" to={"/"}>Home <span className="sr-only">(current)</span></Link>
          <Link className="nav-item nav-link" to={"/crear"}>Crear empleado</Link>
          <Link className="nav-item nav-link" to={"/editar"}>Editar empleado</Link>
        </div>
      </nav>
      <div className='container'>
        <br></br>

        <Routes>
          <Route path="/" element={<Listar />}></Route>
          <Route path="/crear" element={<Crear />}></Route>
          <Route path="/editar/:id" element={<Editar />}></Route>
        </Routes>

      </div>

    </BrowserRouter>
  );
}

export default App;
