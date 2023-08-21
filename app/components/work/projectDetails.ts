import {
    SiFastapi,
    SiNextdotjs,
    SiPostgresql,
    SiPostman,
    SiPython,
    SiFlask,
    SiReact,
    SiGo,
    SiDocker,
    SiMongodb,
    SiHugo,
    SiJekyll,
    SiOpencv,
    SiHeroku,
    SiDiscord,
    SiPytorch,
    SiSocketdotio,
    SiOctave,
    SiScikitlearn,
    SiC,
    SiCplusplus,
    SiCmake,
    SiLlvm,
    SiLinux,
    SiTensorflow,
} from "react-icons/si";
import {IconType} from "react-icons";

export type ProjectProps = {
  id: number;
  name: string;
  description: string;
  technologies: IconType[];
  techNames: string[];
  techLinks: string[];
  github: string;
  demo: string;
  image: string;
  ghavailable: boolean;
  demoavailable: boolean;
};

export const projects = [
    {
        id: 0,
        name: "Video Content Analysis",
        description:
            "This is a tracking and detection algorithm for 3D LiDAR data",
        technologies: [SiPython, SiPytorch, SiTensorflow, SiOpencv],
        techNames: ["Python", "Pytorch", "Tensorflow", "OpenCV"],
        techLinks: ["https://www.python.org/", "https://pytorch.org/", "https://www.tensorflow.org/", "https://opencv.org/"],
        github: "",
        demo: "",
        image: "/projects/lidar.webp",
        ghavailable: false,
        demoavailable: false,
    },
    {
        id: 1,
        name: "Video Codec",
        description:
            "This is a new video compression algorithm based on wave dynamics and rotational symmetry",
        technologies: [SiPython, SiOpencv, SiPytorch],
        techNames: ["Python", "OpenCV", "Pytorch"],
        techLinks: ["https://www.python.org/", "https://opencv.org/", "https://pytorch.org/"],
        github: "",
        demo: "",
        image: "/projects/vid1.webp",
        ghavailable: false,
        demoavailable: false,
    },
    {
        id: 2,
        name: "Grow-Simplee",
        description:
            "This is the submission for the Grow-Simplee high prep problem statement as part of Inter IIT Tech Meet 11.0",
        technologies: [SiPython, SiNextdotjs, SiFastapi, SiPostgresql, SiPostman],
        techNames: ["Python", "Next.js", "FastAPI", "Postgresql", "Postman"],
        techLinks: ["https://www.python.org/", "https://nextjs.org/", "https://fastapi.tiangolo.com/", "https://www.postgresql.org/", "https://www.postman.com/"],
        github: "https://github.com/Aayush2492/grow-simplee-rider-admin-dashboard",
        demo: "",
        image: "/projects/gs.webp",
        ghavailable: true,
        demoavailable: false,
    },
    {
        id: 3,
        name: "Campus Portal",
        description:
            "This is a portal for purposes such as cab sharing, marketplace, lost & found, and many more for the college community",
        technologies: [SiPython, SiNextdotjs, SiFastapi, SiPostgresql, SiPostman],
        techNames: ["Python", "Next.js", "FastAPI", "Postgresql", "Postman"],
        techLinks: ["https://www.python.org/", "https://nextjs.org/", "https://fastapi.tiangolo.com/", "https://www.postgresql.org/", "https://www.postman.com/"],
        github: "https://github.com/LambdaIITH/cab-sharing-portal",
        demo: "",
        image: "/projects/comport.webp",
        ghavailable: true,
        demoavailable: false,
    },
    {
        id: 4,
        name: "Cryptex Portal",
        description:
            "This is a portal for an online treasure hunt event for a global participant base",
        technologies: [SiGo, SiReact, SiPython, SiFlask, SiDocker],
        techNames: ["Go", "React", "Python", "Flask", "Docker"],
        techLinks: ["https://golang.org/", "https://react.dev/", "https://www.python.org/", "https://flask.palletsprojects.com/en/2.3.x/", "https://www.docker.com/"],
        github: "https://github.com/macdeath-AA/cryptex",
        demo: "",
        image: "/projects/tex.webp",
        ghavailable: true,
        demoavailable: false,
    },
    {
        id: 5,
        name: "TEDxIITH",
        description:
            "This is a website for the TEDx chapter of IIT Hyderabad",
        technologies: [SiNextdotjs, SiMongodb, SiHugo, SiJekyll],
        techNames: ["Next.js", "MongoDB", "Hugo", "Jekyll"],
        techLinks: ["https://nextjs.org/", "https://www.mongodb.com/", "https://gohugo.io/", "https://jekyllrb.com/"],
        github: "https://github.com/TEDxIITHyderabad",
        demo: "https://tedxiithyderabad.iith.ac.in/",
        image: "/projects/tedx.webp",
        ghavailable: true,
        demoavailable: true,
    },
    {
        id: 6,
        name: "Literary Bot",
        description:
            "This is a discord bot for the Literary Club of IIT Hyderabad to play several games",
        technologies: [SiPython, SiOpencv, SiHeroku, SiDiscord],
        techNames: ["Python", "OpenCV", "Heroku", "Discord"],
        techLinks: ["https://www.python.org/", "https://opencv.org/", "https://www.heroku.com/", "https://discord.com/developers/docs/intro"],
        github: "https://github.com/LitSocBot/LitSocBot/tree/main",
        demo: "",
        image: "/projects/litsocbot.webp",
        ghavailable: true,
        demoavailable: false,
    },
    {
        id: 7,
        name: "PRAS",
        description:
            "This is an end-to-end Postal Room Automation System for IIT Hyderabad",
        technologies: [SiPython, SiFastapi, SiOpencv, SiReact, SiPostman],
        techNames: ["Python", "FastAPI", "OpenCV", "React", "Postman"],
        techLinks: ["https://www.python.org/", "https://fastapi.tiangolo.com/", "https://opencv.org/", "https://react.dev/", "https://www.postman.com/"],
        github: "https://github.com/GouthamSai22/pras",
        demo: "",
        image: "/projects/pras.webp",
        ghavailable: true,
        demoavailable: false,
    },
    {
        id: 8,
        name: "HRS Attack",
        description:
            "This is a HTTP Request Smuggling attack simulation along with novel detection and mitigation techniques",
        technologies: [SiPython, SiSocketdotio],
        techNames: ["Python", "Socket.io"],
        techLinks: ["https://www.python.org/", "https://python-socketio.readthedocs.io/en/latest/"],
        github: "https://github.com/Vikhyath-vec/request-smuggling",
        demo: "",
        image: "/projects/hrs.webp",
        ghavailable: true,
        demoavailable: false,
    },
    {
        id: 9,
        name: "ML/DL Projects",
        description:
            "This is a collection of all my ML/DL projects",
        technologies: [SiPython, SiOctave, SiPytorch, SiScikitlearn, SiOpencv],
        techNames: ["Python", "Octave", "Pytorch", "Scikit-learn", "OpenCV"],
        techLinks: ["https://www.python.org/", "https://www.gnu.org/software/octave/", "https://pytorch.org/", "https://scikit-learn.org/", "https://opencv.org/"],
        github: "",
        demo: "",
        image: "/projects/mldl.webp",
        ghavailable: true,
        demoavailable: false,
    },
    {
        id: 10,
        name: "Tangent",
        description:
            "This is a compiler for the Tangent programming language which is similar to C",
        technologies: [SiCplusplus, SiCmake, SiLlvm],
        techNames: ["C++", "CMake", "LLVM"],
        techLinks: ["https://www.cplusplus.com/", "https://cmake.org/", "https://llvm.org/"],
        github: "https://github.com/IITH-COMPILERS2/compilers-2-project-team-4-aug22",
        demo: "",
        image: "/projects/tangent1.webp",
        ghavailable: true,
        demoavailable: false,
    },
    {
        id: 11,
        name: "OS Projects",
        description:
            "This is a compilation of customizations done to XV6 and other OS projects",
        technologies: [SiC, SiCplusplus, SiLinux],
        techNames: ["C", "C++", "Linux"],
        techLinks: ["https://www.cprogramming.com/", "https://www.cplusplus.com/", "https://www.linux.org/"],
        github: "",
        demo: "",
        image: "/projects/xv6.webp",
        ghavailable: true,
        demoavailable: false,
    },
];
