import Hero from "../components/Hero";
import AnimationBelt from "../components/AnimationBelt";
import CategoriesStrip from "../components/CategoriesStrip";
import AboutStats from "../components/AboutStats";
import Footer from "../components/Footer";

function Home() {
  return (
    <div>
      <Hero />
      <AnimationBelt />
      <CategoriesStrip />
      <AboutStats />
      <Footer />
    </div>
  );
}

export default Home;
