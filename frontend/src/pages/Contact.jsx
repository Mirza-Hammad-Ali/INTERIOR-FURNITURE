import { useState } from "react";
import { Link } from "react-router-dom";
import { FiMapPin, FiPhone, FiMail, FiArrowLeft } from "react-icons/fi";

import AnnouncementBar from "../components/common/AnnouncementBar";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    alert("Thank you! Your message has been received.");

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  }

  return (
    <div className="min-h-screen bg-[#faf8f4]">
      <AnnouncementBar />
      <Navbar />

      <section className="px-5 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <Link
            to="/"
            className="mb-8 inline-flex items-center gap-2 text-sm text-[#777064] hover:text-[#a17c50]"
          >
            <FiArrowLeft />
            Back to Home
          </Link>

          <div className="mb-12 text-center">
            <span className="text-xs font-semibold tracking-[4px] text-[#a17c50]">
              WE ARE HERE TO HELP
            </span>

            <h1 className="mt-4 font-serif text-4xl text-[#29251f] sm:text-5xl">
              Contact Us
            </h1>

            <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-[#777064]">
              Have a question about our furniture or your order?
              Get in touch with our team. We'd love to hear from you.
            </p>
          </div>

          <div className="grid gap-10 lg:grid-cols-2">
            <div className="bg-[#514b40] p-8 text-white sm:p-10">
              <h2 className="font-serif text-3xl">
                Get In Touch
              </h2>

              <p className="mt-4 text-sm leading-7 text-white/70">
                Our team is always happy to help you find the perfect
                furniture for your home.
              </p>

              <div className="mt-10 space-y-8">
                <div className="flex gap-4">
                  <FiMapPin className="mt-1 shrink-0 text-xl text-[#d4b68d]" />
                  <div>
                    <h3 className="font-medium">Our Location</h3>
                    <p className="mt-2 text-sm text-white/70">
                      United Kingdom
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <FiPhone className="mt-1 shrink-0 text-xl text-[#d4b68d]" />
                  <div>
                    <h3 className="font-medium">Phone Number</h3>
                    <p className="mt-2 text-sm text-white/70">
                      Contact details coming soon
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <FiMail className="mt-1 shrink-0 text-xl text-[#d4b68d]" />
                  <div>
                    <h3 className="font-medium">Email Address</h3>
                    <p className="mt-2 text-sm text-white/70">
                      Contact details coming soon
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-12 border-t border-white/20 pt-6">
                <p className="text-xs tracking-[2px] text-[#d4b68d]">
                  INTERIOR FURNITURE UK
                </p>
                <p className="mt-2 text-sm text-white/60">
                  Making every house feel like home.
                </p>
              </div>
            </div>

            <div className="border border-[#e9e3d9] bg-white p-8 sm:p-10">
              <h2 className="font-serif text-2xl text-[#29251f]">
                Send Us A Message
              </h2>

              <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                <div>
                  <label className="mb-2 block text-sm text-[#514b40]">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    required
                    className="w-full border border-[#e9e3d9] px-4 py-3 text-sm outline-none transition focus:border-[#a17c50]"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm text-[#514b40]">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    required
                    className="w-full border border-[#e9e3d9] px-4 py-3 text-sm outline-none transition focus:border-[#a17c50]"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm text-[#514b40]">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Enter subject"
                    required
                    className="w-full border border-[#e9e3d9] px-4 py-3 text-sm outline-none transition focus:border-[#a17c50]"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm text-[#514b40]">
                    Your Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your message..."
                    rows="5"
                    required
                    className="w-full resize-none border border-[#e9e3d9] px-4 py-3 text-sm outline-none transition focus:border-[#a17c50]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#514b40] px-6 py-4 text-sm font-medium text-white transition hover:bg-[#3d392f]"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Contact;