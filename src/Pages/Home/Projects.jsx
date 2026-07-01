import { useEffect, useState } from "react";
import BtnHook from "../../hooks/BtnHook";
import PointHook from "../../hooks/PointHook";

const Projects = () => {
    const [projects, setProjects] = useState([]);
    useEffect(() => {
        fetch('projects.json')
            .then(res => res.json())
            .then(data => setProjects(data))
    }, [])
    console.log(projects);
    return (
        <div className="space-y-16">
            <PointHook top={'PROJECTs and spidy works'} main={'Every project tells a story of code, creativity, and problem-solving.'} text={"Explore the apps, interfaces, and systems I've built facing and using diffirent technologies—each one a new mission completed."} />
            <div className="grid grid-cols-3 gap-6">
                {
                    projects.map(data =>
                        <div key={data.id} className="w-full rounded-3xl p-4 bg-[#111322] tra hover:shadow-xl shadow-[#E11D2E44] hover:-translate-y-2 space-y-4 border border-[#E11D2E44]">
                            <div className="overflow-hidden rounded-3xl">
                                <img className="rounded-3xl group-hover:scale-110 tra h-56 w-full object-cover object-top" src={data.image} alt="" />
                            </div>
                            <h3 className="teko font-bold text-4xl">{data.title}</h3>
                            <div className="flex items-center gap-x-3">
                                {
                                    
                                    data?.lang?.map((dat, idx) =>
                                        <div className={`rounded-lg font-extrabold ${(idx+1) % 2 == 0 ? 'border-[#52A3FF55]' :'border-[#FF314555]'} border p-3 px-4`}>{dat}</div>
                                )
                                }
                            </div>
                            <div className="flex items-center justify-end mt-8 gap-x-4">
                                <BtnHook link={data.link} text={'View Live'} />
                                <BtnHook link={data.code} blue text={'View Code'} />
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Projects;