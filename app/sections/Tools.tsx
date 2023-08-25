import React from "react";
import "../animations/animate.css";
import Link from "next/link";
import AnimatedBody from "../animations/AnimatedBody";
import AnimatedTitle from "../animations/AnimatedTitle";
import {
    SiAdobeillustrator,
    SiAdobephotoshop, SiAmazonaws, SiAndroid, SiAndroidstudio, SiAngular, SiCplusplus, SiDart, SiDigitalocean, SiDjango, SiFastapi, SiFigma, SiFirebase, SiFlask, SiFlutter, SiGit,
    SiGithub,
    SiGitkraken,
    SiGnometerminal,
    SiGnu,
    SiGnubash,
    SiGo, SiGooglecloud, SiGooglecolab, SiGooglefonts,
    SiHeroku,
    SiHugo,
    SiIntellijidea, SiIos, SiJavascript, SiJekyll, SiJupyter, SiLatex, SiLinux,
    SiMacos,
    SiMicrosoftazure,
    SiNextdotjs, SiNumpy, SiOctave, SiOpencv, SiPandas, SiPostgresql, SiPython, SiPytorch, SiR, SiReact, SiScikitlearn, SiScipy, SiSocketdotio, SiSpring, SiTensorflow, SiTypescript, SiVisualstudiocode, SiWindows
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import AnimatedTools from "../animations/AnimatedTools.tsx";

const Tools = () => {
    return (
        <section
            className="relative z-10 w-full items-center justify-center overflow-hidden bg-[#0E1016] bg-cover bg-center pt-16 pb-36 md:pt-20 md:pb-44 lg:pt-20 lg:pb-56"
            id="tools"
        >
            <div className="mx-auto flex w-[90%] flex-col items-center justify-center lg:max-w-[1212.8px]">
                <AnimatedTitle
                    text={"TOOLS I'M USING"}
                    className={
                        "mb-10 text-left text-[40px] font-bold leading-[0.9em] tracking-tighter text-[#e4ded7] sm:text-[45px] md:mb-16 md:text-[60px] lg:text-[80px]"
                    }
                    wordSpace={"mr-[14px]"}
                    charSpace={"mr-[0.001em]"}
                />

                <div className="mx-auto w-[100%] lg:max-w-[1200px] justify-center">
                    <div className="mb-10 flex w-[100%] flex-col gap-4 text-[18px] font-bold leading-relaxed tracking-wide text-[#e4ded7] md:mb-16 md:gap-6 md:text-[40px] md:leading-relaxed lg:mb-16 lg:w-[50%]">
                        <AnimatedBody delay={0.4} text="Cloud Services" />
                        <div>
                            <AnimatedTools className="grid grid-cols-5 gap-4" delay={0.4} stepSize={0.1} iconSize={50}>
                                <Link
                                    href="https://aws.amazon.com/"
                                    target="_blank"
                                    className="w-[20px] text-[20px] md:w-[25px] md:text-[24px] lg:w-[30px] lg:text-[28px]"
                                    data-blobity-tooltip="AWS"
                                    data-blobity-magnetic="false"
                                >
                                    <SiAmazonaws size={50}/>
                                </Link>
                                <Link
                                    href="https://azure.microsoft.com/en-in"
                                    target="_blank"
                                    className="w-[20px] text-[20px] md:w-[25px] md:text-[24px] lg:w-[30px] lg:text-[28px]"
                                    data-blobity-tooltip="Azure"
                                    data-blobity-magnetic="false"
                                >
                                    <SiMicrosoftazure size={50}/>
                                </Link>
                                <Link
                                    href="https://heroku.com/"
                                    target="_blank"
                                    className="w-[20px] text-[20px] md:w-[25px] md:text-[24px] lg:w-[30px] lg:text-[28px]"
                                    data-blobity-tooltip="Heroku"
                                    data-blobity-magnetic="false"
                                >
                                    <SiHeroku size={50}/>
                                </Link>
                                <Link
                                    href="https://digitalocean.com/"
                                    target="_blank"
                                    className="w-[20px] text-[20px] md:w-[25px] md:text-[24px] lg:w-[30px] lg:text-[28px]"
                                    data-blobity-tooltip="Digital Ocean"
                                    data-blobity-magnetic="false"
                                >
                                    <SiDigitalocean size={50}/>
                                </Link>
                                <Link
                                    href="https://cloud.google.com/"
                                    target="_blank"
                                    className="w-[20px] text-[20px] md:w-[25px] md:text-[24px] lg:w-[30px] lg:text-[28px]"
                                    data-blobity-tooltip="Google Cloud"
                                    data-blobity-magnetic="false"
                                >
                                    <SiGooglecloud size={50}/>
                                </Link>
                            </AnimatedTools>
                        </div>
                    </div>
                    <div className="mb-10 flex w-[100%] flex-col gap-4 text-[18px] font-bold leading-relaxed tracking-wide text-[#e4ded7] md:mb-16 md:gap-6 md:text-[40px] md:leading-relaxed lg:mb-16 lg:w-[50%]">
                        <AnimatedBody delay={0.4} text="Platforms" />
                        <div>
                            <AnimatedTools className="grid grid-cols-5 gap-4" delay={0.4} stepSize={0.1} iconSize={50}>
                                <Link
                                    href="https://www.linux.org/"
                                    target="_blank"
                                    className="w-[20px] text-[20px] md:w-[25px] md:text-[24px] lg:w-[30px] lg:text-[28px]"
                                    data-blobity-tooltip="Linux"
                                    data-blobity-magnetic="false"
                                >
                                    <SiLinux size={50}/>
                                </Link>
                                <Link
                                    href="https://www.microsoft.com/en-in/windows"
                                    target="_blank"
                                    className="w-[20px] text-[20px] md:w-[25px] md:text-[24px] lg:w-[30px] lg:text-[28px]"
                                    data-blobity-tooltip="Windows"
                                    data-blobity-magnetic="false"
                                >
                                    <SiWindows size={50}/>
                                </Link>
                                <Link
                                    href="https://www.android.com/"
                                    target="_blank"
                                    className="w-[20px] text-[20px] md:w-[25px] md:text-[24px] lg:w-[30px] lg:text-[28px]"
                                    data-blobity-tooltip="Android"
                                    data-blobity-magnetic="false"
                                >
                                    <SiAndroid size={50}/>
                                </Link>
                                <Link
                                    href="https://www.apple.com/in/ios"
                                    target="_blank"
                                    className="w-[20px] text-[20px] md:w-[25px] md:text-[24px] lg:w-[30px] lg:text-[28px]"
                                    data-blobity-tooltip="iOS"
                                    data-blobity-magnetic="false"
                                >
                                    <SiIos size={50}/>
                                </Link>
                                <Link
                                    href="https://www.apple.com/in/macos/"
                                    target="_blank"
                                    className="w-[20px] text-[20px] md:w-[25px] md:text-[24px] lg:w-[30px] lg:text-[28px]"
                                    data-blobity-tooltip="MacOS"
                                    data-blobity-magnetic="false"
                                >
                                    <SiMacos size={50}/>
                                </Link>
                            </AnimatedTools>
                        </div>
                    </div>
                    <div className="mb-10 flex w-[100%] flex-col gap-4 text-[18px] font-bold leading-relaxed tracking-wide text-[#e4ded7] md:mb-16 md:gap-6 md:text-[40px] md:leading-relaxed lg:mb-16 lg:w-[50%]">
                        <AnimatedBody delay={0.4} text="Libraries" />
                        <div>
                            <AnimatedTools className="grid grid-cols-4 gap-4" delay={0.4} stepSize={0.1} iconSize={50}>
                                <Link
                                    href="https://www.tensorflow.org/"
                                    target="_blank"
                                    className="w-[20px] text-[20px] md:w-[25px] md:text-[24px] lg:w-[30px] lg:text-[28px]"
                                    data-blobity-tooltip="Tensorflow"
                                    data-blobity-magnetic="false"
                                >
                                    <SiTensorflow size={50}/>
                                </Link>
                                <Link
                                    href="https://www.pytorch.org/"
                                    target="_blank"
                                    className="w-[20px] text-[20px] md:w-[25px] md:text-[24px] lg:w-[30px] lg:text-[28px]"
                                    data-blobity-tooltip="Pytorch"
                                    data-blobity-magnetic="false"
                                >
                                    <SiPytorch size={50}/>
                                </Link>
                                <Link
                                    href="https://numpy.org/"
                                    target="_blank"
                                    className="w-[20px] text-[20px] md:w-[25px] md:text-[24px] lg:w-[30px] lg:text-[28px]"
                                    data-blobity-tooltip="Numpy"
                                    data-blobity-magnetic="false"
                                >
                                    <SiNumpy size={50}/>
                                </Link>
                                <Link
                                    href="https://www.scipy.org/"
                                    target="_blank"
                                    className="w-[20px] text-[20px] md:w-[25px] md:text-[24px] lg:w-[30px] lg:text-[28px]"
                                    data-blobity-tooltip="Scipy"
                                    data-blobity-magnetic="false"
                                >
                                    <SiScipy size={50}/>
                                </Link>
                                <Link
                                    href="https://pandas.pydata.org/"
                                    target="_blank"
                                    className="w-[20px] text-[20px] md:w-[25px] md:text-[24px] lg:w-[30px] lg:text-[28px]"
                                    data-blobity-tooltip="Pandas"
                                    data-blobity-magnetic="false"
                                >
                                    <SiPandas size={50}/>
                                </Link>
                                <Link
                                    href="https://opencv.org/"
                                    target="_blank"
                                    className="w-[20px] text-[20px] md:w-[25px] md:text-[24px] lg:w-[30px] lg:text-[28px]"
                                    data-blobity-tooltip="OpenCV"
                                    data-blobity-magnetic="false"
                                >
                                    <SiOpencv size={50}/>
                                </Link>
                                <Link
                                    href="https://socket.io/"
                                    target="_blank"
                                    className="w-[20px] text-[20px] md:w-[25px] md:text-[24px] lg:w-[30px] lg:text-[28px]"
                                    data-blobity-tooltip="Socket.io"
                                    data-blobity-magnetic="false"
                                >
                                    <SiSocketdotio size={50}/>
                                </Link>
                                <Link
                                    href="https://scikit-learn.org/"
                                    target="_blank"
                                    className="w-[20px] text-[20px] md:w-[25px] md:text-[24px] lg:w-[30px] lg:text-[28px]"
                                    data-blobity-tooltip="Scikit-learn"
                                    data-blobity-magnetic="false"
                                >
                                    <SiScikitlearn size={50}/>
                                </Link>
                            </AnimatedTools>
                        </div>
                    </div>
                    <div className="mb-10 flex w-[100%] flex-col gap-4 text-[18px] font-bold leading-relaxed tracking-wide text-[#e4ded7] md:mb-16 md:gap-6 md:text-[40px] md:leading-relaxed lg:mb-16 lg:w-[50%]">
                        <AnimatedBody delay={0.2} text="Frontend" />
                        <div>
                            <AnimatedTools className="grid grid-cols-6 gap-4" delay={0.2} stepSize={0.1} iconSize={50}>
                                <Link
                                    href="https://angular.io/"
                                    target="_blank"
                                    className="w-[20px] text-[20px] md:w-[25px] md:text-[24px] lg:w-[30px] lg:text-[28px]"
                                    data-blobity-tooltip="Angular"
                                    data-blobity-magnetic="false"
                                >
                                    <SiAngular size={50}/>
                                </Link>
                                <Link
                                    href="https://reactjs.org/"
                                    target="_blank"
                                    className="w-[20px] text-[20px] md:w-[25px] md:text-[24px] lg:w-[30px] lg:text-[28px]"
                                    data-blobity-tooltip="React"
                                    data-blobity-magnetic="false"
                                >
                                    <SiReact size={50}/>
                                </Link>
                                <Link
                                    href="https://nextjs.org/"
                                    target="_blank"
                                    className="w-[20px] text-[20px] md:w-[25px] md:text-[24px] lg:w-[30px] lg:text-[28px]"
                                    data-blobity-tooltip="Next.js"
                                    data-blobity-magnetic="false"
                                >
                                    <SiNextdotjs size={50}/>
                                </Link>
                                <Link
                                    href="https://gohugo.io/"
                                    target="_blank"
                                    className="w-[20px] text-[20px] md:w-[25px] md:text-[24px] lg:w-[30px] lg:text-[28px]"
                                    data-blobity-tooltip="Hugo"
                                    data-blobity-magnetic="false"
                                >
                                    <SiHugo size={50}/>
                                </Link>
                                <Link
                                    href="https://jekyllrb.com/"
                                    target="_blank"
                                    className="w-[20px] text-[20px] md:w-[25px] md:text-[24px] lg:w-[30px] lg:text-[28px]"
                                    data-blobity-tooltip="Jekyll"
                                    data-blobity-magnetic="false"
                                >
                                    <SiJekyll size={50}/>
                                </Link>
                                <Link
                                    href="https://flutter.dev/"
                                    target="_blank"
                                    className="w-[20px] text-[20px] md:w-[25px] md:text-[24px] lg:w-[30px] lg:text-[28px]"
                                    data-blobity-tooltip="Flutter"
                                    data-blobity-magnetic="false"
                                >
                                    <SiFlutter size={50}/>
                                </Link>
                            </AnimatedTools>
                        </div>
                    </div>
                    <div className="mb-10 flex w-[100%] flex-col gap-4 text-[18px] font-bold leading-relaxed tracking-wide text-[#e4ded7] md:mb-16 md:gap-6 md:text-[40px] md:leading-relaxed lg:mb-16 lg:w-[50%]">
                        <AnimatedBody delay={0.3} text="Backend" />
                        <div>
                            <AnimatedTools className="grid grid-cols-5 gap-4" delay={0.3} stepSize={0.1} iconSize={50}>
                                <Link
                                    href="https://www.djangoproject.com/"
                                    target="_blank"
                                    className="w-[20px] text-[20px] md:w-[25px] md:text-[24px] lg:w-[30px] lg:text-[28px]"
                                    data-blobity-tooltip="Django"
                                    data-blobity-magnetic="false"
                                >
                                    <SiDjango size={50}/>
                                </Link>
                                <Link
                                    href="https://flask.palletsprojects.com/"
                                    target="_blank"
                                    className="w-[20px] text-[20px] md:w-[25px] md:text-[24px] lg:w-[30px] lg:text-[28px]"
                                    data-blobity-tooltip="Flask"
                                    data-blobity-magnetic="false"
                                >
                                    <SiFlask size={50}/>
                                </Link>
                                <Link
                                    href="https://fastapi.tiangolo.com/"
                                    target="_blank"
                                    className="w-[20px] text-[20px] md:w-[25px] md:text-[24px] lg:w-[30px] lg:text-[28px]"
                                    data-blobity-tooltip="FastAPI"
                                    data-blobity-magnetic="false"
                                >
                                    <SiFastapi size={50}/>
                                </Link>
                                <Link
                                    href="https://firebase.google.com/"
                                    target="_blank"
                                    className="w-[20px] text-[20px] md:w-[25px] md:text-[24px] lg:w-[30px] lg:text-[28px]"
                                    data-blobity-tooltip="Firebase"
                                    data-blobity-magnetic="false"
                                >
                                    <SiFirebase size={50}/>
                                </Link>
                                <Link
                                    href="https://spring.io/"
                                    target="_blank"
                                    className="w-[20px] text-[20px] md:w-[25px] md:text-[24px] lg:w-[30px] lg:text-[28px]"
                                    data-blobity-tooltip="Spring"
                                    data-blobity-magnetic="false"
                                >
                                    <SiSpring size={50}/>
                                </Link>
                            </AnimatedTools>
                        </div>
                    </div>
                    <div className="mb-10 flex w-[100%] flex-col gap-4 text-[18px] font-bold leading-relaxed tracking-wide text-[#e4ded7] md:mb-16 md:gap-6 md:text-[40px] md:leading-relaxed lg:mb-16 lg:w-[50%]">
                        <AnimatedBody delay={0.4} text="Tools" />
                        <div>
                            <AnimatedTools className="grid grid-cols-6 gap-4" delay={0.4} stepSize={0.1} iconSize={50}>
                                <Link
                                    href="https://github.com/"
                                    target="_blank"
                                    className="w-[20px] text-[20px] md:w-[25px] md:text-[24px] lg:w-[30px] lg:text-[28px]"
                                    data-blobity-tooltip="Github"
                                    data-blobity-magnetic="false"
                                >
                                    <SiGithub size={50}/>
                                </Link>
                                <Link
                                    href="https://git-scm.com/"
                                    target="_blank"
                                    className="w-[20px] text-[20px] md:w-[25px] md:text-[24px] lg:w-[30px] lg:text-[28px]"
                                    data-blobity-tooltip="Git"
                                    data-blobity-magnetic="false"
                                >
                                    <SiGit size={50}/>
                                </Link>
                                <Link
                                    href="https://code.visualstudio.com/"
                                    target="_blank"
                                    className="w-[20px] text-[20px] md:w-[25px] md:text-[24px] lg:w-[30px] lg:text-[28px]"
                                    data-blobity-tooltip="VS Code"
                                    data-blobity-magnetic="false"
                                >
                                    <SiVisualstudiocode size={50}/>
                                </Link>
                                <Link
                                    href="https://www.jetbrains.com/idea/"
                                    target="_blank"
                                    className="w-[20px] text-[20px] md:w-[25px] md:text-[24px] lg:w-[30px] lg:text-[28px]"
                                    data-blobity-tooltip="IntelliJ"
                                    data-blobity-magnetic="false"
                                >
                                    <SiIntellijidea size={50}/>
                                </Link>
                                <Link
                                    href="https://developer.android.com/studio"
                                    target="_blank"
                                    className="w-[20px] text-[20px] md:w-[25px] md:text-[24px] lg:w-[30px] lg:text-[28px]"
                                    data-blobity-tooltip="Android Studio"
                                    data-blobity-magnetic="false"
                                >
                                    <SiAndroidstudio size={50}/>
                                </Link>
                                <Link
                                    href="https://www.postgresql.org/"
                                    target="_blank"
                                    className="w-[20px] text-[20px] md:w-[25px] md:text-[24px] lg:w-[30px] lg:text-[28px]"
                                    data-blobity-tooltip="PostgreSQL"
                                    data-blobity-magnetic="false"
                                >
                                    <SiPostgresql size={50}/>
                                </Link>
                                <Link
                                    href="https://jupyter.org/"
                                    target="_blank"
                                    className="w-[20px] text-[20px] md:w-[25px] md:text-[24px] lg:w-[30px] lg:text-[28px]"
                                    data-blobity-tooltip="Jupyter"
                                    data-blobity-magnetic="false"
                                >
                                    <SiJupyter size={50}/>
                                </Link>
                                <Link
                                    href="https://colab.research.google.com/"
                                    target="_blank"
                                    className="w-[20px] text-[20px] md:w-[25px] md:text-[24px] lg:w-[30px] lg:text-[28px]"
                                    data-blobity-tooltip="Google Colab"
                                    data-blobity-magnetic="false"
                                >
                                    <SiGooglecolab size={50}/>
                                </Link>
                                <Link
                                    href="https://www.gitkraken.com/"
                                    target="_blank"
                                    className="w-[20px] text-[20px] md:w-[25px] md:text-[24px] lg:w-[30px] lg:text-[28px]"
                                    data-blobity-tooltip="Gitkraken"
                                    data-blobity-magnetic="false"
                                >
                                    <SiGitkraken size={50}/>
                                </Link>
                                <Link
                                    href="https://help.gnome.org/users/gnome-terminal/stable/"
                                    target="_blank"
                                    className="w-[20px] text-[20px] md:w-[25px] md:text-[24px] lg:w-[30px] lg:text-[28px]"
                                    data-blobity-tooltip="Gnome Terminal"
                                    data-blobity-magnetic="false"
                                >
                                    <SiGnometerminal size={50}/>
                                </Link>
                                <Link
                                    href="https://www.gnu.org/home.en.html"
                                    target="_blank"
                                    className="w-[20px] text-[20px] md:w-[25px] md:text-[24px] lg:w-[30px] lg:text-[28px]"
                                    data-blobity-tooltip="GNU"
                                    data-blobity-magnetic="false"
                                >
                                    <SiGnu size={50}/>
                                </Link>
                                <Link
                                    href="https://www.gnu.org/software/bash/"
                                    target="_blank"
                                    className="w-[20px] text-[20px] md:w-[25px] md:text-[24px] lg:w-[30px] lg:text-[28px]"
                                    data-blobity-tooltip="GNU Bash"
                                    data-blobity-magnetic="false"
                                >
                                    <SiGnubash size={50}/>
                                </Link>
                            </AnimatedTools>
                        </div>
                    </div>
                    <div className="mb-10 flex w-[100%] flex-col gap-4 text-[18px] font-bold leading-relaxed tracking-wide text-[#e4ded7] md:mb-16 md:gap-6 md:text-[40px] md:leading-relaxed lg:mb-16 lg:w-[50%]">
                        <AnimatedBody delay={0.1} text="Design" />
                        <div>
                            <AnimatedTools className="grid grid-cols-5 gap-4" delay={0.1} stepSize={0.1} iconSize={50}>
                                <Link
                                    href="https://www.adobe.com/products/photoshop.html"
                                    target="_blank"
                                    className="w-[20px] text-[20px] md:w-[25px] md:text-[24px] lg:w-[30px] lg:text-[28px]"
                                    data-blobity-tooltip="Photoshop"
                                    data-blobity-magnetic="false"
                                >
                                    <SiAdobephotoshop size={50}/>
                                </Link>
                                <Link
                                    href="https://www.figma.com/"
                                    target="_blank"
                                    className="w-[20px] text-[20px] md:w-[25px] md:text-[24px] lg:w-[30px] lg:text-[28px]"
                                    data-blobity-tooltip="Figma"
                                    data-blobity-magnetic="false"
                                >
                                    <SiFigma size={50}/>
                                </Link>
                                <Link
                                    href="https://www.adobe.com/products/illustrator.html"
                                    target="_blank"
                                    className="w-[20px] text-[20px] md:w-[25px] md:text-[24px] lg:w-[30px] lg:text-[28px]"
                                    data-blobity-tooltip="Illustrator"
                                    data-blobity-magnetic="false"
                                >
                                    <SiAdobeillustrator size={50}/>
                                </Link>
                                <Link
                                    href="https://fonts.google.com/"
                                    target="_blank"
                                    className="w-[20px] text-[20px] md:w-[25px] md:text-[24px] lg:w-[30px] lg:text-[28px]"
                                    data-blobity-tooltip="Google Fonts"
                                    data-blobity-magnetic="false"
                                >
                                    <SiGooglefonts size={50}/>
                                </Link>
                            </AnimatedTools>
                        </div>
                    </div>
                    <div className="mb-10 flex w-[100%] flex-col gap-4 text-[18px] font-bold leading-relaxed tracking-wide text-[#e4ded7] md:mb-16 md:gap-6 md:text-[40px] md:leading-relaxed lg:mb-16 lg:w-[50%]">
                        <AnimatedBody delay={0.5} text="Languages" />
                        <span style={{ display: 'flex', alignItems: 'center' }}>
                            <Link
                                href="https://www.python.org/"
                                target="_blank"
                                className="w-[20px] text-[20px] md:w-[25px] md:text-[24px] lg:w-[30px] lg:text-[28px]"
                                data-blobity-tooltip="Python"
                                data-blobity-magnetic="false"
                            >
                                <SiPython size={50}/>
                            </Link>
                            
                            <div className="w-full bg-gray-200 rounded-full h-1.5 ml-10 mr-2 dark:bg-gray-700">
                                <div className="bg-green-600 h-1.5 rounded-full dark:bg-green-500" style={{ width: '95%' } as React.CSSProperties}></div>
                            </div>
                        </span>
                        <span style={{ display: 'flex', alignItems: 'center' }}>
                            <Link
                                href="https://cplusplus.com/"
                                target="_blank"
                                className="w-[20px] text-[20px] md:w-[25px] md:text-[24px] lg:w-[30px] lg:text-[28px]"
                                data-blobity-tooltip="C++"
                                data-blobity-magnetic="false"
                            >
                                <SiCplusplus size={50}/>
                            </Link>
                            
                            <div className="w-full bg-gray-200 rounded-full h-1.5 ml-10 mr-2 dark:bg-gray-700">
                                <div className="bg-green-600 h-1.5 rounded-full dark:bg-green-500" style={{ width: '85%' } as React.CSSProperties}></div>
                            </div>
                        </span>
                        <span style={{ display: 'flex', alignItems: 'center' }}>
                            <Link
                                href="https://www.java.com/en/"
                                target="_blank"
                                className="w-[20px] text-[20px] md:w-[25px] md:text-[24px] lg:w-[30px] lg:text-[28px]"
                                data-blobity-tooltip="Java"
                                data-blobity-magnetic="false"
                            >
                                <FaJava size={50}/>
                            </Link>
                            
                            <div className="w-full bg-gray-200 rounded-full h-1.5 ml-10 mr-2 dark:bg-gray-700">
                                <div className="bg-green-600 h-1.5 rounded-full dark:bg-green-500" style={{ width: '85%' } as React.CSSProperties}></div>
                            </div>
                        </span>
                        <span style={{ display: 'flex', alignItems: 'center' }}>
                            <Link
                                href="https://www.javascript.com/"
                                target="_blank"
                                className="w-[20px] text-[20px] md:w-[25px] md:text-[24px] lg:w-[30px] lg:text-[28px]"
                                data-blobity-tooltip="JavaSript"
                                data-blobity-magnetic="false"
                            >
                                <SiJavascript size={50}/>
                            </Link>
                            
                            <div className="w-full bg-gray-200 rounded-full h-1.5 ml-10 mr-2 dark:bg-gray-700">
                                <div className="bg-green-600 h-1.5 rounded-full dark:bg-green-500" style={{ width: '80%' } as React.CSSProperties}></div>
                            </div>
                        </span>
                        <span style={{ display: 'flex', alignItems: 'center' }}>
                            <Link
                                href="https://www.latex-project.org/"
                                target="_blank"
                                className="w-[20px] text-[20px] md:w-[25px] md:text-[24px] lg:w-[30px] lg:text-[28px]"
                                data-blobity-tooltip="Latex"
                                data-blobity-magnetic="false"
                            >
                                <SiLatex size={50}/>
                            </Link>
                            
                            <div className="w-full bg-gray-200 rounded-full h-1.5 ml-10 mr-2 dark:bg-gray-700">
                                <div className="bg-green-600 h-1.5 rounded-full dark:bg-green-500" style={{ width: '80%' } as React.CSSProperties}></div>
                            </div>
                        </span>
                        <span style={{ display: 'flex', alignItems: 'center' }}>
                            <Link
                                href="https://www.typescriptlang.org/"
                                target="_blank"
                                className="w-[20px] text-[20px] md:w-[25px] md:text-[24px] lg:w-[30px] lg:text-[28px]"
                                data-blobity-tooltip="TypeScript"
                                data-blobity-magnetic="false"
                            >
                                <SiTypescript size={50}/>
                            </Link>
                            
                            <div className="w-full bg-gray-200 rounded-full h-1.5 ml-10 mr-2 dark:bg-gray-700">
                                <div className="bg-yellow-400 h-1.5 rounded-full" style={{ width: '70%' } as React.CSSProperties}></div>
                            </div>
                        </span>
                        <span style={{ display: 'flex', alignItems: 'center' }}>
                            <Link
                                href="https://golang.org/"
                                target="_blank"
                                className="w-[20px] text-[20px] md:w-[25px] md:text-[24px] lg:w-[30px] lg:text-[28px]"
                                data-blobity-tooltip="Go"
                                data-blobity-magnetic="false"
                            >
                                <SiGo size={50}/>
                            </Link>
                            
                            <div className="w-full bg-gray-200 rounded-full h-1.5 ml-10 mr-2 dark:bg-gray-700">
                                <div className="bg-yellow-400 h-1.5 rounded-full" style={{ width: '65%' } as React.CSSProperties}></div>
                            </div>
                        </span>
                        <span style={{ display: 'flex', alignItems: 'center' }}>
                            <Link
                                href="https://dart.dev/"
                                target="_blank"
                                className="w-[20px] text-[20px] md:w-[25px] md:text-[24px] lg:w-[30px] lg:text-[28px]"
                                data-blobity-tooltip="Dart"
                                data-blobity-magnetic="false"
                            >
                                <SiDart size={50}/>
                            </Link>
                            
                            <div className="w-full bg-gray-200 rounded-full h-1.5 ml-10 mr-2 dark:bg-gray-700">
                                <div className="bg-yellow-400 h-1.5 rounded-full" style={{ width: '60%' } as React.CSSProperties}></div>
                            </div>
                        </span>
                        <span style={{ display: 'flex', alignItems: 'center' }}>
                            <Link
                                href="https://octave.org/"
                                target="_blank"
                                className="w-[20px] text-[20px] md:w-[25px] md:text-[24px] lg:w-[30px] lg:text-[28px]"
                                data-blobity-tooltip="Octave"
                                data-blobity-magnetic="false"
                            >
                                <SiOctave size={50}/>
                            </Link>
                            
                            <div className="w-full bg-gray-200 rounded-full h-1.5 ml-10 mr-2 dark:bg-gray-700">
                                <div className="bg-yellow-400 h-1.5 rounded-full" style={{ width: '50%' } as React.CSSProperties}></div>
                            </div>
                        </span>
                        <span style={{ display: 'flex', alignItems: 'center' }}>
                            <Link
                                href="https://www.r-project.org/"
                                target="_blank"
                                className="w-[20px] text-[20px] md:w-[25px] md:text-[24px] lg:w-[30px] lg:text-[28px]"
                                data-blobity-tooltip="R"
                                data-blobity-magnetic="false"
                            >
                                <SiR size={50}/>
                            </Link>
                            
                            <div className="w-full bg-gray-200 rounded-full h-1.5 ml-10 mr-2 dark:bg-gray-700">
                                <div className="bg-orange-600 h-1.5 rounded-full dark:bg-orange-500" style={{ width: '30%' } as React.CSSProperties}></div>
                            </div>
                        </span>
                    </div>
                </div>
                
                {/* <div className="mb-1 text-base font-medium dark:text-white">Small</div>
                <div className="w-full bg-gray-200 rounded-full h-1.5 mb-4 dark:bg-gray-700">
                    <div className="bg-blue-600 h-1.5 rounded-full dark:bg-blue-500" style={{ width: '45%' } as React.CSSProperties}></div>
                </div> */}


            </div>
        </section>
    );
};

export default Tools;
