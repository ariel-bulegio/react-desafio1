
import './App.css';
import Navbar from './components/Navbar'; 
import ItemsListContainer from './containers/ItemsListContainer';
import ItemDetailContainer from './containers/ItemDetailContainer';
import Footer from './components/Footer';


const App = () => {

  return(
    <>
    <Navbar/>
{/* <ItemsListContainer/> */}
    <ItemDetailContainer/>   
    <Footer/>
    </>
  );
}

export default App;
