import { useState } from "react";


const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const navLinks = <>
        <li className="text-lg"><a href="">Home</a></li>
        <li className="text-lg"><a href="">About</a></li>
        <li className="text-lg"><a href="">Skills</a></li>
        <li className="text-lg"><a href="">Projects</a></li>
        <li className="text-lg"><a href="">Contact</a></li>
        <li className="text-lg md:hidden"><a href="">Download Resume</a></li>
    </>
    return (
        <div className="fixed w-full z-50 bg-black">
            {/* NAVBAR */}
            <nav className="relative flex items-center justify-between px-8 py-5 border-b border-white/5">
                <div className="logo-font text-3xl font-bold" style={{ color: "#cc00ff" }}>
                    Mohsin.
                </div>

                {/* Desktop nav */}
                <div className="hidden md:flex items-center gap-10">
                    <ul className="flex gap-10">
                        {navLinks}
                    </ul>
                </div>

                <button className="resume-btn hidden md:flex items-center gap-2 px-5 py-2 text-xs font-semibold tracking-widest text-white rounded-sm transition-all hover:text-purple-300">
                    Resume
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                </button>

                {/* Mobile hamburger */}
                <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
                    <div className="space-y-1.5">
                        <span className={`block w-6 h-0.5 bg-white transition-all ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
                        <span className={`block w-6 h-0.5 bg-white transition-all ${menuOpen ? "opacity-0" : ""}`} />
                        <span className={`block w-6 h-0.5 bg-white transition-all ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
                    </div>
                </button>
            </nav>

            {/* Mobile menu */}
            {menuOpen && (
                <ul className="flex flex-col gap-5 p-6">
                    {navLinks}
                </ul>
            )}
        </div>
    );
};

export default Navbar;