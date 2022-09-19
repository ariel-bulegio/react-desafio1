import CartWidget from "./CartWidget";


const Navbar = (props) =>{
    return (
  
  <header >
        <nav className="navbar navbar-expand-lg navbar-light bg-light ">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">Bazar - Leon de Juda</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav mx-auto">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Productos</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Nosotros</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Sucursales</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Contacto</a>
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