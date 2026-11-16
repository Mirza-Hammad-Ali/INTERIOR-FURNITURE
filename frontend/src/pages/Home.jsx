
import AnnouncementBar from "../components/common/AnnouncementBar";
import Navbar from "../components/common/Navbar";
import BestSellers from "../components/home/BestSellers";
import FeaturedCategories from "../components/home/FeaturedCategories";
import Hero from "../components/home/Hero";
import NewArrivals from "../components/home/NewArrivals";
import Newsletter from "../components/home/Newsletter";
import PromoBanner from "../components/home/PromoBanner";
import Testimonials from "../components/home/Testimonials";
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
        <Testimonials/>
        <Newsletter/>
      </main>
    </>
  );
}

export default Home;
