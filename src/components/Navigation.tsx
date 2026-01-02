"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaHome, FaUser, FaBriefcase, FaEnvelopeOpen, FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { tv } from "tailwind-variants";

const navItem = tv({
    base: "group relative flex items-center justify-center w-[50px] h-[50px] rounded-full bg-[#2b2a2a] transition-all duration-300 hover:bg-primary cursor-pointer",
    variants: {
        active: {
            true: "bg-primary text-white",
            false: "text-[#ddd] hover:text-white",
        },
    },
});

const navLabel = tv({
    base: "absolute right-0 top-0 mr-[0px] h-full flex items-center rounded-[30px] bg-primary pr-[30px] pl-[30px] text-white opacity-0 transition-all duration-300 -z-10 group-hover:right-[27px] group-hover:rounded-l-[30px] group-hover:opacity-100",
});

const Navigation = () => {
    const pathname = usePathname();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const items = [
        { name: "Home", icon: <FaHome />, path: "/" },
        { name: "About", icon: <FaUser />, path: "/about" },
        { name: "Portfolio", icon: <FaBriefcase />, path: "/portfolio" },
        { name: "Contact", icon: <FaEnvelopeOpen />, path: "/contact" },
    ];

    return (
        <>
            {/* Desktop Navigation */}
            <nav className="fixed right-[30px] top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col gap-5">
                {items.map((item) => {
                    const isActive = pathname === item.path;
                    return (
                        <Link key={item.name} href={item.path}>
                            <div className={navItem({ active: isActive })}>
                                <span className="text-xl relative z-10">{item.icon}</span>
                                <div className={navLabel()}>
                                    <span className="uppercase font-semibold text-[15px]">{item.name}</span>
                                </div>
                            </div>
                        </Link>
                    );
                })}
            </nav>

            {/* Mobile Toggle */}
            <div className="fixed top-[30px] right-[30px] z-50 lg:hidden">
                <button
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className="bg-[#2b2a2a] text-white p-4 rounded-full text-xl hover:bg-primary transition-colors duration-300"
                >
                    {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed inset-0 bg-[#252525] z-40 flex flex-col justify-center items-center lg:hidden"
                    >
                        <div className="flex flex-col gap-8 text-center">
                            {items.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.path}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className={`text-2xl font-bold uppercase tracking-wider flex items-center gap-3 ${pathname === item.path ? "text-primary" : "text-white"
                                        }`}
                                >
                                    {item.icon}
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navigation;
