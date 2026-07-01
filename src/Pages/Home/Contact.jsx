import { MdRocketLaunch } from "react-icons/md";
import PointHook from "../../hooks/PointHook";
import BtnHook from "../../hooks/BtnHook";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router";

const Contact = () => {
    return (
        <div className="relative w-full bg-linear-to-br from-[#FF31456B] via-[#52A3FF2E] to-[#050812] via-40% to-75% h-173 rounded-[52px] border-[#FFFFFF33] border overflow-hidden">
            <div>
                <div className="absolute top-24 left-6 w-90 -rotate-15 h-0.5 rounded-full bg-linear-to-r from-0% via-[#E11D2EAD] to-[#52A3FF57]"></div>
                <div className="absolute top-12 right-6 w-90 -rotate-15 h-1 rounded-full bg-linear-to-r from-0% via-[#E11D2EAD] to-[#52A3FF57]"></div>
                <div className="absolute top-26 right-6 w-90 -rotate-15 h-0.5 rounded-full bg-linear-to-r from-0% to-[#E11D2EAD] via-[#52A3FF57]"></div>
                <div className="absolute top-37 right-6 w-90 -rotate-25 h-0.5 rounded-full bg-linear-to-r from-0% via-[#E11D2EAD] to-[#52A3FF57]"></div>
                <div className="absolute bottom-27 left-64 w-150 rotate-15 h-0.5 rounded-full bg-linear-to-r from-0% to-[#E11D2EAD] via-[#52A3FF57]"></div>
                <div className="absolute bottom-20 left-24 w-72 rotate-15 h-0.5 rounded-full bg-linear-to-r from-0% via-[#E11D2EAD] to-[#52A3FF57]"></div>
                <div className="absolute top-28 right-24 w-3 h-3 rounded-full bgSpidy round"></div>
                <div className="absolute top-38 right-42 w-3.5 h-3.5 rounded-full bgSpidy round"></div>
                <div className="absolute bottom-30 right-92 w-3 h-3 rounded-full bgBlue round2"></div>
                <div className="absolute bottom-20 right-64 w-3 h-3 rounded-full bgBlue round2"></div>
            </div>
            <div className="relative p-16 flex items-center justify-between gap-x-16">
                <div className="w-2/3 space-y-10">
                    <PointHook top={'Open for missions'} main={'Your friendly neighborhood MERN developer, ready for the next challenge.'} text={'Every project is built with performance, usability, and clean architecture in mind—so it looks great, works reliably, and grows with your needs.'} bigg col />
                    <div className="grid grid-cols-2 items-center gap-4 w-fit justify-center">
                        <div className="rounded-full bg-[#E11D2E2E] border border-[#E11D2E52] w-fit flex items-center gap-x-3 p-3">
                            <MdRocketLaunch />
                            <p className="font-extrabold text-xs">Ready to Collaborate</p>
                        </div>
                        <div className="rounded-full bg-[#52A3FF2E] border border-[#52A3FF52] w-fit flex items-center gap-x-3 p-3">
                            <MdRocketLaunch />
                            <p className="font-extrabold text-xs">React • Node • MongoDB</p>
                        </div>
                        <div className="col-span-2 mx-auto rounded-full bg-[#FFFFFF2E] border border-[#FFFFFF52] w-fit flex items-center gap-x-3 p-3">
                            <MdRocketLaunch />
                            <p className="font-extrabold text-xs">WITH GREAT CODE COMES GREAT OPPORTUNITIES</p>
                        </div>
                    </div>
                </div>
                <div className="relative overflow-hidden grow rounded-4xl bg-linear-to-b from-[#070A13D1] from-70% to-[#52A3FF1F]">
                    <div className="absolute w-4/5 h-1/4 -top-1/6 left-1/2 -translate-x-1/2 bg-[#FF314533] rounded-full blur-2xl"></div>
                    <div className="flex flex-col items-center p-6 py-8 space-y-4">
                        <h4 className="font-black uppercase blue text-sm">start a mission</h4>
                        <BtnHook text={'Email Me'} full mail/>
                        <BtnHook text={'Github'} full git blue/>
                        <BtnHook text={'Download Resume'} full no/>
                        <div className="flex items-center gap-x-3">
                            <div className="w-10 h-10 group rounded-full flex items-center cursor-pointer justify-center text-xl blue bg-[#52A3FF33]"><Link to={''}><FaLinkedin className="group-hover:scale-125 tra" /></Link></div>
                            <div className="w-10 h-10 group rounded-full flex items-center cursor-pointer justify-center text-xl spidy bg-[#FF314533]"><Link to={''}><FaFacebook className="group-hover:scale-125 tra" /></Link></div>
                            <div className="w-10 h-10 group rounded-full flex items-center cursor-pointer justify-center text-xl blue bg-[#52A3FF33]"><Link to={''}><FaGithub className="group-hover:scale-125 tra" /></Link></div>
                            <div className="w-10 h-10 group rounded-full flex items-center cursor-pointer justify-center text-xl spidy bg-[#FF314533]"><Link to={''}><FaInstagram className="group-hover:scale-125 tra" /></Link></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;