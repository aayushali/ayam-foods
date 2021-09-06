import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import NatureSection from "./components/NatureSection";
import Introduction from "./components/Introduction";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <NatureSection />
      <Introduction />
    </div>
  );
}

export default App;
