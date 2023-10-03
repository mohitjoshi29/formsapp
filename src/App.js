import logo from './logo.svg';
import './App.css';
import Login from './Login/Login';
import Register from './Register/Register';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import Home from './Home';
import Learnroute from './Learnroute';
import Footer from './Footer';
function App() {
  return (
    <>
      <BrowserRouter>
      <Learnroute/>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
        </Routes>
        <Footer/>
      </BrowserRouter>
      {/* <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login/>}></Route>
      <Route path='/register' element={<Register/>}></Route>
    </Routes>
    </BrowserRouter> */}
      {/* <Login/> */}
    </>
  );
}

export default App;
