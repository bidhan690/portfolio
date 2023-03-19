import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ContactIcons } from "@/components/header/HeaderUtil";
import { SiCachet } from "react-icons/si";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import { useState } from "react";

const containerVariants = {
  hidden: {
    x: "-100px",
  },
  visible: {
    x: 0,
    transition: {
      when: "beforeChildren",
      type: "spring",

      stiffness: 100,
      duration: 1,
      staggerChildren: 2,
    },
  },
};

const h2Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,

    transition: {
      duration: 0.8,
    },
  },
};

export default function Contact() {
  const HovLink = motion(Link);
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState();
  const [isSending, setIsSending] = useState(false);
  const [success, setSuccess] = useState(false);

  async function submitHandler(e) {
    e.preventDefault();
    setIsSending(true);
    const messages = {
      name,
      number,
      email,
      subject,
      message,
    };
    let res;
    try {
      res = await fetch("/api/message", {
        method: "POST",
        body: JSON.stringify(messages),
        headers: {
          "Content-Type": "application/json",
        },
      });
    } catch (err) {
      setError(err.message || "Something went wrong!");
      setSuccess(false);
    }

    const data = await res.json();
    if (!res.ok) {
      setError(data.message || "Something went wrong!");
      setSuccess(false);
    }
    if (res.ok) {
      setSuccess(true);
      setName("");
      setNumber("");
      setEmail("");
      setSubject("");
      setMessage("");
      setError();
    }
    setIsSending(false);
  }

  return (
    <div id="contact" className="w-full lg:h-screen  ">
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full  ">
        <p className="text-xl mt-8 tracking-widest uppercase text-[#5651e5]">
          Contact Me
        </p>
        <motion.h2
          variants={h2Variants}
          initial="hidden"
          whileInView="visible"
          className="py-4"
        >
          Get In Touch
        </motion.h2>
        <div className="grid lg:grid-cols-5 gap-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4"
          >
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
          </motion.div>
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
                      value={name}
                      name="name"
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="flex flex-col ">
                    <label className="uppercase text-sm py-2" htmlFor="number">
                      Phone Number
                    </label>
                    <input
                      className="border-2 rounded-lg flex border-gray-300"
                      type="number"
                      value={number}
                      name="number"
                      onChange={(e) => setNumber(e.target.value)}
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
                    value={email}
                    name="email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="flex flex-col ">
                  <label className="uppercase text-sm py-2" htmlFor="subject">
                    Subject
                  </label>
                  <input
                    className="border-2 rounded-lg flex border-gray-300"
                    type="text"
                    name="subject"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                  />
                </div>
                <div className="flex flex-col ">
                  <label className="uppercase text-sm py-2" htmlFor="message">
                    Message
                  </label>
                  <textarea
                    className="border-2 rounded-lg flex border-gray-300"
                    rows="10"
                    name="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </div>
                <div className=" flex justify-center items-center mt-2">
                  <button
                    className="w-full p-4 text-gray-100  mr-2 hover:opacity-80"
                    disabled={isSending}
                  >
                    Send Message
                  </button>

                  {success && <SiCachet size={30} />}
                </div>
                {error && (
                  <p className="text-red-500 text-center m-2">{error}</p>
                )}
              </form>
            </div>
          </div>
        </div>

        <div
          className="flex justify-center py-8"
          onClick={() => window.scrollTo(0, 0)}
        >
          <HovLink
            href="/"
            whileHover={{
              scale: 1.2,
              transition: { type: "spring", stiffness: 300, duration: 1 },
            }}
            drag
            dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
            dragElastic={0.7}
            className="mx-4 rounded-full shadow-lg shadow-gray-400 p-6 cursor-grab "
          >
            <HiOutlineChevronDoubleUp size={30} className="text-[#5651e5]" />
          </HovLink>
        </div>
      </div>
    </div>
  );
}
