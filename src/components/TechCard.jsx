import SectionTitle from "./SectionTitle";
import mongodbIcon from "../assets/skills-icon/mongodb.png"
import reactIcon from "../assets/skills-icon/react.png"
import jsIcon from "../assets/skills-icon/js.jpg"
import tailwindIcon from "../assets/skills-icon/tailwind.png"
import expressIcon from "../assets/skills-icon/express-js.jpg"
import nodejsIcon from "../assets/skills-icon/node.png"
import firebaseIcon from "../assets/skills-icon/firebase.png"
import htmlIcon from "../assets/skills-icon/html.webp"
import githubIcon from "../assets/skills-icon/github.png"
import gitIcon from "../assets/skills-icon/git.png"
import cssIcon from "../assets/skills-icon/CSS.png"

const techs = [
    {
        name: "HTML",
        image: htmlIcon,
        size: {
            width: "58px", height: "58px"
        }
    },
    {
        name: "CSS",
        image: cssIcon,
        size: {
            width: "50px", height: "50px"
        }
    },
    {
        name: "Javascript",
        image: jsIcon,
        size: {
            width: "50px", height: "50px"
        }
    },
    {
        name: "React",
        image: reactIcon,
        size: {
            width: "55px", height: "55px"
        }
    },
    {
        name: "Tailwind CSS",
        image: tailwindIcon,
        size: {
            width: "55px", height: "55px"
        }
    },
    {
        name: "NodeJs",
        image: nodejsIcon,
        size: {
            width: "55px", height: "55px"
        }
    },
    {
        name: "MongoDB",
        image: mongodbIcon,
        size: {
            width: "55px", height: "55px"
        }
    },
    {
        name: "ExpressJs",
        image: expressIcon,
        size: {
            width: "55px", height: "55px"
        }
    },
    {
        name: "Firebase",
        image: firebaseIcon,
        size: {
            width: "55px", height: "55px"
        }
    },

    {
        name: "Github",
         image: githubIcon,
        size: {
            width: "55px", height: "55px"
        }
    },
    {
        name: "Git",
        image: gitIcon,
        size: {
            width: "55px", height: "55px"
        }
    },

];


export default function TechCard() {

    return (
        <div className="bg-[#101010] mt-32 scroll-mt-24" id="skills">
            <div className="max-w-350 mx-auto py-14">
                <SectionTitle title="tech stack"></SectionTitle>
                <div className="lg:pt-14 md:pt-10 pt-6">
                    <div className="grid lg:grid-cols-9 md:grid-cols-6 grid-cols-3 gap-5">
                        {techs.map((tech) => (
                            <div className=" p-4 gap-2 flex flex-col justify-center items-center"
                                key={tech.name}>
                                <img src={tech.image} style={{ width: tech.size?.width, height: tech.size?.height }} className="rounded-lg" alt="" />
                                <span className="text-[15px] font-semibold text-white text-center" >
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