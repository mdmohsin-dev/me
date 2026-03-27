import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import me from "../assets/me.jpeg"

const Footer = () => {
    return (
        <div className='bg-[#101010] pt-20 pb-10 lg:mt-24'>
            <div className='max-w-350 mx-auto px-6'>
                <div className='flex flex-col md:flex-row md:gap-1 gap-10 justify-between items-center'>

                    <div className='flex items-center gap-3'>
                        <img className='w-16 h-16 rounded-full' src={me} alt="" />
                        <div>
                            <h3 className='text-3xl bg-linear-to-r from-[#cc00ff] via-[#7700cc] to-[#aa00ff] bg-clip-text text-transparent font-semibold'>Mohsin</h3>
                            <p>Frontend developer</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-6 pt-2">
                        <a href="https://github.com/mdmohsin-dev" target="_blank"><FaGithub size={34}></FaGithub></a>
                        <a href="https://www.linkedin.com/in/mdmohsin-dev/" target="_blank"><FaLinkedin size={34}></FaLinkedin></a>

                        <a href="mailto:mdmohosin.web@gmail.com"><SiGmail size={34}></SiGmail></a>
                    </div>
                </div>
                <div className="border-t border-dashed border-gray-700 my-12"></div>
                <p className='text-center'>&copy; {new Date().getFullYear()} Mohsin. All rights reserved.</p>
            </div>
        </div>
    );
};

export default Footer;