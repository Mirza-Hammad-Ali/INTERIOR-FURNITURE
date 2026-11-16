
import AnnouncementBar from "../components/common/AnnouncementBar";
import Navbar from "../components/common/Navbar";
import BestSellers from "../components/home/BestSellers";
import FeaturedCategories from "../components/home/FeaturedCategories";
import Hero from "../components/home/Hero";
import NewArrivals from "../components/home/NewArrivals";
import PromoBanner from "../components/home/PromoBanner";
import WhyChooseUs from "../components/home/WhyChooseUs";

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
        <NewArrivals/>
        <WhyChooseUs/>
      </main>
    </>
  );
}

export default Home;
