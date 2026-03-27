import SectionTitle from "./SectionTitle";
import me from "../assets/me.jpeg"

const About = () => {
    return (
        <div>
            <SectionTitle title="about me"></SectionTitle>
            <div className="flex items-center justify-center p-6 font-mono max-w-350 mx-auto">
                <div className="w-full flex gap-16">

                    {/* Left Profile Card */}
                    <div className="bg-[#111111] border border-gray-800 rounded-2xl overflow-hidden shadow-2xl w-1/3">
                        {/* Top accent line */}
                        <div className="h-1 bg-linear-to-r from-orange-500 via-blue-500 to-emerald-500"></div>

                        <div className="p-8">
                            {/* Profile Picture */}
                            <div className="flex justify-center mb-4 relative">
                                <div className="relative">
                                    <div className="w-48 h-48 rounded-full border-4 border-gray-700 overflow-hidden">
                                        <img
                                            src={me}
                                            alt="Mohsin"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    {/* Online status dot */}
                                    <div className="absolute bottom-3 right-3 w-5 h-5 bg-emerald-500 rounded-full border-4 border-[#111111]"></div>
                                </div>
                            </div>

                            {/* Name & Title */}
                            <div className="text-center mb-10">
                                <h1 className="text-3xl font-bold text-white mb-1">MOHSIN</h1>
                                <div className="text-emerald-400 text-sm font-medium tracking-wider">
                                    FRONTEND DEVELOPER
                                </div>
                            </div>

                            {/* Info Section */}
                            <div className="space-y-6 text-sm">
                                <div className="flex justify-between border-b border-gray-800 pb-4">
                                    <span className="text-gray-500">LOCATION</span>
                                    <span className="text-white">Dhaka, Bangladesh</span>
                                </div>

                                <div className="flex justify-between border-b border-gray-800 pb-4">
                                    <span className="text-gray-500">STATUS</span>
                                    <div className="bg-emerald-500/10 text-emerald-400 px-4 py-1 rounded-full text-xs font-medium border border-emerald-500/30">
                                        Active
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Terminal / Info Panel */}
                    <div className="bg-[#0f0f0f] border border-gray-800 rounded-2xl p-8 shadow-2xl w-2/3">
                        <div className="flex items-center gap-2 mb-6 text-gray-400">
                            <span className="text-purple-400">❯</span>
                            <span className="text-sm">user_profile.log</span>
                        </div>

                        {/* Whoami Section */}
                        <div className="mb-8">
                            <div className="flex items-center gap-2 mb-3">
                                <span className="text-cyan-400">→</span>
                                <span className="text-cyan-400 font-medium">whoami</span>
                            </div>
                            <p className="text-gray-300 leading-relaxed pl-6">
                                Frontend Developer with a strong focus on building modern, scalable, and user-friendly web applications. Skilled in JavaScript, React, and Tailwind CSS, with experience integrating REST APIs and implementing secure authentication systems using Firebase. Passionate about creating clean, efficient, and high-performance user interfaces.
                            </p>
                        </div>

                        {/* Cat Mission Section */}
                        <div className="mb-10">
                            <div className="flex items-center gap-2 mb-3">
                                <span className="text-cyan-400">→</span>
                                <span className="text-cyan-400 font-medium">cat mission.txt</span>
                            </div>
                            <p className="text-gray-300 leading-relaxed pl-6">
                                My mission is to build scalable and user-focused web applications that solve real-world problems. While crafting modern frontend experiences, I am growing into a full-stack developer by learning backend systems, authentication, and databases, aiming to deliver clean and efficient solutions.
                            </p>
                        </div>
                       
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;