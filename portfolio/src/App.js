import About from "./components/About";
import AllInOne from "./components/Skills";
import Footer from "./components/Footer";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Work from "./components/Work";
// import Support from "./components/Support";
import Skills from "./components/Skills";
import Contact from "./components/Contact";


function App() {
  return (
    <div>
        <NavBar />
        <Home />
        <About />
        <Skills />
        <Work />
        <Contact />
        {/* <Footer /> */}
    </div>
  );
}

export default App;
