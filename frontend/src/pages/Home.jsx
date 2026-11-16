
import AnnouncementBar from "../components/common/AnnouncementBar";
import Navbar from "../components/common/Navbar";
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
      </main>
    </>
  );
}

export default Home;
