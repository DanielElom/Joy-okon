"use client";

import { FaEnvelopeOpen, FaPhoneSquare, FaFacebook, FaTwitter, FaYoutube, FaLinkedin, FaPaperPlane } from "react-icons/fa";

export default function Contact() {
    return (
        <main className="min-h-screen w-full bg-[#111] pb-20 overflow-y-auto">
            <div className="container mx-auto px-5 lg:px-20 py-12 lg:py-20 text-white">

                {/* Title */}
                <div className="relative text-center mb-16 lg:mb-20">
                    <h1 className="text-[35px] sm:text-[56px] font-black uppercase m-0 relative z-10">
                        Get in <span className="text-primary">Touch</span>
                    </h1>
                    <span className="text-[60px] sm:text-[110px] absolute font-extrabold uppercase text-[#252525]/40 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-0 tracking-[10px] hidden sm:block">
                        Contact
                    </span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

                    {/* Left Content */}
                    <div className="lg:col-span-1">
                        <h3 className="text-[26px] font-semibold uppercase mb-4">Don't be shy !</h3>
                        <p className="font-body text-[15px] leading-7 mb-8 text-[#eee]">
                            Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.
                        </p>

                        <div className="flex items-start gap-4 mb-6">
                            <FaEnvelopeOpen className="text-primary text-3xl mt-1" />
                            <div>
                                <span className="block opacity-80 uppercase text-[15px]">Mail me</span>
                                <span className="font-bold text-[15px] block">joyokon505040@gmail.com</span>
                            </div>
                        </div>

                        <div className="flex items-start gap-4 mb-8">
                            <FaPhoneSquare className="text-primary text-3xl mt-1" />
                            <div>
                                <span className="block opacity-80 uppercase text-[15px]">Call me</span>
                                <span className="font-bold text-[15px] block">+234 803 508 3289</span>
                            </div>
                        </div>

                        {/* Socials */}
                        <div className="flex gap-4">
                            <a href="#" className="w-[40px] h-[40px] bg-[#2b2a2a] rounded-full flex items-center justify-center text-white hover:bg-primary transition-colors">
                                <FaFacebook />
                            </a>
                            <a href="#" className="w-[40px] h-[40px] bg-[#2b2a2a] rounded-full flex items-center justify-center text-white hover:bg-primary transition-colors">
                                <FaTwitter />
                            </a>
                            <a href="#" className="w-[40px] h-[40px] bg-[#2b2a2a] rounded-full flex items-center justify-center text-white hover:bg-primary transition-colors">
                                <FaYoutube />
                            </a>
                            <a href="https://www.linkedin.com/in/joy-okon-" target="_blank" className="w-[40px] h-[40px] bg-[#2b2a2a] rounded-full flex items-center justify-center text-white hover:bg-primary transition-colors">
                                <FaLinkedin />
                            </a>
                        </div>
                    </div>

                    {/* Form */}
                    <div className="lg:col-span-2">
                        <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={(e) => e.preventDefault()}>
                            <div className="flex flex-col gap-2">
                                <input type="text" placeholder="YOUR NAME" className="w-full bg-[#252525] border border-[#111] rounded-[30px] px-6 py-4 outline-none focus:border-primary transition-colors placeholder:text-white/40 text-white font-body uppercase" />
                            </div>
                            <div className="flex flex-col gap-2">
                                <input type="email" placeholder="YOUR EMAIL" className="w-full bg-[#252525] border border-[#111] rounded-[30px] px-6 py-4 outline-none focus:border-primary transition-colors placeholder:text-white/40 text-white font-body uppercase" />
                            </div>
                            <div className="col-span-1 md:col-span-2 flex flex-col gap-2">
                                <input type="text" placeholder="YOUR SUBJECT" className="w-full bg-[#252525] border border-[#111] rounded-[30px] px-6 py-4 outline-none focus:border-primary transition-colors placeholder:text-white/40 text-white font-body uppercase" />
                            </div>
                            <div className="col-span-1 md:col-span-2 flex flex-col gap-2">
                                <textarea placeholder="YOUR MESSAGE" className="w-full h-[150px] bg-[#252525] border border-[#111] rounded-[30px] px-6 py-4 outline-none focus:border-primary transition-colors placeholder:text-white/40 text-white font-body resize-none uppercase" />
                            </div>

                            <div className="col-span-1 md:col-span-2">
                                <button className="flex items-center gap-3 border border-primary text-white rounded-[35px] px-10 py-4 uppercase font-bold text-[15px] hover:bg-primary transition-all duration-300 group">
                                    <span>Send Message</span>
                                    <div className="bg-primary text-white rounded-full w-[19px] h-[19px] flex items-center justify-center group-hover:bg-white group-hover:text-primary transition-colors">
                                        <FaPaperPlane size={10} />
                                    </div>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        </main>
    );
}
