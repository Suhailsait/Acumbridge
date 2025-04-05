import "./App.css";
import Advantages from "./components/advantages";
import Applications from "./components/applications";
import CostEffectiveness from "./components/cost-effectiveness";
import Features from "./components/features";
import Footer from "./components/footer";
import Future from "./components/future";
import Hero from "./components/hero";
import Navbar from "./components/navbar";
import { ScrollToTop } from "./components/scroll-to-top";
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Hero />
      <Features />
      <Applications />
      <CostEffectiveness />
      <Advantages />
      <Future />
      <ScrollToTop /> 
      <Footer />
    </Router>
    </>
  );
}

export default App;
