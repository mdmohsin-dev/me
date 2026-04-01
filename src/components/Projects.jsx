import SectionTitle from "./SectionTitle";
import lawyerImg from "../assets/lawyer.png"
import boipoka from "../assets/boipoka.png"
import bpl from "../assets/bpl.png"
import { FaExternalLinkAlt } from "react-icons/fa";
import { LuCodeXml } from "react-icons/lu";


const Projects = () => {

    const projectsData = [
        {
            id: 1,
            name: "Law.BD",
            img: lawyerImg,
            description: "A lawyer appointment booking web application where users can explore lawyer profiles, check availability....",
            live_link: "https://lawyer-bd-silk.vercel.app/",
            github_link: "https://github.com/mdmohsin-dev/lawyer-bd",
        },
        {
            id: 2,
            name: "Boi poka",
            img: boipoka,
            description: "A React web app for browsing books, viewing details, and managing read list and wishlist with sorting by rating and....",
            live_link: "https://boi-poka-roan.vercel.app/",
            github_link: "https://github.com/mdmohsin-dev/boi-poka",
        },
        {
            id: 3,
            name: "BPL dream 11",
            img: bpl,
            description: "Fantasy cricket web app where users can claim coins and select players based on their price.....",
            live_link: "https://bpl-dream-11-delta.vercel.app/",
            github_link: "https://github.com/mdmohsin-dev/BPL-dream-11",
        }
    ]

    return (
        <div className="max-w-350 mx-auto lg:mt-32 xl:px-5 mt-20 lg:p-7 p-5 scroll-mt-24" id="projetcs">
            <SectionTitle title="latest projects"></SectionTitle>
            <div className="grid xl:grid-cols-3 lg:grid-cols-2 justify-center lg:gap-9 gap-6 md:gap-7 lg:mt-12 mt-9">
                {
                    projectsData.map(project =>
                        <div key={project.id} className="w-full flex flex-col md:flex-row lg:flex-col gap-8 h-full justify-between md:items-center  rounded-xl bg-[#212020] overflow-hidden group cursor-pointer">
                            <div className="w-full overflow-hidden">
                                <img className="lg:w-full md:w-80 md:h-72 h-64 rounded-t-xl object-cover transition-transform duration-500 group-hover:scale-110" src={project.img} alt="" />
                            </div>
                            <div className="px-5 pb-5">
                                <h2 className="text-3xl font-bold">{project.name}</h2>
                                <p className="pt-3 text-gray-400">{project.description}</p>
                                <div className="flex justify-between mt-6">
                                    <a className="btn bg-[#4f2bdb] w-2/4 flex items-center gap-2 transition-all duration-300 hover:-translate-y-1" href={project.live_link} target="_blank"><FaExternalLinkAlt size={18}></FaExternalLinkAlt> Live Link</a>
                                    <a className="btn bg-[#4f2bdb] transition-all duration-300 hover:-translate-y-1" href={project.github_link} target="_blank"><LuCodeXml size={26}></LuCodeXml></a>
                                </div>
                            </div>
                        </div>)
                }
            </div>
        </div>
    );
};

export default Projects;