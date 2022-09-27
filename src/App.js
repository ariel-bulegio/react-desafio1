
import './App.css';
import Navbar from './components/Navbar'; 
import ItemsListContainer from './containers/ItemsListContainer';
import ItemDetailContainer from './containers/ItemDetailContainer';
import Footer from './components/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cart from './components/Cart';
import CartContextProvider, { CartContext } from './components/CartContext';


const App = () => {

  return(
    <CartContextProvider>
    <BrowserRouter>
    <Navbar/>
    <Routes>
        <Route path='/' element={<ItemsListContainer/> }/>  
        <Route path='/category/:id' element={<ItemsListContainer/>}/>  
        <Route path='/detalle/:id' element={<ItemDetailContainer/>}/>      
        <Route path='/cart' element={<Cart/>}/> 
    </Routes>  
    <Footer/>
    </BrowserRouter>
    </CartContextProvider>  
  );
}

export default App;
