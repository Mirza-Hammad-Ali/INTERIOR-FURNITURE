
import AnnouncementBar from "../components/common/AnnouncementBar";
import Navbar from "../components/common/Navbar";
import BestSellers from "../components/home/BestSellers";
import FeaturedCategories from "../components/home/FeaturedCategories";
import Hero from "../components/home/Hero";

function Home() {
  return (
    <>
      <AnnouncementBar />
      <Navbar />
      <main>
        <Hero />
        <FeaturedCategories/>
        <BestSellers/>
      </main>
    </>
  );
}

export default Home;
