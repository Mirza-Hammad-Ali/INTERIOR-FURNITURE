
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FiArrowLeft,
  FiChevronDown,
  FiHelpCircle,
  FiMessageCircle,
} from "react-icons/fi";

import AnnouncementBar from "../components/common/AnnouncementBar";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";

const faqs = [
  {
    category: "Orders & Payments",
    questions: [
      {
        question: "How can I place an order?",
        answer:
          "Browse our furniture collection, select your preferred product, add it to your cart, and proceed to checkout. Enter your delivery details and submit your order.",
      },
      {
        question: "Which payment methods do you accept?",
        answer:
          "Cash on Delivery (COD) is currently the payment option shown at checkout. Any additional payment methods will be displayed when available.",
      },
      {
        question: "Can I change or cancel my order?",
        answer:
          "If you need to change or cancel an order, please contact our support team as soon as possible. Changes may depend on the order's processing and delivery status.",
      },
    ],
  },
  {
    category: "Delivery",
    questions: [
      {
        question: "Do you deliver across the UK?",
        answer:
          "Our store is designed to serve customers across the United Kingdom. Delivery availability may depend on your location and the selected product.",
      },
      {
        question: "How long does delivery take?",
        answer:
          "Delivery time can vary depending on the product, stock availability, and delivery location. Please contact our team for information about your order.",
      },
      {
        question: "Are delivery charges included?",
        answer:
          "Any applicable delivery charges will be communicated during the ordering process or confirmed by our team.",
      },
    ],
  },
  {
    category: "Returns & Refunds",
    questions: [
      {
        question: "Can I return a product?",
        answer:
          "Return requests are handled according to applicable UK consumer protection laws and the circumstances of the order. Please visit our Returns & Refunds page for more information.",
      },
      {
        question: "How do I request a refund?",
        answer:
          "Please contact our team with your order details and the reason for your request. Refund eligibility and processing will be assessed according to applicable rules.",
      },
    ],
  },
  {
    category: "Products & Support",
    questions: [
      {
        question: "Are the product images accurate?",
        answer:
          "We aim to present our products as accurately as possible. Colours and appearance may vary slightly depending on screen settings and lighting.",
      },
      {
        question: "How can I contact customer support?",
        answer:
          "You can reach our team through the Contact Us page. Include your order details when asking about an existing order.",
      },
    ],
  },
];

function FAQ() {
  const [activeQuestion, setActiveQuestion] = useState("0-0");

  const toggleQuestion = (id) => {
    setActiveQuestion((current) => (current === id ? null : id));
  };

  return (
    <>
      <AnnouncementBar />
      <Navbar />

      <main className="min-h-screen bg-[#faf8f4]">
        {/* Hero */}
        <section className="bg-[#514b40] px-5 py-20 text-center sm:py-24">
          <div className="mx-auto max-w-3xl">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-white/10 text-[#e5c79e]">
              <FiHelpCircle size={32} />
            </div>

            <span className="mt-6 block text-xs font-semibold tracking-[4px] text-[#d5b88e]">
              WE ARE HERE TO HELP
            </span>

            <h1 className="mt-4 font-serif text-4xl text-white sm:text-5xl">
              Frequently Asked Questions
            </h1>

            <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-[#e4dfd6]">
              Find answers to common questions about orders, payments,
              delivery, returns and our furniture collection.
            </p>
          </div>
        </section>

        {/* FAQ Content */}
        <section className="px-5 py-16 sm:py-20">
          <div className="mx-auto max-w-4xl">
            <div className="mb-12 text-center">
              <span className="text-xs font-semibold tracking-[3px] text-[#a17c50]">
                HELP CENTRE
              </span>

              <h2 className="mt-3 font-serif text-3xl text-[#29251f] sm:text-4xl">
                How Can We Help You?
              </h2>

              <p className="mt-4 text-sm leading-7 text-[#777064]">
                Explore the questions below to find the information you need.
              </p>
            </div>

            <div className="space-y-10">
              {faqs.map((group, groupIndex) => (
                <div key={group.category}>
                  <h3 className="mb-4 border-b border-[#e9e3d9] pb-3 font-serif text-xl text-[#514b40]">
                    {group.category}
                  </h3>

                  <div className="space-y-3">
                    {group.questions.map((item, questionIndex) => {
                      const id = `${groupIndex}-${questionIndex}`;
                      const isOpen = activeQuestion === id;

                      return (
                        <div
                          key={item.question}
                          className="border border-[#e9e3d9] bg-white"
                        >
                          <button
                            type="button"
                            onClick={() => toggleQuestion(id)}
                            aria-expanded={isOpen}
                            className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left transition hover:bg-[#faf8f4] sm:px-6"
                          >
                            <span className="text-sm font-medium leading-6 text-[#29251f] sm:text-base">
                              {item.question}
                            </span>

                            <FiChevronDown
                              size={20}
                              className={`shrink-0 text-[#a17c50] transition-transform duration-300 ${
                                isOpen ? "rotate-180" : ""
                              }`}
                            />
                          </button>

                          {isOpen && (
                            <div className="border-t border-[#e9e3d9] px-5 py-5 sm:px-6">
                              <p className="text-sm leading-7 text-[#777064]">
                                {item.answer}
                              </p>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>

            {/* Contact CTA */}
            <div className="mt-16 border border-[#e9e3d9] bg-white px-6 py-10 text-center sm:px-10">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#f2f0e9] text-[#a17c50]">
                <FiMessageCircle size={26} />
              </div>

              <h2 className="mt-5 font-serif text-2xl text-[#29251f]">
                Still Have Questions?
              </h2>

              <p className="mx-auto mt-3 max-w-md text-sm leading-7 text-[#777064]">
                Our team is here to help. Get in touch with us for further
                assistance.
              </p>

              <Link
                to="/contact"
                className="mt-7 inline-flex items-center gap-2 bg-[#514b40] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#3d392f]"
              >
                Contact Us
              </Link>
            </div>

            <Link
              to="/"
              className="mt-10 inline-flex items-center gap-2 text-sm text-[#777064] transition hover:text-[#a17c50]"
            >
              <FiArrowLeft size={16} />
              Back to Home
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default FAQ;
