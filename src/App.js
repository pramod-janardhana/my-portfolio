import TopNavBar from "./components/TopNavBar";
import About from "./views/About";
import Skills from "./views/Skills";
import Experience from "./views/Experience";
import Certifications from "./views/Certifications";
import Footer from "./views/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <TopNavBar />
      <About />
      <Skills />
      <Experience />
      <Certifications />
      <Footer />
    </div>
  );
}

export default App;
