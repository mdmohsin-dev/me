
import { motion } from "framer-motion";
import {
    SiJavascript, SiReact, SiNextdotjs, SiTypescript,
    SiTailwindcss, SiPrisma, SiNodedotjs, SiExpress,
    SiRedux, SiPostgresql, SiMongodb, SiMongoose, SiFirebase,
} from "react-icons/si";
import SectionTitle from "./SectionTitle";
export default function TechCard() {

    const skills = [
        { skill: "Javascript", level: "Advanced", Icon: SiJavascript, color: "#F7DF1E" },
        { skill: "React", level: "Advanced", Icon: SiReact, color: "#61DAFB" },
        { skill: "TypeScript", level: "Intermediate", Icon: SiTypescript, color: "#3178C6" },
        { skill: "Tailwind CSS", level: "Advanced", Icon: SiTailwindcss, color: "#06B6D4" },
        { skill: "NodeJS", level: "Advanced", Icon: SiNodedotjs, color: "#339933" },
        { skill: "ExpressJS", level: "Advanced", Icon: SiExpress, color: "#828282" },
        { skill: "MongoDB", level: "Advanced", Icon: SiMongodb, color: "#47A248" },
        { skill: "Prisma", level: "Intermediate", Icon: SiPrisma, color: "#2D3748" },
        { skill: "PostgreSQL", level: "Intermediate", Icon: SiPostgresql, color: "#336791" },
        {skill:"NextJS", level:"Intermediate", Icon: SiNextdotjs, color:"#000000"},
    ];

    // Animation Variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 },
        },
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1 },
    };

    return (
        <div className="mt-32 scroll-mt-24" id="skills">
            <div className="max-w-350 mx-auto py-14 px-6">
                <SectionTitle title="tech stack"></SectionTitle>
                <section className="relative">

                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px]  blur-[120px] rounded-full -z-10"></div>

                    <div className="mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-center mb-16"
                        >
                        </motion.div>

                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8"
                        >
                            {skills.map((item, index) => (
                                <motion.div
                                    key={index}
                                    variants={itemVariants}
                                    whileHover={{
                                        scale: 1.05,
                                        rotate: [0, -2, 2, 0],
                                        transition: { duration: 0.3 }
                                    }}
                                    className="group relative p-6 rounded-2xl bg-[#0F0F0F] backdrop-blur-sm flex flex-col items-center justify-center gap-4 transition-all hover:shadow-xl hover:shadow-primary/5"
                                >
                                    {/* Floating Glow Effect on Hover */}
                                    <div
                                        className="absolute inset-0 opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 rounded-2xl -z-10"
                                        style={{ backgroundColor: item.color }}
                                    ></div>

                                    {/* Icon Container */}
                                    <div className="text-5xl transition-transform duration-300 group-hover:scale-110" style={{ color: item.color }}>
                                        <item.Icon />
                                    </div>

                                    {/* Skill Info */}
                                    <div className="text-center">
                                        <h3 className="font-bold text-sm sm:text-base tracking-wide">{item.skill}</h3>

                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </section>
            </div>
        </div>
    );
}


















