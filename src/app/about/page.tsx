"use client";

import { motion } from "framer-motion";
import { FaDownload, FaBriefcase } from "react-icons/fa";

export default function About() {
    const personalInfo = [
        { title: "First Name", value: "Joy" },
        { title: "Last Name", value: "Okon" },
        { title: "Age", value: "27 Years" },
        { title: "Nationality", value: "Nigerian" },
        { title: "Freelance", value: "Available" },
        { title: "Address", value: "Nigeria" },
        { title: "Phone", value: "+2348035083289" },
        { title: "Email", value: "joyokon505040@gmail.com" },
        { title: "Skype", value: "joy.okon" },
        { title: "Lang", value: "English" },
    ];

    const stats = [
        { count: "4", label: "Years of Experience" },
        { count: "50", label: "Completed Projects", suffix: "+" },
        { count: "20", label: "Happy Customers", suffix: "+" },
        { count: "10", label: "Awards Won", suffix: "+" },
    ];

    const skills = [
        { name: "HTML", percent: 90 },
        { name: "JavaScript", percent: 79 },
        { name: "CSS", percent: 80 },
        { name: "PHP", percent: 60 },
        { name: "WordPress", percent: 75 },
        { name: "JQuery", percent: 79 },
        { name: "Angular", percent: 55 },
        { name: "React", percent: 60 },
    ];

    const experience = [
        { year: "2018 - Present", role: "Web Developer", company: "Envato", desc: "Lorem ipsum dolor sit amet, consectetur tempor incididunt ut labore adipisicing elit." },
        { year: "2013 - 2018", role: "UI/UX Designer", company: "Themeforest", desc: "Lorem ipsum dolor sit amet, consectetur tempor incididunt ut labore adipisicing elit." },
        { year: "2005 - 2013", role: "Consultant", company: "Videohive", desc: "Lorem ipsum dolor sit amet, consectetur tempor incididunt ut labore adipisicing elit." },
    ];

    const education = [
        { year: "2015", role: "Engineering Degree", company: "Oxford University", desc: "Lorem ipsum dolor sit amet, consectetur tempor incididunt ut labore adipisicing elit." },
        { year: "2012", role: "Master Degree", company: "Kiev University", desc: "Lorem ipsum dolor sit amet, consectetur tempor incididunt ut labore adipisicing elit." },
        { year: "2009", role: "Bachelor Degree", company: "Tunis High School", desc: "Lorem ipsum dolor sit amet, consectetur tempor incididunt ut labore adipisicing elit." },
    ];

    return (
        <main className="min-h-screen w-full bg-[#111] pb-20 overflow-y-auto">
            <div className="container mx-auto px-5 lg:px-20 py-12 lg:py-20 text-white">

                {/* Title */}
                <div className="relative text-center mb-16 lg:mb-20">
                    <h1 className="text-[35px] sm:text-[56px] font-black uppercase m-0 relative z-10">
                        About <span className="text-primary">Me</span>
                    </h1>
                    <span className="text-[60px] sm:text-[110px] absolute font-extrabold uppercase text-[#252525]/40 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-0 tracking-[10px] hidden sm:block">
                        Resume
                    </span>
                </div>

                {/* Personal Info & Stats */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
                    {/* Info */}
                    <div>
                        <h3 className="text-[26px] font-semibold uppercase mb-6 pb-2">Personal Infos</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 mb-8">
                            {personalInfo.map((item) => (
                                <div key={item.title}>
                                    <span className="opacity-80 font-body">{item.title}: </span>
                                    <span className="font-semibold block sm:inline">{item.value}</span>
                                </div>
                            ))}
                        </div>
                        <button className="flex items-center gap-3 border border-primary text-white rounded-[35px] px-8 py-3 uppercase font-bold text-[15px] hover:bg-primary transition-all duration-300 group">
                            <span>Download CV</span>
                            <div className="bg-primary text-white rounded-full w-[19px] h-[19px] flex items-center justify-center group-hover:bg-white group-hover:text-primary transition-colors">
                                <FaDownload size={10} />
                            </div>
                        </button>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-2 gap-6">
                        {stats.map((stat) => (
                            <div key={stat.label} className="border border-[#252525] rounded-[5px] p-6 lg:p-8">
                                <h3 className="text-[50px] font-bold text-primary leading-none mb-2">
                                    {stat.count}<span className="text-[33px] font-light text-white align-top -ml-2">{stat.suffix}</span>
                                </h3>
                                <div className="flex items-center gap-3">
                                    <div className="w-[30px] h-[1px] bg-[#777]" />
                                    <p className="uppercase text-[15px] leading-snug opacity-80 pl-2 lg:pl-0">{stat.label}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="w-[40%] h-[1px] bg-[#252525] mx-auto mb-20" />

                {/* Skills */}
                <div className="mb-20">
                    <h3 className="text-[26px] font-semibold uppercase mb-10 text-center">My Skills</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {skills.map((skill) => (
                            <div key={skill.name} className="flex flex-col items-center">
                                {/* Circle Placeholder (Use SVG for real donut) */}
                                <div className="relative w-[120px] h-[120px] rounded-full border-[10px] border-[#252525] flex items-center justify-center mb-4">
                                    <span className="text-[30px] font-bold">{skill.percent}%</span>
                                    {/* Simplified overlay for current progress simulation */}
                                </div>
                                <h4 className="uppercase font-medium">{skill.name}</h4>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="w-[40%] h-[1px] bg-[#252525] mx-auto mb-20" />

                {/* Experience & Education */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

                    {/* Experience */}
                    <div>
                        <h3 className="text-[26px] font-semibold uppercase mb-10 pb-2">Experience</h3>
                        <div className="flex flex-col gap-10">
                            {experience.map((item, i) => (
                                <div key={i} className="relative pl-[60px] before:content-[''] before:absolute before:left-[20px] before:top-0 before:h-full before:w-[1px] before:bg-[#333]">
                                    <div className="bg-[#252525] text-white/50 text-[12px] font-bold uppercase rounded-[20px] px-[10px] py-[1px] inline-block mb-3">
                                        {item.year}
                                    </div>
                                    <h4 className="text-[18px] font-semibold uppercase mb-2">
                                        {item.role} <span className="opacity-80 font-medium normal-case sm:before:content-['-'] sm:before:mx-2 block sm:inline">{item.company}</span>
                                    </h4>
                                    <p className="font-body text-[#eee] leading-7 text-[14px]">
                                        {item.desc}
                                    </p>
                                    {/* Icon */}
                                    <div className="absolute left-0 top-0 bg-primary/20 w-[40px] h-[40px] rounded-full flex items-center justify-center text-primary z-10 transition-all hover:bg-primary hover:text-white">
                                        <FaBriefcase size={15} />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Education */}
                    <div>
                        <h3 className="text-[26px] font-semibold uppercase mb-10 pb-2">Education</h3>
                        <div className="flex flex-col gap-10">
                            {education.map((item, i) => (
                                <div key={i} className="relative pl-[60px] before:content-[''] before:absolute before:left-[20px] before:top-0 before:h-full before:w-[1px] before:bg-[#333]">
                                    <div className="bg-[#252525] text-white/50 text-[12px] font-bold uppercase rounded-[20px] px-[10px] py-[1px] inline-block mb-3">
                                        {item.year}
                                    </div>
                                    <h4 className="text-[18px] font-semibold uppercase mb-2">
                                        {item.role} <span className="opacity-80 font-medium normal-case sm:before:content-['-'] sm:before:mx-2 block sm:inline">{item.company}</span>
                                    </h4>
                                    <p className="font-body text-[#eee] leading-7 text-[14px]">
                                        {item.desc}
                                    </p>
                                    {/* Icon */}
                                    <div className="absolute left-0 top-0 bg-primary/20 w-[40px] h-[40px] rounded-full flex items-center justify-center text-primary z-10 transition-all hover:bg-primary hover:text-white">
                                        <FaBriefcase size={15} />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>

            </div>
        </main>
    );
}
