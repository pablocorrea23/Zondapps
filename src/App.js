import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Arranca from './components/Arranca/arranca';
import Productos from './components/Productos/Productos';
import Footer from './components/Footer/Footer';
import  Nosotros  from './components/Nosotros/Nosotros';



function App() {
  return (
    <>
      {/* <Navbar/>
      <Home/>
      <Arranca/> */}
      <Productos/>
      {/* <Nosotros/> */}
      <Footer/> 
      </>
  );
}

export default App;