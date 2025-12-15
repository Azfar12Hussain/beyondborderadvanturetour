"use client";

import Image from "next/image";
import { useRef } from "react";
import emailjs from "emailjs-com";

export default function ContactPage() {
  const formRef = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",   // 👈 replace
        "YOUR_TEMPLATE_ID",  // 👈 replace
        formRef.current!,
        "YOUR_PUBLIC_KEY"    // 👈 replace
      )
      .then(
        () => {
          alert("Message sent successfully!");
          formRef.current?.reset();
        },
        () => {
          alert("Failed to send message. Try again.");
        }
      );
  };

  return (
    <div className="w-full min-h-screen">

      {/* ===== Hero Section ===== */}
      <div
        className="h-[40vh] w-full bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: "url('asset/favorite/k2.jpeg')",
        }}
      >
        <h1 className="text-white text-4xl md:text-5xl font-bold tracking-wide">
          Contact Us
        </h1>
      </div>

      {/* ===== Map Section ===== */}
      <div className="w-full bg-white py-10 px-4">
        <div className="max-w-6xl mx-auto">
          <iframe
            className="w-full h-[300px] md:h-[400px] rounded-lg shadow-md"
            src="https://www.google.com/maps?q=Gilgit%20Baltistan&output=embed"
            loading="lazy"
          ></iframe>
        </div>
      </div>

      {/* ===== Contact Info + Form Section ===== */}
      <div className="w-full bg-gradient-to-r from-[#6d6b8c] to-[#c47a63] py-14 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 text-white">
          
          {/* ===== Left Info ===== */}
          <div className="space-y-6">
            <h2 className="text-3xl font-semibold">Get In Touch</h2>

            <div>
              <p className="font-semibold">Islamabad Office</p>
              <p>Blue Area, Islamabad, Pakistan</p>
              <p>📞 +92 300 0000000</p>
              <p>✉️ info@beyondbordertours.com</p>
            </div>

            <div>
              <p className="font-semibold">Hunza Office</p>
              <p>Aliabad, Hunza Valley</p>
              <p>📞 +92 311 0000000</p>
              <p>✉️ hunza@beyondbordertours.com</p>
            </div>

            <div>
              <p className="font-semibold">Singapore Office</p>
              <p>Singapore City</p>
              <p>📞 +65 00000000</p>
              <p>✉️ singapore@beyondbordertours.com</p>
            </div>
          </div>

          {/* ===== Contact Form ===== */}
          <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg text-black">
            <form ref={formRef} onSubmit={sendEmail} className="space-y-4">

              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              />

              <input
                type="text"
                name="subject"
                placeholder="Subject"
                className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              />

              <textarea
                name="message"
                placeholder="Your Message"
                rows={4}
                required
                className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              ></textarea>

              <button
                type="submit"
                className="bg-orange-600 text-white px-6 py-3 rounded-md hover:bg-orange-700 transition w-full"
              >
                Send Message
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
}
