
import './App.css';
import Navbar from './components/Navbar'; 
import ItemsListContainer from './containers/ItemsListContainer';
import ItemDetailContainer from './containers/ItemDetailContainer';
import Footer from './components/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';



const App = () => {

  return(
    <BrowserRouter>
    <Navbar/>
    <Routes>
        <Route path='/' element={<ItemsListContainer/> }/>  
        <Route path='/category/:id' element={<ItemsListContainer/>}/>  
        <Route path='/detalle/:id' element={<ItemDetailContainer/>}/>      
    </Routes>  
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
