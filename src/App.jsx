import { Analytics } from "@vercel/analytics/react";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Storytelling from "./components/Storytelling.jsx";
import RoadMap from "./components/RoadMap.jsx";
import Visio from "./components/Visio.jsx";
import Testimonials from "./components/Testimonials.jsx";
import FAQ from "./components/FAQ.jsx";
import Footer from "./components/Footer.jsx";
import AboutMe from "./components/AboutMe.jsx";
import PrivacyPolicy from "./components/PrivacyPolicy.jsx";

function App() {
  const path = window.location.pathname;

  // Page dédiée à la politique de confidentialité
  if (
    path === "/politique-de-confidentialite" ||
    path === "/politique-de-confidentialite/"
  ) {
    return (
      <>
        <PrivacyPolicy />
        <Analytics />
      </>
    );
  }

  // Site principal
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
      <Analytics />
    </>
  );
}

export default App;