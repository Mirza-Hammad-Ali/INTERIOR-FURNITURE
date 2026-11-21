import { Link } from "react-router-dom";
import {
  FiArrowRight,
  FiAward,
  FiHeart,
  FiTruck,
  FiShield,
} from "react-icons/fi";

import AnnouncementBar from "../components/common/AnnouncementBar";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";

function About() {
  const features = [
    {
      icon: <FiAward size={28} />,
      title: "Quality Furniture",
      description:
        "Carefully selected furniture designed to bring lasting comfort and elegance into your home.",
    },
    {
      icon: <FiHeart size={28} />,
      title: "Customer First",
      description:
        "Your satisfaction matters to us. We aim to make every shopping experience simple and enjoyable.",
    },
    {
      icon: <FiTruck size={28} />,
      title: "UK Delivery",
      description:
        "We offer furniture delivery across the United Kingdom to help make your house feel like home.",
    },
    {
      icon: <FiShield size={28} />,
      title: "Trusted Shopping",
      description:
        "Enjoy a straightforward shopping experience with clear product information and support.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#faf8f4]">
      <AnnouncementBar />
      <Navbar />

      {/* Hero */}
      <section className="bg-[#514b40] px-5 py-24 text-center sm:py-32">
        <span className="text-xs font-semibold tracking-[4px] text-[#d4b68d]">
          GET TO KNOW US
        </span>

        <h1 className="mt-5 font-serif text-4xl text-white sm:text-6xl">
          About Our Brand
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-sm leading-8 text-white/70 sm:text-base">
          Creating beautiful spaces with furniture that combines comfort,
          quality and timeless elegance.
        </p>
      </section>

      {/* Our Story */}
      <section className="px-5 py-20 sm:py-28">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
          <div>
            <img
              src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1000&q=85"
              alt="Elegant modern living room"
              className="h-[350px] w-full object-cover sm:h-[480px]"
            />
          </div>

          <div>
            <span className="text-xs font-semibold tracking-[3px] text-[#a17c50]">
              OUR STORY
            </span>

            <h2 className="mt-4 font-serif text-3xl leading-tight text-[#29251f] sm:text-5xl">
              Furniture That Makes a House Feel Like Home
            </h2>

            <p className="mt-6 text-sm leading-8 text-[#777064]">
              At INTERIOR FURNITURE UK, we believe that furniture is more than
              just something you put in a room. It creates comfort, expresses
              personality and makes everyday moments special.
            </p>

            <p className="mt-4 text-sm leading-8 text-[#777064]">
              Our collection brings together stylish designs, practical
              functionality and timeless appeal to help you create a home you
              truly love.
            </p>

            <Link
              to="/shop"
              className="mt-8 inline-flex items-center gap-3 bg-[#514b40] px-7 py-4 text-sm font-medium text-white transition hover:bg-[#3d392f]"
            >
              Explore Our Collection
              <FiArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="bg-[#eee9df] px-5 py-20 text-center sm:py-24">
        <div className="mx-auto max-w-3xl">
          <span className="text-xs font-semibold tracking-[3px] text-[#a17c50]">
            OUR MISSION
          </span>

          <h2 className="mt-5 font-serif text-3xl leading-tight text-[#29251f] sm:text-5xl">
            Making Beautiful Living Accessible to Everyone
          </h2>

          <p className="mt-7 text-sm leading-8 text-[#777064] sm:text-base">
            Our mission is to make it easier for people to find furniture that
            suits their lifestyle, complements their space and brings lasting
            comfort to everyday living.
          </p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="px-5 py-20 sm:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="mb-14 text-center">
            <span className="text-xs font-semibold tracking-[3px] text-[#a17c50]">
              WHY CHOOSE US
            </span>

            <h2 className="mt-4 font-serif text-3xl text-[#29251f] sm:text-5xl">
              The Difference Is in the Details
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-[#777064]">
              We focus on the things that make furniture shopping comfortable,
              convenient and enjoyable.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className="border border-[#e9e3d9] bg-white p-8 text-center transition hover:-translate-y-1 hover:shadow-md"
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center bg-[#f2eee6] text-[#a17c50]">
                  {feature.icon}
                </div>

                <h3 className="mt-6 font-serif text-xl text-[#29251f]">
                  {feature.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-[#777064]">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#514b40] px-5 py-20 text-center">
        <h2 className="font-serif text-3xl text-white sm:text-4xl">
          Let's Make Your Home Beautiful
        </h2>

        <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-white/70">
          Discover furniture designed to make your living spaces more
          comfortable and elegant.
        </p>

        <Link
          to="/shop"
          className="mt-8 inline-flex items-center gap-3 bg-[#d4b68d] px-8 py-4 text-sm font-semibold text-[#29251f] transition hover:bg-white"
        >
          Shop Now
          <FiArrowRight />
        </Link>
      </section>

      <Footer />
    </div>
  );
}

export default About;
