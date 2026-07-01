import { FaCss3Alt, FaHtml5, FaJs, FaNodeJs, FaReact } from "react-icons/fa";
import { SiExpress, SiMongodb } from "react-icons/si";
import PointHook from "../../hooks/PointHook";

const SuperPowers = () => {
    return (
        <div className="space-y-8">
            <PointHook top={'Stack & superpowers'} main={'The toolkit behind the Super powers.'} text={'I focus on the parts that make web products feel dependable: data models, API contracts, frontend state, and the tiny interaction details users actually notice.'}/>
            <div className="grid grid-cols-3 gap-6">
                <div className="bg-[#111827] group rounded-3xl border border-[#FFFFFF38] p-6 cursor-pointer tra hover:-translate-y-3 hover:shadow-[#52A3FF33] shadow-xl">
                    <div className="flex items-center gap-x-4">
                        <div className="bg-[#E11D2E1a] flex items-center justify-center border border-[#FF314538] w-14 h-14 rounded-2xl">
                            <FaHtml5 className="text-3xl spidy group-hover:scale-110 tra" />
                        </div>
                        <span className="text-3xl font-bold">+</span>
                        <div className="bg-[#1D7CFF1a] flex items-center justify-center border border-[#52A3FF38] w-14 h-14 rounded-2xl">
                            <FaCss3Alt className="text-3xl blue group-hover:scale-110 tra" />
                        </div>
                    </div>
                    <h3 className="font-bold mt-4 text-xl">HTML + CSS</h3>
                    <p className="para text-base">Building semantic, accessible, and responsive web experiences with engaging layouts and smooth animations.</p>
                </div>
                <div className="bg-[#1A111A] space-y-2 hover:shadow-[#FF314533] shadow-xl group rounded-3xl border border-[#E11D2E61] p-6 cursor-pointer tra hover:-translate-y-3">
                    <div className="bg-[#E11D2E1a] flex items-center justify-center border border-[#FF314538] w-14 h-14 rounded-2xl">
                        <FaJs className="text-3xl spidy group-hover:scale-125 tra" />
                    </div>
                    <h3 className="font-bold mt-4 text-xl">JavaScript</h3>
                    <p className="para text-base">Bringing websites to life with dynamic interactions and intelligent functionality.</p>
                </div>
                <div className="bg-[#111827] hover:shadow-[#52A3FF33] shadow-xl group rounded-3xl border border-[#FFFFFF38] p-6 cursor-pointer tra hover:-translate-y-3">
                    <div className="bg-[#1D7CFF1a] flex items-center justify-center border border-[#52A3FF38] w-14 h-14 rounded-2xl">
                        <FaReact className="text-3xl blue group-hover:scale-110 tra" />
                    </div>
                    <h3 className="font-bold mt-4 text-xl">React</h3>
                    <p className="para text-base">Developing fast, reusable, and scalable user interfaces with component-driven architecture.</p>
                </div>
                <div className="bg-[#1A111A] space-y-2 hover:shadow-[#FF314533] shadow-xl group rounded-3xl border border-[#E11D2E61] p-6 cursor-pointer tra hover:-translate-y-3">
                    <div className="bg-[#E11D2E1a] flex items-center justify-center border border-[#FF314538] w-14 h-14 rounded-2xl">
                        <FaNodeJs className="text-3xl spidy group-hover:scale-125 tra" />
                    </div>
                    <h3 className="font-bold mt-4 text-xl">Node Js</h3>
                    <p className="para text-base">Building fast and efficient server-side applications with JavaScript.</p>
                </div>
                <div className="bg-[#111827] hover:shadow-[#52A3FF33] shadow-xl group rounded-3xl border border-[#FFFFFF38] p-6 cursor-pointer tra hover:-translate-y-3">
                    <div className="bg-[#1D7CFF1a] flex items-center justify-center border border-[#52A3FF38] w-14 h-14 rounded-2xl">
                        <SiExpress className="text-3xl blue group-hover:scale-110 tra" />
                    </div>
                    <h3 className="font-bold mt-4 text-xl">Express</h3>
                    <p className="para text-base">Developing fast, reusable, and scalable user interfaces with component-driven architecture.</p>
                </div>
                <div className="bg-[#1A111A] space-y-2 hover:shadow-[#FF314533] shadow-xl group rounded-3xl border border-[#E11D2E61] p-6 cursor-pointer tra hover:-translate-y-3">
                    <div className="bg-[#E11D2E1a] flex items-center justify-center border border-[#FF314538] w-14 h-14 rounded-2xl">
                        <SiMongodb className="text-3xl spidy group-hover:scale-110 tra" />
                    </div>
                    <h3 className="font-bold mt-4 text-xl">MongoDB</h3>
                    <p className="para text-base">Creating robust APIs and backend systems with clean and scalable architecture.</p>
                </div>
            </div>
        </div>
    );
};

export default SuperPowers;