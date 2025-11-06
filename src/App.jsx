import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TechGrid from './components/TechGrid';
import Arsenal from './components/Arsenal';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black text-white font-inter">
      <Navbar />
      <Hero />
      <TechGrid />
      <Arsenal />
      <Footer />
    </div>
  );
}

export default App;
