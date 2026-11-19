
import { Link } from "react-router-dom";
import { FiArrowLeft, FiShield } from "react-icons/fi";

import AnnouncementBar from "../components/common/AnnouncementBar";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";

function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-[#faf8f4]">
      <AnnouncementBar />
      <Navbar />

      <section className="bg-[#514b40] px-5 py-20 text-center sm:py-24">
        <div className="mx-auto flex h-16 w-16 items-center justify-center bg-white/10 text-[#d4b68d]">
          <FiShield size={30} />
        </div>

        <h1 className="mt-6 font-serif text-4xl text-white sm:text-5xl">
          Privacy Policy
        </h1>

        <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-white/70">
          Your privacy matters to us. Learn how INTERIOR FURNITURE UK
          handles your personal information.
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
              At INTERIOR FURNITURE UK, we respect your privacy and are
              committed to protecting your personal information. This
              Privacy Policy explains what information may be collected
              when you use our website and how it may be used.
            </p>

            <div className="mt-10 space-y-9">
              <div>
                <h2 className="font-serif text-2xl text-[#29251f]">
                  1. Information We Collect
                </h2>
                <p className="mt-3 text-sm leading-8 text-[#777064]">
                  When you use our website, we may collect information
                  such as your name, email address, phone number, delivery
                  address and order details when you provide them.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl text-[#29251f]">
                  2. How We Use Your Information
                </h2>
                <p className="mt-3 text-sm leading-8 text-[#777064]">
                  Your information may be used to process orders, arrange
                  deliveries, respond to enquiries, provide customer
                  support and improve our website and services.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl text-[#29251f]">
                  3. Sharing Your Information
                </h2>
                <p className="mt-3 text-sm leading-8 text-[#777064]">
                  We do not intend to sell your personal information.
                  Information may be shared with service providers where
                  necessary to operate our services, fulfil orders or
                  comply with legal obligations.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl text-[#29251f]">
                  4. Cookies
                </h2>
                <p className="mt-3 text-sm leading-8 text-[#777064]">
                  Our website may use cookies or similar technologies
                  to support website functionality and understand how
                  visitors use our services.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl text-[#29251f]">
                  5. Data Security
                </h2>
                <p className="mt-3 text-sm leading-8 text-[#777064]">
                  We aim to use appropriate security measures to protect
                  personal information. However, no online system can
                  guarantee absolute security.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl text-[#29251f]">
                  6. Your Privacy Rights
                </h2>
                <p className="mt-3 text-sm leading-8 text-[#777064]">
                  Depending on applicable law, you may have rights to
                  access, correct, delete or restrict the use of your
                  personal information. You may contact us to make a
                  privacy-related request.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl text-[#29251f]">
                  7. Contact Us
                </h2>
                <p className="mt-3 text-sm leading-8 text-[#777064]">
                  If you have questions about this Privacy Policy or
                  your personal information, please contact our team.
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
                This is an initial website policy template. It should
                be reviewed and adapted to your actual business practices
                and applicable UK data protection requirements before
                the website goes live.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default PrivacyPolicy;
