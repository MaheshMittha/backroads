import "./App.css";
import About from "./Component/About";
import Footer from "./Component/Footer";
import Hero from "./Component/Hero";
import Navbar from "./Component/Navbar";
import Services from "./Component/Services";
import Tours from "./Component/Tours";

function App() {
  return (
    <>
   <Navbar/>   
   <Hero/>
   <About/>
   <Services/>
   <Tours/>
   <Footer/>
    </>
  );
}

export default App;
