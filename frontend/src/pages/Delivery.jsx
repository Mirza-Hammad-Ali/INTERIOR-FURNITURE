
import { Link } from "react-router-dom";
import {
  FiArrowLeft,
  FiTruck,
  FiMapPin,
  FiClock,
  FiPackage,
} from "react-icons/fi";

import AnnouncementBar from "../components/common/AnnouncementBar";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";

function Delivery() {
  const deliveryFeatures = [
    {
      icon: <FiMapPin size={28} />,
      title: "UK-Wide Delivery",
      description:
        "We aim to deliver our furniture to customers across the United Kingdom.",
    },
    {
      icon: <FiTruck size={28} />,
      title: "Careful Delivery",
      description:
        "Furniture delivery should be handled with care to help protect your purchase.",
    },
    {
      icon: <FiClock size={28} />,
      title: "Delivery Updates",
      description:
        "Our team will confirm delivery arrangements and estimated timings for your order.",
    },
    {
      icon: <FiPackage size={28} />,
      title: "Order Information",
      description:
        "Keep your order details available so our team can assist with delivery enquiries.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#faf8f4]">
      <AnnouncementBar />
      <Navbar />

      {/* Hero */}
      <section className="bg-[#514b40] px-5 py-20 text-center sm:py-24">
        <div className="mx-auto flex h-16 w-16 items-center justify-center bg-white/10 text-[#d4b68d]">
          <FiTruck size={30} />
        </div>

        <h1 className="mt-6 font-serif text-4xl text-white sm:text-5xl">
          Delivery Information
        </h1>

        <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-white/70">
          Everything you need to know about receiving your furniture
          from INTERIOR FURNITURE UK.
        </p>
      </section>

      {/* Main Content */}
      <section className="px-5 py-16 sm:py-20">
        <div className="mx-auto max-w-5xl">
          <Link
            to="/"
            className="mb-10 inline-flex items-center gap-2 text-sm text-[#777064] hover:text-[#a17c50]"
          >
            <FiArrowLeft />
            Back to Home
          </Link>

          <div className="grid gap-6 sm:grid-cols-2">
            {deliveryFeatures.map((feature, index) => (
              <div
                key={index}
                className="border border-[#e9e3d9] bg-white p-8"
              >
                <div className="flex h-14 w-14 items-center justify-center bg-[#f2eee6] text-[#a17c50]">
                  {feature.icon}
                </div>

                <h2 className="mt-6 font-serif text-2xl text-[#29251f]">
                  {feature.title}
                </h2>

                <p className="mt-3 text-sm leading-7 text-[#777064]">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          {/* Delivery Details */}
          <div className="mt-12 border border-[#e9e3d9] bg-white p-7 sm:p-10">
            <h2 className="font-serif text-3xl text-[#29251f]">
              Our Delivery Process
            </h2>

            <div className="mt-8 space-y-7">
              <div>
                <h3 className="font-semibold text-[#514b40]">
                  1. Place Your Order
                </h3>
                <p className="mt-2 text-sm leading-7 text-[#777064]">
                  Select your furniture, add it to your cart and provide
                  your delivery details during checkout.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-[#514b40]">
                  2. Order Confirmation
                </h3>
                <p className="mt-2 text-sm leading-7 text-[#777064]">
                  Our team can confirm order details and discuss
                  delivery arrangements with you.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-[#514b40]">
                  3. Delivery Arrangement
                </h3>
                <p className="mt-2 text-sm leading-7 text-[#777064]">
                  Delivery availability, estimated dates and any
                  applicable charges will be confirmed before dispatch.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-[#514b40]">
                  4. Receive Your Furniture
                </h3>
                <p className="mt-2 text-sm leading-7 text-[#777064]">
                  Make sure someone is available at the agreed delivery
                  address to receive your order.
                </p>
              </div>
            </div>
          </div>

          {/* Important Information */}
          <div className="mt-8 bg-[#eee9df] p-7 sm:p-9">
            <h2 className="font-serif text-2xl text-[#29251f]">
              Important Delivery Information
            </h2>

            <ul className="mt-5 space-y-3 text-sm leading-7 text-[#777064]">
              <li>• Please provide a complete and accurate delivery address.</li>
              <li>• Delivery availability and estimated timings require confirmation.</li>
              <li>• Any applicable delivery charges will be communicated before dispatch.</li>
              <li>• Please contact us if your delivery details need to be changed.</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="mt-12 text-center">
            <h2 className="font-serif text-3xl text-[#29251f]">
              Need Help With Delivery?
            </h2>

            <p className="mt-4 text-sm text-[#777064]">
              Our team is here to help with your delivery questions.
            </p>

            <Link
              to="/contact"
              className="mt-7 inline-flex items-center justify-center bg-[#514b40] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#3d392f]"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Delivery;
