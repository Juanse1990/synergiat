import "./App.css";
import { Navbar } from "./components/Navbar/Navbar";
import { Recommendations } from "./components/Recommendations/Recommendations";
import { Carrousel2 } from "./components/MiddleCarrousel/MiddleCarrousel";
import { Events } from "./components/Events/Events";
import { Services } from "./components/Services/Services";
import { Rates } from "./components/Rates/Rates";
import { Footer } from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Recommendations />
      <Carrousel2 />
      <Events />
      <Services />
      <Rates />
      <Footer />
    </>
  );
}

export default App;
