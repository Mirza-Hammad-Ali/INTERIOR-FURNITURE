
import { Link } from "react-router-dom";
import {
  FiArrowLeft,
  FiRefreshCw,
  FiPackage,
  FiCheckCircle,
  FiMail,
} from "react-icons/fi";

import AnnouncementBar from "../components/common/AnnouncementBar";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";

function Returns() {
  const steps = [
    {
      title: "Contact Our Team",
      description:
        "Get in touch with us and provide your order details and reason for requesting a return.",
    },
    {
      title: "Return Assessment",
      description:
        "Our team will review your request and explain the next steps based on your circumstances and applicable rights.",
    },
    {
      title: "Return Arrangement",
      description:
        "If a return is agreed, we will confirm the return method, address and any relevant instructions.",
    },
    {
      title: "Refund Processing",
      description:
        "Once the returned item has been assessed, any approved refund will be arranged in accordance with applicable law.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#faf8f4]">
      <AnnouncementBar />
      <Navbar />

      {/* Hero */}
      <section className="bg-[#514b40] px-5 py-20 text-center sm:py-24">
        <div className="mx-auto flex h-16 w-16 items-center justify-center bg-white/10 text-[#d4b68d]">
          <FiRefreshCw size={30} />
        </div>

        <h1 className="mt-6 font-serif text-4xl text-white sm:text-5xl">
          Returns & Refunds
        </h1>

        <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-white/70">
          Your satisfaction matters to us. Find out how to contact us
          about returns, cancellations and refunds.
        </p>
      </section>

      {/* Content */}
      <section className="px-5 py-16 sm:py-20">
        <div className="mx-auto max-w-5xl">
          <Link
            to="/"
            className="mb-10 inline-flex items-center gap-2 text-sm text-[#777064] hover:text-[#a17c50]"
          >
            <FiArrowLeft />
            Back to Home
          </Link>

          {/* Introduction */}
          <div className="border border-[#e9e3d9] bg-white p-7 sm:p-10">
            <h2 className="font-serif text-3xl text-[#29251f]">
              Our Returns Approach
            </h2>

            <p className="mt-5 text-sm leading-8 text-[#777064]">
              At INTERIOR FURNITURE UK, we want you to feel confident
              when shopping with us. If you have a problem with your
              order or wish to discuss a return, please contact our
              customer support team.
            </p>

            <p className="mt-4 text-sm leading-8 text-[#777064]">
              Return and refund requests will be handled in line with
              applicable UK consumer protection laws and the circumstances
              of your purchase.
            </p>
          </div>

          {/* Return Process */}
          <div className="mt-12">
            <div className="mb-9 text-center">
              <span className="text-xs font-semibold tracking-[3px] text-[#a17c50]">
                HOW IT WORKS
              </span>

              <h2 className="mt-4 font-serif text-3xl text-[#29251f] sm:text-4xl">
                Return Process
              </h2>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className="border border-[#e9e3d9] bg-white p-7"
                >
                  <span className="font-serif text-3xl text-[#a17c50]">
                    0{index + 1}
                  </span>

                  <h3 className="mt-4 font-serif text-xl text-[#29251f]">
                    {step.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-[#777064]">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Important Information */}
          <div className="mt-12 bg-[#eee9df] p-7 sm:p-10">
            <div className="flex items-center gap-3">
              <FiPackage className="text-2xl text-[#a17c50]" />
              <h2 className="font-serif text-2xl text-[#29251f]">
                Important Information
              </h2>
            </div>

            <ul className="mt-6 space-y-4 text-sm leading-7 text-[#777064]">
              <li className="flex gap-3">
                <FiCheckCircle className="mt-1 shrink-0 text-[#a17c50]" />
                Keep your order details and any relevant purchase
                information available.
              </li>

              <li className="flex gap-3">
                <FiCheckCircle className="mt-1 shrink-0 text-[#a17c50]" />
                Contact us as soon as possible if an item arrives damaged
                or incorrect.
              </li>

              <li className="flex gap-3">
                <FiCheckCircle className="mt-1 shrink-0 text-[#a17c50]" />
                Please wait for return instructions before sending an
                item back.
              </li>

              <li className="flex gap-3">
                <FiCheckCircle className="mt-1 shrink-0 text-[#a17c50]" />
                Your statutory consumer rights are not affected by this
                information.
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="mt-12 border border-[#e9e3d9] bg-white p-8 text-center sm:p-12">
            <div className="mx-auto flex h-16 w-16 items-center justify-center bg-[#f2eee6] text-[#a17c50]">
              <FiMail size={28} />
            </div>

            <h2 className="mt-6 font-serif text-3xl text-[#29251f]">
              Need Help With a Return?
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-[#777064]">
              Contact our team with your order details and we will
              help you understand the next steps.
            </p>

            <Link
              to="/contact"
              className="mt-7 inline-flex items-center justify-center bg-[#514b40] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#3d392f]"
            >
              Contact Us
            </Link>
          </div>

          <p className="mt-8 text-xs leading-6 text-[#999084]">
            This is an initial returns information template. Before
            launching your store, replace it with a complete policy
            reflecting your actual business procedures and applicable
            UK consumer law.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Returns;
