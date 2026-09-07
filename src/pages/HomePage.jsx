import Header from "../components/Header.jsx";
import Hero from "../components/Hero.jsx";
import AboutMe from "../components/AboutMe.jsx";
import Storytelling from "../components/Storytelling.jsx";
import RoadMap from "../components/RoadMap.jsx";
import Visio from "../components/Visio.jsx";
import Testimonials from "../components/Testimonials.jsx";
import FAQ from "../components/FAQ.jsx";
import Footer from "../components/Footer.jsx";

function HomePage() {
  return (
    <>
      <Header />
      <Hero />
      <AboutMe />
      <Storytelling />
      <RoadMap />
      <Visio />
      <Testimonials />
      <FAQ />
      <Footer />
    </>
  );
}

export default HomePage;