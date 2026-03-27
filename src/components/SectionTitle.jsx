import React from 'react';

const SectionTitle = ({title}) => {
    return (
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
                    <span className="text-xl font-semibold tracking-[0.2em] uppercase px-1.5">{title}</span>
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
    );
};

export default SectionTitle;