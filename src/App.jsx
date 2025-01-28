import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Career from "./components/Career";
import Portfolio from "./components/Portfolio";

function App() {
  return (
    <>
      <Navbar />
      <Career />
      <Footer />
      {/* <Portfolio />   //another page */}
    </>
  );
}

export default App;
