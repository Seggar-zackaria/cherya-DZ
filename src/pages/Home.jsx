import Navbar from "../component/NavBar/Navbar";
import Carousel from "../component/HeroSection/HeroSlider";
import Card from "../component/Cards/Card";
import CategoryCard from "../component/Cards/CategoryCard";
import Info from "../component/InfoSection/Info";
import Footer from "../component/footer/footer";

function Home() {
  return (
    <>
      <Navbar />
      <Carousel />
      <Card />
      <CategoryCard />
      <Info />
      <Footer />
    </>
  );
}

export default Home;
