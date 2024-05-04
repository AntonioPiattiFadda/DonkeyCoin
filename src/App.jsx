import './App.css';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Nav from './components/Nav';
import HowToBuy from './components/HowToBuy';
import Tokenomics from './components/Tokenomics';
import About from './components/About';

function App() {
  return (
    <div className="appWrapper">
      <Nav />
      <Hero />
      <About />
      <HowToBuy />
      {/* <Ecosystem /> */}
      <Tokenomics />
      {/* <Roadmap /> */}
      <Footer />
    </div>
  );
}

export default App;
