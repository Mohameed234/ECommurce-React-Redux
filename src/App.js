
import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavPar from './components/NavPar/Nav';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import Scrollbtn from './components/Scrollbtn/Scrollbtn';
import Products from './components/Products/Products';
import Login from './components/Login/Login';
import Cart from './components/Cart/Cart';

function App() {
  return (
    <div className="App">
      <NavPar/>
      
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='products' element={<Products/>}/>
        <Route path='login' element={<Login/>}/>
        <Route path='cart' element={<Cart/>}/>
      </Routes>
      <Footer/>
      <Scrollbtn/>
    </div>
  );
}

export default App;
