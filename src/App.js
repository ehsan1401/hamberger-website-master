import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Components/MainPages/HomePage';
import Navigation from './Components/Nav&Foot/Navigation';
import Footer from './Components/Nav&Foot/Footer';
import NotFounded from './Components/MainPages/NotFounded';
import Food from './Components/MainPages/FoodPage';
import Drinks from './Components/MainPages/Drinks';
import Login from './Components/Login/Login';
import SignUp from './Components/Login/SignUp';
import Pizza from './Components/MainPages/Pizza';





function App() {
  return (
    <div className='relative'>
      <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route path='/Foods/:id' element={<Food/>} />
        <Route path='/Drinks/:id' element={<Drinks/>} />
        <Route path='/Login' element={<Login/>} />
        <Route path='/SignUp' element={<SignUp/>} />
        <Route path='/Pizza/:name' element={<Pizza/>} />

        <Route path='*' element={<NotFounded/>} />

      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
