import SectionTitle from "./SectionTitle";
import lawyerImg from "../assets/lawyer.png";
import swiftMoveImg from "../assets/swift.png"
import sheba from "../assets/sheba.png"
import { FaExternalLinkAlt } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import {
    SiReact,
    SiTailwindcss,
    SiFirebase,
    SiNodedotjs,
    SiMongodb,
    SiJavascript,
    SiExpress,
    SiTypescript,
    SiPostgresql,
    SiPrisma,
    SiNextdotjs
} from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";

const Projects = () => {
    const projectsData = [
        {
            id: 1,
            name: "Sheba Lab - AI-Powered Healthcare Platform",
            img: sheba,
            description:
                "A web-based courier service platform that allows users to send parcels, track delivery progress, and make online payments. Administrators manage parcel approvals and assign riders, while riders update delivery statuses and complete deliveries.",
            live_link: "",
            github_link: "https://github.com/mdmohsin-dev/Sheba-Lab-Client",
            techs: [
                { icon: <SiTailwindcss size={26} color="#06B6D4" /> },
                { icon: <SiTypescript size={24} color="#3178C6" /> },
                { icon: <SiNextdotjs size={25} color="#ffffff" /> },
                { icon: <SiNodedotjs size={25} color="#339933" /> },
                { icon: <SiExpress size={25} color="#ffffff" /> },
                { icon: <BiLogoPostgresql size={27} color="#3178C6" /> },
                { icon: <SiPrisma size={26} color="#ffffff" /> },
            ],
        },
        {
            id: 2,
            name: "Swift Move - Courier Management System",
            img: swiftMoveImg,
            description:
                "A web-based courier service platform that allows users to send parcels, track delivery progress, and make online payments. Administrators manage parcel approvals and assign riders, while riders update delivery statuses and complete deliveries.",
            live_link: "https://swift-move-b007b.web.app/",
            github_link: "https://github.com/mdmohsin-dev/swift-move-client",
            techs: [
                { icon: <SiTailwindcss size={26} color="#06B6D4" /> },
                { icon: <SiJavascript size={24} color="#F7DF1E" /> },
                { icon: <SiReact size={25} color="#61DAFB" /> },
                { icon: <SiNodedotjs size={25} color="#339933" /> },
                { icon: <SiExpress size={25} color="#828282" /> },
                { icon: <SiMongodb size={26} color="#47A248" /> },
            ],
        },
        {
            id: 3,
            name: "Law.BD",
            img: lawyerImg,
            description:
                "A lawyer appointment booking web application where users can explore lawyer profiles, check availability....",
            live_link: "https://lawyer-bd-silk.vercel.app/",
            github_link: "https://github.com/mdmohsin-dev/lawyer-bd",
            techs: [
                { icon: <SiReact size={25} color="#61DAFB" /> },
                { icon: <SiTailwindcss size={26} color="#06B6D4" /> },
                { icon: <SiJavascript size={24} color="#F7DF1E" /> },
            ],
        },
    ];

    return (
        <div
            className="max-w-330 mx-auto lg:mt-32 xl:px-5 mt-20 lg:p-7 p-5 scroll-mt-24"
            id="projetcs"
        >
            <SectionTitle title="latest projects"></SectionTitle>
            <div className="grid xl:grid-cols-3 lg:grid-cols-2 justify-center lg:gap-9 gap-6 md:gap-7 lg:mt-12 mt-9">
                {projectsData.map((project) => (
                    <div
                        key={project.id}
                        className="w-full flex flex-col md:flex-row lg:flex-col gap-8 h-full justify-between md:items-center rounded-xl bg-[#212020] overflow-hidden group cursor-pointer"
                    >
                        {/* Project Image */}
                        <div className="w-full overflow-hidden">
                            <img
                                className="lg:w-full md:w-80 w-full h-48 rounded-t-xl object-cover transition-transform duration-500 group-hover:scale-110"
                                src={project.img}
                                alt={project.name}
                            />
                        </div>

                        {/* Project Info */}
                        <div className="px-4 pb-5 w-full">
                            <h2 className="text-2xl font-bold">{project.name}</h2>
                            <p className="pt-3 text-gray-400">{project.description}</p>

                            {/* Tech Icons */}
                            <div className="flex flex-wrap gap-4 mt-8">
                                {project.techs.map((tech, index) => (
                                    <div key={index} title={tech.label}>
                                        <span>{tech.icon}</span>
                                    </div>
                                ))}
                            </div>

                            {/* Links */}
                            <div className="flex gap-8 mt-6 pt-3 border-t border-t-gray-700">
                                <a href={project.live_link} target="_blank" rel="noopener noreferrer" className="text-sm" >
                                    <div className="flex items-center gap-2 text-white transition-colors">
                                        <FaExternalLinkAlt />
                                        Live
                                    </div>
                                </a>


                                <a href={project.github_link} target="_blank" rel="noopener noreferrer" className="text-sm">
                                    <div className="flex items-center gap-1 text-white transition-colors">
                                        <FiGithub size={19} />
                                        Code
                                    </div>
                                </a>


                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;