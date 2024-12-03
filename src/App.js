import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import MyServices from "./components/MyServices";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";

const App = () => {
  return (
    <div className="py-7 px-4 md:py-9 md:px-12 lg:py-11 lg:px-24">
      <Navbar />
      <HeroSection />
      <About />
      <MyServices />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
