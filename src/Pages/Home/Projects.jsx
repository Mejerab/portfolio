import { useEffect, useState } from "react";
import PointHook from "../../hooks/PointHook";
import { FaArrowRight } from "react-icons/fa";
import { FaCss3Alt, FaHtml5, FaJsSquare, FaNodeJs, FaReact } from "react-icons/fa";
import DialogHook from "../../hooks/DialogHook";
import BtnHook from "../../hooks/BtnHook";
import { IoLogoFirebase } from "react-icons/io5";
import { SiExpress, SiSocketdotio } from "react-icons/si";
import { BiLogoMongodb } from "react-icons/bi";
import Jwt from "../../../public/Jwt";

const Projects = () => {
    const [projects, setProjects] = useState([]);
    useEffect(() => {
        fetch('projects.json')
            .then(res => res.json())
            .then(data => setProjects(data))
    }, [])
    return (
        <div className="space-y-16">
            <PointHook top={'PROJECTs and spidy works'} main={'Every project tells a story of code, creativity, and problem-solving.'} text={"Explore the apps, interfaces, and systems I've built facing and using diffirent technologies—each one a new mission completed."} />
            <div className="grid  lg:grid-cols-3 gap-y-8 gap-6">
                {
                    projects.map((data, index) =>
                        <div key={data.id} data-aos="fade-bottom" data-aos-duration={700} onClick={() => document.getElementById(data.id).showModal()} className="w-full cursor-pointer rounded-3xl bg-[#111322] tra hover:shadow-xl shadow-[#E11D2E44] hover:-translate-y-2 border border-[#E11D2E44] group">
                            <DialogHook index={index} data={data} />
                            <div className="overflow-hidden rounded-t-3xl relative">
                                <div className="absolute z-20 text-sm font-extrabold top-3 flex items-center gap-x-2 px-3 py-1 right-3 rounded-full bg-[#000000b3]"><div className={`w-2 h-2 rounded-full ${data.stack === 'Frontend' ? 'bgSpidy' : 'bgBlue'}`}></div>{data.stack}</div>
                                <img className="rounded-t-3xl group-hover:scale-105 transition duration-700 h-56 w-full object-cover object-top" src={data.image} alt="" />
                            </div>
                            <div className="p-6 space-y-4">
                                <div className="flex items-center justify-between group-hover:text-[#FF3145] tra mb-2">
                                    <h3 className="teko font-bold text-4xl">{data.title}</h3>
                                    <FaArrowRight className="-mt-2 group-hover:-rotate-45 tra" />
                                </div>
                                <p className="para text-sm">{data.text.slice(0, 90)}...</p>
                                <div className="grid grid-cols-8 items-center gap-3">
                                    {
                                        data?.lang?.map((dat, idx) =>
                                            <div key={idx} className='text-3xl'>{dat == "HTML" ? <FaHtml5 className="text-[#E34F26]" /> : dat === 'CSS' ? <FaCss3Alt className="text-[#33A9DC]" /> : dat == 'Js' ? <FaJsSquare className="text-[#f7df1e]" /> : dat == 'react' ? <FaReact className="text-[#61DBFB]" /> : dat == 'node' ? <FaNodeJs className="text-[#6CC24A]" /> : dat == 'firebase' ? <IoLogoFirebase className="text-[#FFC400]" /> : dat == 'express' ? <SiExpress className="text-[#0765a3]" /> : dat == 'mongodb' ? <BiLogoMongodb className="text-[#086c50]" /> : dat == 'jwt' ? <Jwt /> : dat == 'socket' ? <SiSocketdotio className="text-white" /> : ''}</div>
                                        )
                                    }
                                </div>
                            </div>
                        </div>
                    ).slice(2, 8)
                }
            </div>
            <div className="text-center ">
                <BtnHook text={'View all webs'} work work1 link={'/works'} />
            </div>
        </div>
    );
};

export default Projects;