import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";


const Navbar = (props) =>{
    return (
  
  <header >
        <nav className="navbar navbar-expand-lg navbar-light bg-light ">
    <div className="container-fluid">
    <Link to="/" ><p className="navbar-brand" >Bazar - Leon de Juda</p></Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav mx-auto">
          <li className="nav-item">
           <Link to="/category/1" > <p className="nav-link active" >Ollas</p></Link>
          </li>
          <li className="nav-item">
          <Link to="/category/2" > <p className="nav-link active">Cubiertos</p></Link>
          </li>
          <li className="nav-item">
          <Link to="/category/3" > <p className="nav-link active" >Vidrio</p></Link>
          </li>
          <li className="nav-item">
          <Link to="/category/4" > <p className="nav-link active">Porcelana</p></Link>
          </li>
        </ul>
        <ul className="navbar-nav ms-auto">
        <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Entrar</a>
            
          </li>   
          <li className="nav-item">
          <button type="button" className="btn btn-dark">Registrate</button>
          </li>   
       </ul>
       <CartWidget/>
      </div>
    </div>
  </nav>
 
      </header>
  
    )
  }

  export default Navbar;