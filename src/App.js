import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'; 
import ItemListContainer from './components/ItemListContainer';


const App = () => {

  return(
    <>
    <Navbar/>
    <ItemListContainer greeting = "Desafio Cumplido"/>
    </>
  );
}

export default App;
