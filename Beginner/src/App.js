import Analytics from "./components/Analytics";
import Card from "./components/Card";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import NewsLetter from "./components/NewsLetter";


function App() {
  return (
    <div>
        <NavBar />
        <Hero />
        <Analytics />
        <NewsLetter />
        <Card />
        <Footer />
    </div>
  );
}

export default App;
