import React from "react";
import "../animations/animate.css";
import AnimatedBody from "../animations/AnimatedBody";
import AnimatedTitle from "../animations/AnimatedTitle";
import Image from "next/image";
import { spaceGrotesk } from "../fonts/spaceGrotesk";
import Link from "next/link";
import { SiSalesforce } from "react-icons/si";

const About = () => {
    return (
        <section
            className="relative z-10 w-full items-center justify-center overflow-hidden bg-[#0E1016] bg-cover bg-center pt-16 pb-36 md:pt-20 md:pb-44 lg:pt-20 lg:pb-56"
            id="about"
        >
            <div className="mx-auto flex w-[90%] flex-col items-center justify-center lg:max-w-[70%]">
                <AnimatedTitle
                    text={"VIKHYATH  SAI  KOTHAMASU"}
                    className={
                        "mb-10 text-left text-[40px] font-bold leading-[0.9em] tracking-tighter text-[#e4ded7] sm:text-[45px] md:mb-16 md:text-[60px] lg:text-[80px]"
                    }
                    wordSpace={"mr-[14px]"}
                    charSpace={"mr-[0.001em]"}
                />

                <div className="mx-auto flex w-[100%] flex-col lg:max-w-[1200px] lg:flex-row lg:gap-20">
                    <div className="mb-10 flex w-[100%] flex-col gap-4 text-[18px] font-medium  leading-relaxed tracking-wide text-[#e4ded7] md:mb-16 md:gap-6 md:text-[20px] md:leading-relaxed lg:mb-16  lg:max-w-[90%] lg:text-[24px] ">
                        <div
                            className={`relative flex flex-col items-center justify-center ${spaceGrotesk.className} pointer-events-none`}
                        >
                            <Image
                                className={`w-215 h-288`}
                                src="/profile.png"
                                alt="Logo"
                                width={215}
                                height={288}
                            />
                        </div>
                        <div className="flex justify-center">
                            <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" style={{ width: '30%' }} onClick={() => window.open('/resume.pdf', '_blank')}>
                                View Resume
                                <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                                </svg>
                            </button>
                        </div>
                        <AnimatedBody text="My passion lies in both backend and frontend development. With a deep appreciation for the fusion of technology and creativity, I'm driven by insatiable curiosity and a commitment to innovation. From crafting seamless user experiences to exploring the cosmos, my journey is a vibrant blend of coding, football, music, and the wonders of technology." />

                        <AnimatedBody
                            delay={0.1}
                            text="Spanning image processing, video content analysis, machine learning, and data-driven astronomy, my interests are as diverse as they are exciting. I thrive on the art of creating software that merges aesthetics and functionality."
                        />

                        <AnimatedBody
                            delay={0.2}
                            text="As an enthusiast who's been developing for over 7 years, I've embraced the challenge of programming with open arms. Be it crafting an elegant user interface or coding intricate applications, my aim is to consistently innovate and bring uniqueness to my work. With a keen eye on the latest tech trends, I'm excitedly working on projects and always open to fresh opportunities and exciting collaborations."
                        />
                        <div className="flex items-center">
                            <span className="mr-3">
                                <Link
                                    href="https://www.salesforce.com/in/"
                                    target="_blank"
                                    className="w-[20px] text-[20px] md:w-[25px] md:text-[24px] lg:w-[30px] lg:text-[28px]"
                                    data-blobity-tooltip="Salesforce"
                                    data-blobity-magnetic="false"
                                >
                                    <SiSalesforce size={70}/>
                                </Link>
                            </span>
                            <span>
                                <AnimatedBody
                                    delay={0.3}
                                    text="Experience - Summer SDE Intern at Salesforce"
                                />
                            </span>
                        </div>
                        <AnimatedBody
                            delay={0.3}
                            text="Designed and implemented a complex graph-based searching and fltering feature to identify dependent and referenced entities on top of existing Salesforce Technology"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
