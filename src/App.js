import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import NatureSection from "./components/NatureSection";
import Introduction from "./components/Introduction";
import OurBrands from "./components/OurBrands";
import LeadingSection from "./components/LeadingSection";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <NatureSection />
      <Introduction />
      <OurBrands />
      <LeadingSection />
      <Footer />
    </div>
  );
}

export default App;
