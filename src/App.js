import logo from './logo.svg';
import './App.css';

function App() {
  return (

    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">SkinS - DOTA</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav mx-auto">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Sinks</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Trucos</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Estrategias</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Ayuda</a>
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
    </div>
  </div>
</nav>
    </header>
    
  );
}

export default App;
