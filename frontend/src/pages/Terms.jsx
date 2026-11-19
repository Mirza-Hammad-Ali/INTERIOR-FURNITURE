
import { Link } from "react-router-dom";
import { FiArrowLeft, FiFileText } from "react-icons/fi";

import AnnouncementBar from "../components/common/AnnouncementBar";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";

function Terms() {
  return (
    <div className="min-h-screen bg-[#faf8f4]">
      <AnnouncementBar />
      <Navbar />

      <section className="bg-[#514b40] px-5 py-20 text-center sm:py-24">
        <div className="mx-auto flex h-16 w-16 items-center justify-center bg-white/10 text-[#d4b68d]">
          <FiFileText size={30} />
        </div>

        <h1 className="mt-6 font-serif text-4xl text-white sm:text-5xl">
          Terms & Conditions
        </h1>

        <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-white/70">
          Please read these terms before using the INTERIOR FURNITURE UK website.
        </p>
      </section>

      <section className="px-5 py-16 sm:py-20">
        <div className="mx-auto max-w-4xl">
          <Link
            to="/"
            className="mb-10 inline-flex items-center gap-2 text-sm text-[#777064] hover:text-[#a17c50]"
          >
            <FiArrowLeft />
            Back to Home
          </Link>

          <div className="border border-[#e9e3d9] bg-white p-6 sm:p-10">
            <p className="text-sm leading-8 text-[#777064]">
              Welcome to INTERIOR FURNITURE UK. By accessing or using
              our website, you agree to these Terms & Conditions.
              Please read them carefully before placing an order.
            </p>

            <div className="mt-10 space-y-9">
              <div>
                <h2 className="font-serif text-2xl text-[#29251f]">
                  1. Website Use
                </h2>
                <p className="mt-3 text-sm leading-8 text-[#777064]">
                  You agree to use this website lawfully and not to
                  interfere with its operation, security or availability.
                  You must provide accurate information when using our services.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl text-[#29251f]">
                  2. Products & Pricing
                </h2>
                <p className="mt-3 text-sm leading-8 text-[#777064]">
                  We aim to display accurate product descriptions,
                  photographs and prices. Product colours and appearance
                  may vary slightly depending on screens and lighting.
                  Prices are displayed in British Pounds (£).
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl text-[#29251f]">
                  3. Orders
                </h2>
                <p className="mt-3 text-sm leading-8 text-[#777064]">
                  When placing an order, you must provide complete and
                  accurate contact and delivery details. An order request
                  is subject to acceptance and availability confirmation
                  by the business.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl text-[#29251f]">
                  4. Payment
                </h2>
                <p className="mt-3 text-sm leading-8 text-[#777064]">
                  Cash on Delivery is the payment method currently
                  presented on our website. Payment arrangements may
                  be updated as our services develop.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl text-[#29251f]">
                  5. Delivery
                </h2>
                <p className="mt-3 text-sm leading-8 text-[#777064]">
                  Delivery availability, estimated times and any
                  applicable charges will be communicated during the
                  ordering process or confirmed by our team.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl text-[#29251f]">
                  6. Returns & Refunds
                </h2>
                <p className="mt-3 text-sm leading-8 text-[#777064]">
                  Returns, cancellations and refunds are subject to
                  applicable consumer law and our returns policy.
                  Nothing in these terms limits your statutory rights.
                </p>
                <Link
                  to="/returns"
                  className="mt-4 inline-block text-sm font-semibold text-[#a17c50] underline underline-offset-4"
                >
                  View Returns Policy
                </Link>
              </div>

              <div>
                <h2 className="font-serif text-2xl text-[#29251f]">
                  7. Intellectual Property
                </h2>
                <p className="mt-3 text-sm leading-8 text-[#777064]">
                  Website content, branding, text, graphics and other
                  materials may be protected by intellectual property
                  laws. They must not be copied or used commercially
                  without appropriate permission.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl text-[#29251f]">
                  8. Changes to These Terms
                </h2>
                <p className="mt-3 text-sm leading-8 text-[#777064]">
                  We may update these Terms & Conditions when our
                  services or legal requirements change. Updated terms
                  will be published on this page.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl text-[#29251f] text-[#29251f]">
                  9. Contact Us
                </h2>
                <p className="mt-3 text-sm leading-8 text-[#777064]">
                  If you have questions about these terms, please
                  contact our team.
                </p>
                <Link
                  to="/contact"
                  className="mt-4 inline-block text-sm font-semibold text-[#a17c50] underline underline-offset-4"
                >
                  Contact Us
                </Link>
              </div>
            </div>

            <div className="mt-12 border-t border-[#e9e3d9] pt-6">
              <p className="text-xs leading-6 text-[#999084]">
                This is an initial website terms template. Have it
                reviewed and adapted to your actual business practices
                and applicable UK consumer law before launch.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Terms;
