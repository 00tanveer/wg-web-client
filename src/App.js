import Nav from './nav/Nav';
import LandingSection from './landing/LandingSection';
import SecondSection from './section-2/SecondSection';
import './App.css'
import ThirdSection from './section-3/ThirdSection';
import FourthSection from './section-4/FourthSection';
import Footer from './footer/Footer';

function App() {
  return (
    <div className="App">
      <Nav />
      <LandingSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <Footer />
    </div>
  );
}

export default App;
