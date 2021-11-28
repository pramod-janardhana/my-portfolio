import { ChakraProvider } from "@chakra-ui/react";
import TopNavBar from "./components/TopNavBar";
import About from "./views/About";
import Skills from "./views/Skills";
import Experience from "./views/Experience";
import Certifications from "./views/Certifications";
import Footer from "./views/Footer";
import "./App.css";

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <TopNavBar />
        <About />
        <Skills />
        <Experience />
        <Certifications />
        <Footer />
      </div>
    </ChakraProvider>
  );
}

export default App;
