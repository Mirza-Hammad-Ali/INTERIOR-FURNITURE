
import AnnouncementBar from "../components/common/AnnouncementBar";
import Navbar from "../components/common/Navbar";
import BestSellers from "../components/home/BestSellers";
import FeaturedCategories from "../components/home/FeaturedCategories";
import Hero from "../components/home/Hero";
import PromoBanner from "../components/home/PromoBanner";

function Home() {
  return (
    <>
      <AnnouncementBar />
      <Navbar />
      <main>
        <Hero />
        <FeaturedCategories/>
        <BestSellers/>
        <PromoBanner/>
      </main>
    </>
  );
}

export default Home;
