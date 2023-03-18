import Image from "next/image";

import { ContactIcons } from "@/components/header/HeaderUtil";
import { SiCachet } from "react-icons/si";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";

function Contact() {
  function submitHandler(e) {
    e.preventDefault();
  }
  return (
    <div id="contact" className="w-full lg:h-screen  ">
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full  ">
        <p className="text-xl mt-8 tracking-widest uppercase text-[#5651e5]">
          Contact Me
        </p>
        <h2 className="py-4">Get In Touch</h2>
        <div className="grid lg:grid-cols-5 gap-8">
          <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4">
            <div className="lg:p-4 h-full">
              <div>
                <Image
                  className="rounded-xl hover:scale-105 ease-in duration-300"
                  src="/assets/contact.jpg"
                  alt="contact picture"
                  width={500}
                  height={500}
                  priority
                />
              </div>
              <div>
                <h2 className="py-2">Bidhan Niroula </h2>
                <p>Full-Stack Developer</p>
                <p className="py-4">
                  I am available for freelance or fulltime positions. Contact me
                  and let&apos;s talk.
                </p>
              </div>
              <div>
                <p className="uppercase pt-8">Connect With Me</p>
                <div className="flex justify-around items-center pt-3">
                  <ContactIcons />
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-3 w-full  h-auto rounded-xl shadow-xl shadow-gray-400 lg:p-4 ">
            <div className="p-4">
              <form onSubmit={submitHandler}>
                <div className="grid md:grid-cols-2 gap-4 w-full py-4">
                  <div className="flex flex-col ">
                    <label className="uppercase text-sm py-2" htmlFor="name">
                      Name
                    </label>
                    <input
                      className="border-2 rounded-lg flex border-gray-300"
                      type="text"
                    />
                  </div>
                  <div className="flex flex-col ">
                    <label className="uppercase text-sm py-2" htmlFor="number">
                      Phone Number
                    </label>
                    <input
                      className="border-2 rounded-lg flex border-gray-300"
                      type="number"
                    />
                  </div>
                </div>
                <div className="flex flex-col ">
                  <label className="uppercase text-sm py-2" htmlFor="email">
                    Email
                  </label>
                  <input
                    className="border-2 rounded-lg flex border-gray-300"
                    type="email"
                  />
                </div>
                <div className="flex flex-col ">
                  <label className="uppercase text-sm py-2" htmlFor="subject">
                    Subject
                  </label>
                  <input
                    className="border-2 rounded-lg flex border-gray-300"
                    type="text"
                  />
                </div>
                <div className="flex flex-col ">
                  <label className="uppercase text-sm py-2" htmlFor="subject">
                    Message
                  </label>
                  <textarea
                    className="border-2 rounded-lg flex border-gray-300"
                    rows="10"
                  />
                </div>
                <div className=" flex justify-center items-center mt-2">
                  <button className="w-full p-4 text-gray-100  mr-2 hover:opacity-80">
                    Send Message
                  </button>
                  <SiCachet size={30} />
                </div>
              </form>
            </div>
          </div>
        </div>

        <div
          className="flex justify-center py-8"
          onClick={() => window.scrollTo(0, 0)}
        >
          <div className="mx-4 rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
            <HiOutlineChevronDoubleUp size={30} className="text-[#5651e5]" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
