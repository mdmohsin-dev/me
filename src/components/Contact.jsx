import { useState, useEffect } from "react";
import { FaDiscord, FaFacebook, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import contactImg from "../assets/ContactVector.png"

const socialIcons = [
  {
    id: "mail",
    style: { top: "0%", left: "50%" },
    label: (
      <SiGmail size={24}></SiGmail>
    ),
    href: "mailto:mdmohosin.web@gmail.com"
  },
  {
    id: "linkdein",
    style: { bottom: "-15%", left: "50%" },
    label: (
      <FaLinkedin size={24}></FaLinkedin>
    ),
    href: "https://www.linkedin.com/in/mdmohsin-dev/"
  },
  {
    id: "facebook",
    style: { top: "50%", left: "0%" },
    label: (
      <FaFacebook size={28}></FaFacebook>
    ),
  },
  {
    id: "discord",
    style: { top: "50%", right: "-15%" },
    label: (
      <FaDiscord size={26}></FaDiscord>
    ),

  }
];

function OrbitIcon({ icon }) {

  return (
    <a href={icon.href} target="_blank"><div
      className="absolute flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-110"
      style={{
        transform: "translate(-50%, -50%)",
        ...icon.style,
      }}
    >
      <div
        className="flex items-center justify-center w-full h-full rounded-full text-white transition-all duration-300"
        style={{
          background: "rgba(15,15,15,0.95)",
          border: "2px dashed rgba(255,255,255,0.12)",
          padding: "10px"
        }}
      >
        {icon.label}
      </div>
    </div></a>
  );
}

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 80);
    return () => clearTimeout(t);
  }, []);

  const handleChange = (e) =>
    setFormData((p) => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = () => {
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: "", email: "", message: "" });
  };

  const orbitRadius = 130;

  const inputStyle = {
    background: "rgba(255,255,255,0.035)",
    border: "1px solid rgba(255,255,255,0.08)",
    fontFamily: "inherit",
    color: "white",
  };

  const focusStyle = {
    borderColor: "rgba(124,58,237,0.65)",
    boxShadow: "0 0 0 3px rgba(124,58,237,0.12)",
    outline: "none",
  };

  const blurStyle = {
    borderColor: "rgba(255,255,255,0.08)",
    boxShadow: "none",
  };

  return (
    <div className="border border-red-700 lg:mt-1 md:mt-30 mt-20">

      <div className="flex items-center justify-center px-8">

        <div className="flex items-center w-full max-w-4xl">
          {/* Left line */}
          <div
            className="flex-1 h-px"
            style={{
              background: "linear-gradient(90deg, transparent 0%, #4f2bdb 40%, #6d3fff 100%)",
              boxShadow: "0 0 8px #6d3fff55, 0 0 20px #4f2bdb33",
            }}
          />

          {/* Center label */}
          <div className="flex items-center gap-1 px-4">
            <span className="text-3xl text-[#6d3fff] font-bold">{"<"}</span>
            <span className="text-xl font-semibold tracking-[0.2em] uppercase px-1.5"> Contact</span>
            <span className="text-[#4f2bdb] text-4xl font-bold">/</span>
            <span className="text-[#6d3fff] text-3xl font-bold">{">"}</span>
          </div>

          {/* Right line */}
          <div
            className="flex-1 h-px"
            style={{
              background: "linear-gradient(90deg, #6d3fff 0%, #4f2bdb 60%, transparent 100%)",
              boxShadow: "0 0 8px #6d3fff55, 0 0 20px #4f2bdb33",
            }}
          />
        </div>
      </div>


      <div
        className="w-full flex items-center justify-between">
        <div className=" w-full px-6 py-12 flex flex-col lg:flex-row items-center justify-between gap-16">
          {/* LEFT — orbit */}
          <div
            className="relative shrink-0 h-80 w-80">
            {/* Dashed ring */}
            <div
              className="absolute inset-0 rounded-full"
              style={{ border: "2px dashed rgba(255,255,255,0.15)" }}
            />

            {socialIcons.map((icon) => (
              <OrbitIcon key={icon.id} icon={icon} orbitRadius={orbitRadius} />
            ))}

            {/* Center figure */}
            <div className="absolute inset-0 flex items-center justify-center">
              <img src={contactImg} alt="" />
            </div>

            {/* Purple glow under feet */}
            <div
              className="absolute left-1/2 -translate-x-1/2"
              style={{
                bottom: 28,
                width: 80,
                height: 18,
                background: "radial-gradient(ellipse, rgba(124,58,237,0.35) 0%, transparent 70%)",
                filter: "blur(10px)",
              }}
            />
          </div>

          {/* RIGHT — form */}
          <div
            className="w-full max-w-lg"
            style={{
              opacity: mounted ? 1 : 0,
              transform: mounted ? "translateX(0)" : "translateX(36px)",
              transition: "opacity 0.75s ease 0.12s, transform 0.75s ease 0.12s",
            }}
          >
            <div
              className="rounded-2xl p-8"
              style={{
                background: "rgba(18,18,18,0.9)",
                border: "1px solid rgba(255,255,255,0.07)",
                backdropFilter: "blur(24px)",
                boxShadow:
                  "0 32px 80px rgba(0,0,0,0.65), inset 0 1px 0 rgba(255,255,255,0.055)",
              }}
            >
              {/* Header */}
              <div className="mb-7">
                <p className="text-white/35 text-xs font-semibold tracking-widest uppercase mb-1">Contact us</p>
                <h2 className="text-white text-2xl font-semibold tracking-tight">Send a message</h2>
              </div>

              <div className="space-y-5">
                {/* Name */}
                <div>
                  <label className="block text-white/60 text-xs font-semibold tracking-wider uppercase mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your Name"
                    className="w-full px-4 py-3 rounded-xl text-sm placeholder-white/20"
                    style={inputStyle}
                    onFocus={(e) => Object.assign(e.target.style, focusStyle)}
                    onBlur={(e) => Object.assign(e.target.style, blurStyle)}
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-whitetext-xs font-semibold tracking-wider uppercase mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="example@gmail.com"
                    className="w-full px-4 py-3 rounded-xl text-sm placeholder-white/20"
                    style={inputStyle}
                    onFocus={(e) => Object.assign(e.target.style, focusStyle)}
                    onBlur={(e) => Object.assign(e.target.style, blurStyle)}
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-white text-xs font-semibold tracking-wider uppercase mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Enter your Message"
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl text-sm placeholder-white/20 resize-none"
                    style={inputStyle}
                    onFocus={(e) => Object.assign(e.target.style, focusStyle)}
                    onBlur={(e) => Object.assign(e.target.style, blurStyle)}
                  />
                </div>

                {/* Submit */}
                <button
                  onClick={handleSubmit}
                  className="w-full py-3 px-6 rounded-xl text-sm font-semibold flex items-center justify-center gap-2 transition-all duration-200 active:scale-[0.97]"
                  style={{
                    background: submitted
                      ? "linear-gradient(135deg,#15803d,#166534)"
                      : "#111",
                    border: submitted
                      ? "1px solid #16a34a"
                      : "1px solid rgba(255,255,255,0.11)",
                    color: "white",
                    cursor: "pointer",
                    boxShadow: submitted
                      ? "0 4px 20px rgba(22,163,74,0.28)"
                      : "0 4px 20px rgba(0,0,0,0.35)",
                  }}
                  onMouseEnter={(e) => {
                    if (submitted) return;
                    e.currentTarget.style.background = "linear-gradient(135deg,#2e1b52,#1e1245)";
                    e.currentTarget.style.borderColor = "rgba(124,58,237,0.55)";
                    e.currentTarget.style.boxShadow = "0 6px 28px rgba(124,58,237,0.22)";
                  }}
                  onMouseLeave={(e) => {
                    if (submitted) return;
                    e.currentTarget.style.background = "#111";
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.11)";
                    e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,0.35)";
                  }}
                >
                  {submitted ? (
                    <>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-4 h-4">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      Message Sent!
                    </>
                  ) : (
                    <>
                      Submit
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
                        <line x1="22" y1="2" x2="11" y2="13" />
                        <polygon points="22 2 15 22 11 13 2 9 22 2" />
                      </svg>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}