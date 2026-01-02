"use client";

import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-0 lg:p-0 relative overflow-hidden">
      {/* Color Block */}
      <div className="fixed -left-[83%] -top-[50%] h-[200%] w-full -rotate-15 bg-primary hidden lg:block z-0" />

      <div className="container mx-auto h-screen grid grid-cols-1 lg:grid-cols-3 items-center relative z-10">

        {/* Profile Image - Desktop (Fixed Position-ish look) */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="hidden lg:block col-span-1 h-[calc(100vh-80px)] rounded-[30px] shadow-2xl relative overflow-hidden left-[40px]"
        >
          <Image
            src="/img/joy.jpeg"
            alt="Joy Okon"
            fill
            className="object-cover"
            priority
          />
        </motion.div>

        {/* Mobile Image & Content */}
        <div className="col-span-1 lg:col-span-2 flex flex-col items-center lg:items-start text-center lg:text-left px-5 lg:pl-32">

          <div className="block lg:hidden w-[250px] h-[250px] rounded-full overflow-hidden border-4 border-[#252525] mb-8 relative">
            <Image
              src="/img/joy.jpeg"
              alt="Joy Okon"
              fill
              className="object-cover"
              priority
            />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h1 className="text-[35px] sm:text-[51px] font-bold uppercase leading-tight text-primary mb-4">
              I'm Joy Okon.
              <span className="block text-white">Web Designer</span>
            </h1>

            <p className="font-body text-[16px] leading-[35px] mb-8 max-w-[550px] text-white">
              I'm a UI/UX Designer passionate about transforming ideas into intuitive,
              user-friendly digital experiences. I focus on clarity, usability, and clean visual design, creating
              products that not only look good but work seamlessly for users.
            </p>

            <Link href="/about" className="inline-flex items-center group bg-transparent border border-primary rounded-full pr-0 pl-7 py-0 overflow-hidden relative">
              <span className="uppercase font-bold text-[15px] z-10 py-4 transition-colors duration-300 group-hover:text-white text-white">More About Me</span>
              <div className="ml-5 flex items-center justify-center bg-primary text-white w-[55px] h-[55px] rounded-full z-10">
                <FaArrowRight size={18} />
              </div>
              {/* Hover Fill Effect */}
              <div className="absolute inset-0 bg-primary translate-x-full group-hover:translate-x-0 transition-transform duration-300 z-0" />
            </Link>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
