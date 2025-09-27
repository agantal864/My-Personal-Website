'use client';
import { BiMailSend } from "react-icons/bi";

function Contact() {
  return (
    <div className="md:max-w-7xl md:mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
    <section className="flex flex-col text-left">
      <div className="space-y-4 lg:space-y-6">
        <h1 className="font-serif font-bold text-[#1A2B4C] text-5xl md:text-5xl lg:text-6xl xl:text-7xl pt-4 md:pt-8 lg:pt-12">Get in Touch</h1>
        <p className="font-sans text-base lg:text-2xl">I’d love to hear from you! Whether you have a question, an opportunity, or just want to connect, feel free to reach out.</p>
      </div>

      <form className="max-w-xl lg:w-2xl py-8">
        <div className="mb-6">
          <label htmlFor="name" className="block text-lg font-bold text-[#1A2B4C] mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="w-full rounded-full border border-[#1A2B4C] px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#FFC107]"
          />
        </div>

        <div className="mb-6">
          <label htmlFor="email" className="block text-lg font-bold text-[#1A2B4C] mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full rounded-full border border-[#1A2B4C] px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#FFC107]"
          />
        </div>

        <div className="mb-6">
          <label htmlFor="message" className="block text-lg font-bold text-[#1A2B4C] mb-2">
            Message
          </label>
          <textarea
            id="message"
            rows={5}
            className="w-full rounded-2xl border border-[#1A2B4C] px-4 py-2 resize-none md:resize-y focus:outline-none focus:ring-2 focus:ring-[#FFC107]"
          />
        </div>

        <button
          type="submit"
          className="text-[#1A2B4C] bg-[#FFC107]/40 noise-bg bg-opacity-100 filter brightness-110 font-semibold text-base px-8 py-3 mb-15 rounded-full hover:bg-[#FFC107] transition"
        >
          <BiMailSend className="inline mr-1.5 mb-1"/>Send An Email
        </button>
      </form>


    </section>
    </div>
 )
} 



export default Contact