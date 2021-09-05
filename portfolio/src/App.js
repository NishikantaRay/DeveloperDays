import './App.css';
import About from './components/About';
import Achieve from './components/Achieve';
import Footer from './components/Footer';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
function App() {
  return (
    <>
    <Navbar></Navbar>
    <Home></Home>
    <About></About>
    <Achieve></Achieve>
    <Projects></Projects>
    <Footer></Footer>
    </>
  );
}


export default App;
