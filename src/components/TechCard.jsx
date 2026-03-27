import { FaGithub, FaHtml5, FaJsSquare, FaNodeJs, FaReact } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { IoLogoFirebase } from "react-icons/io5";
import { SiDaisyui, SiNpm } from "react-icons/si";
import SectionTitle from "./SectionTitle";
import { RiTailwindCssFill } from "react-icons/ri";

const techs = [
    {
        name: "HTML",
        icon: (
            <FaHtml5 color="#E34F26" size={34}></FaHtml5>
        ),
    },
    {
        name: "CSS",
        icon: (
            <IoLogoCss3 color="#1C88C7" size={34}></IoLogoCss3>
        ),
    },
    {
        name: "Javascript",
        icon: (
            <FaJsSquare size={34} color="yellow"></FaJsSquare>
        ),
    },
    {
        name: "React",
        icon: (
            <FaReact size={34} color="#61DAFB"></FaReact>
        ),
    },
    {
        name: "Tailwind",
        icon: (
            <RiTailwindCssFill size={34} color="#61DAFB"></RiTailwindCssFill>
        ),
    },
    {
        name: "DaisyUI",
        icon: (
            <SiDaisyui size={34} color="#1AD1A5"></SiDaisyui>
        ),
    },
    {
        name: "Node.js",
        icon: (
            <FaNodeJs color="green" size={34}></FaNodeJs>
        ),
    },
    {
        name: "Firebase",
        icon: (
            <IoLogoFirebase size={34} color="orange"></IoLogoFirebase>
        ),
    },

    {
        name: "Github",
        icon: (
            <FaGithub size={34}></FaGithub>
        ),
    },
    {
        name: "Git",
        icon: (
            <svg width="35" height="50" viewBox="0 0 97 97" xmlns="http://www.w3.org/2000/svg">
                <path fill="#F05032" d="M92.71 44.41L52.59 4.29c-5.72-5.72-15-5.72-20.71 0l-8.32 8.32 10.54 10.54c2.45-.83 5.26-.27 7.18 1.66 1.94 1.94 2.49 4.79 1.62 7.25l10.16 10.16c2.46-.85 5.33-.3 7.28 1.66 2.72 2.72 2.72 7.13 0 9.85-2.72 2.72-7.13 2.72-9.85 0-2.05-2.05-2.55-5.08-1.5-7.61l-9.48-9.48v24.98c.67.33 1.3.77 1.83 1.3 2.72 2.72 2.72 7.13 0 9.85-2.72 2.72-7.13 2.72-9.85 0-2.72-2.72-2.72-7.13 0-9.85.67-.67 1.47-1.18 2.33-1.5V36.77c-.86-.32-1.66-.83-2.33-1.5-2.06-2.06-2.56-5.11-1.47-7.65L11.3 17.07 4.29 24.09c-5.72 5.72-5.72 15 0 20.71l40.12 40.12c5.72 5.72 15 5.72 20.71 0l27.59-27.59c5.72-5.72 5.72-15 0-20.71z" />
            </svg>
        ),
    },
    {
        name: "REST API",
        icon: (
            <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
                <ellipse cx="24" cy="14" rx="16" ry="5" fill="#1d4ed8" />
                <ellipse cx="24" cy="14" rx="16" ry="5" fill="url(#dbGrad1)" />
                <rect x="8" y="14" width="32" height="10" fill="#2563eb" />
                <ellipse cx="24" cy="24" rx="16" ry="5" fill="#1d4ed8" />
                <rect x="8" y="24" width="32" height="10" fill="#1d4ed8" />
                <ellipse cx="24" cy="34" rx="16" ry="5" fill="#60a5fa" />
                <defs>
                    <linearGradient id="dbGrad1" x1="8" y1="9" x2="40" y2="19">
                        <stop stopColor="#93c5fd" stopOpacity="0.6" />
                        <stop offset="1" stopColor="#1d4ed8" stopOpacity="0" />
                    </linearGradient>
                </defs>
            </svg>
        ),
    },

    {
        name: "NPM",
        color: "white",
        icon: (
            <SiNpm size={34} color="red"></SiNpm>
        ),
    },
];


export default function TechCard() {

    return (
        <div className="bg-[#101010] lg:mt-1 md:mt-30 mt-20">
            <div className="max-w-350 mx-auto py-14">
                <SectionTitle title="tech stack"></SectionTitle>
                <div className="pt-14">
                    <div className="grid grid-cols-9 gap-5">
                        {techs.map((tech) => (
                            <div className=" p-4 gap-2 flex flex-col"
                                key={tech.name}>
                                <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: 44 }}>
                                    {tech.icon}
                                </div>
                                <span className="text-[15px] text-white text-center" >
                                    {tech.name}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}