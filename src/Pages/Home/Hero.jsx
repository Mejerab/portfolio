import { FaSpider } from "react-icons/fa";
import BtnHook from "../../hooks/BtnHook";
import { IoCodeSlash } from "react-icons/io5";
import { GiSpiderMask } from "react-icons/gi";
import CountUp from "../../animations/CountUp";

const Hero = () => {
    return (
        <div className="flex items-start justify-between space-x-5 -mt-8">
            <div className="space-y-5 w-1/2">
                <h4 className="blue font-extrabold uppercase text-base leading-3.5"><FaSpider className="text-lg inline mr-1 spidy -mt-1" /> Swinging through the web, one project at a time</h4>
                <h2 className="teko font-bold text-7xl leading-20">Hola! I'm Meherab -- I build web experiences that feel like a spidy landing.</h2>
                <p className="para text-[17px] leading-6.75">I build clean React interfaces, reliable Node.js APIs, and MongoDB-backed features with a focus on speed, usability, better experience and maintainable code.</p>
                <div className="flex items-center gap-x-5">
                    <BtnHook text={'View my work'} />
                    <BtnHook text={'Contact me'} blue />
                </div>
                <div className="flex uppercase items-center gap-x-5">
                    <div className="border border-[#FFFFFF24] bg-[#ffffff0D] p-5 w-75 rounded-2xl">
                        <h4 className="teko spidy font-bold text-4xl">Mern</h4>
                        <p className="para font-bold text-sm">React • Node • MongoDB</p>
                    </div>
                    <div className="border border-[#FFFFFF24] bg-[#ffffff0D] p-5 w-75 rounded-2xl">
                        <h4 className="teko blue font-bold text-4xl">API + UI</h4>
                        <p className="para font-bold text-sm">End-to-end builds</p>
                    </div>
                </div>
            </div>
            <div className="bg-linear-to-br from-0% via-[#070A13] to-[#E11D2E66] border-[#52A3FF38] space-y-3 border rounded-4xl w-136.75 p-5 py-7">
                <div className="flex uppercase items-center justify-between mb-4">
                    <p className="text-sm font-black">Coded for impact</p>
                    <p className="spidy text-2xl"><IoCodeSlash /></p>
                </div>
                <div className="border border-[#ffffff0D] rounded-4xl w-full h-75 flex flex-col items-center justify-center">
                    <div className="w-94 h-53 border-[#52A3FF57] border-b-[#FF314557] rounded-3xl border bg-linear-to-br from-[#52A3FF1A] via-[#0C12221A] to-[#FF31451A] p-3">
                        <div className="rounded-full bg-[#FFFFFF0F] w-full h-8 px-3 flex items-center justify-between font-extrabold">
                            <div className=" flex items-center gap-x-2">
                                <div className="w-2 h-2 rounded-full bgSpidy"></div>
                                <div className="w-2 h-2 rounded-full bgBlue"></div>
                                <div className="w-2 h-2 rounded-full bg-[#F7F8FFad]"></div>
                            </div>
                            <p className="para text-sm">meherab.dev/fullstack</p>
                        </div>
                        <div className="flex gap-x-2 mt-2">
                            <div className="w-14 h-35.5 bg-[#F7F8FF0f] space-y-2 rounded-xl flex items-center pt-2 flex-col">
                                <div className="w-7 h-7 rounded-lg bg-[#E11D2E3f] flex items-center justify-center">
                                    <GiSpiderMask className="text-[#E11D2E] text-xl" />
                                </div>
                                <div className="ani-increase2 w-5.5 h-1.75 rounded-full bg-[#52A3FF57]"></div>
                                <div className="ani-increase2 w-5.5 h-1.75 rounded-full bg-[#F7F8FF57]"></div>
                                <div className="ani-increase2 w-5.5 h-1.75 rounded-full bg-[#E11D2E57]"></div>
                                <div className="ani-increase2 w-5.5 h-1.75 rounded-full bg-[#F7F8FF3f]"></div>
                            </div>
                            <div className="w-full">
                                <div className="flex items-center justify-between mt-1">
                                    <p className="text-xs font-black">Command Center</p>
                                    <div className="flex items-center gap-x-2">
                                        <div className="flex items-center rounded-full py-1 gap-x-1 justify-between uppercase text-[10px] font-black px-2 bg-[#FF314557]">
                                            <div className="w-2 h-2 rounded-full bgSpidy"></div>
                                            open to work
                                        </div>
                                        <div className="flex items-center rounded-full py-1 gap-x-1 justify-between uppercase text-[10px] font-black px-3 bg-[#52A3FF57]">
                                            <div className="w-2 h-2 rounded-full bgBlue"></div>
                                            Live
                                        </div>
                                    </div>
                                </div>
                                <div className="grid grid-cols-3 gap-2 mt-2">
                                    <div className="h-14 rounded-xl border border-[#52A3FF38] w-full p-1 px-3 bg-[#52A3FF1A]">
                                        <h3 className="blue text-xl font-black">
                                            <CountUp
                                                from={0}
                                                to={3}
                                                separator=","
                                                direction="up"
                                                duration={1}
                                                className="count-up-text"
                                                delay={0}
                                            />+
                                        </h3>
                                        <p className="para text-[10px] font-extrabold">Experience</p>
                                    </div>
                                    <div className="h-14 rounded-xl border border-[#FF314538] w-full p-1 px-3 bg-[#FF31451A]">
                                        <h3 className="spidy text-xl font-black"><CountUp
                                                from={0}
                                                to={10}
                                                separator=","
                                                direction="up"
                                                duration={1}
                                                className="count-up-text"
                                                delay={0}
                                            />+</h3>
                                        <p className="para text-[10px] font-extrabold">Projects</p>
                                    </div>
                                    <div className="h-14 rounded-xl border border-[#F7F8FF38] w-full p-1 px-2 bg-[#F7F8FF1A]">
                                        <p className="text-[10px] font-extrabold flex items-center gap-x-1"><div className="w-2 h-2 rounded-full bgBlue"></div>React</p>
                                        <p className="text-[10px] font-extrabold flex items-center gap-x-1"><div className="w-2 h-2 rounded-full bgSpidy"></div>Node Js</p>
                                        <p className="text-[10px] font-extrabold flex items-center gap-x-1"><div className="w-2 h-2 rounded-full bgBlue"></div>MongoDB</p>
                                    </div>
                                    <div className="col-span-2 bg-[#070A1394] border border-[#52A3FF33] rounded-xl h-13.5 p-2 flex items-end gap-x-2">
                                        <div className="w-2.5 h-4/5 ani-increase tra rounded-full bg-[#F7F8FF38]"></div>
                                        <div className="w-2.5 h-full ani-increase tra rounded-full bg-[#52A3FF38]"></div>
                                        <div className="w-2.5 h-3/5 ani-increase tra rounded-full bg-[#FF314538]"> </div>
                                        <div className="w-2.5 h-full ani-increase tra rounded-full bg-[#F7F8FF38]"></div>
                                        <div className="w-2.5 h-4/5 ani-increase tra rounded-full bg-[#52A3FF38]"></div>
                                        <div className="w-2.5 h-3/5 ani-increase tra rounded-full bg-[#FF314538]"> </div>
                                        <div className="w-2.5 h-full ani-increase tra rounded-full bg-[#F7F8FF38]"></div>
                                        <div className="w-2.5 h-full ani-increase tra rounded-full bg-[#52A3FF38]"></div>
                                        <div className="w-2.5 h-4/5 ani-increase tra rounded-full bg-[#FF314538]"> </div>
                                    </div>
                                    <div className="w-full h-13.5 rounded-xl border border-[#E11D2E38] p-2 space-y-2">
                                        <h4 className="text-xs font-black">Deploy</h4>
                                        <div className="w-full h-1.5 relative rounded-full overflow-hidden bg-[#F7F8FF38]">
                                            <div className="absolute ani-increase2 h-full top-0 rounded-full left-0 bg-linear-to-r from-[#E11D2E] to-[#52A3FF] w-4/6"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="relative w-103 h-7 rounded-b-full overflow-hidden bg-linear-to-b from-[#F7F8FF33] to-[#070A1301] border border-[#FFFFFF21]">
                        <div className="absolute rounded-full -top-2 left-1/2 -translate-x-1/2 w-22.5 h-4 bg-[#52A3FF47]"></div>
                    </div>
                </div>
                <h4 className="font-bold text-xl">Turning Ideas Into Scalable Web Products</h4>
                <p className="para text-base w-11/12">I build complete web applications using React, Node.js, Express, and MongoDB. From responsive user interfaces to secure APIs and database architecture, every layer is designed for performance, scalability, and maintainability.</p>
            </div>
        </div>
    );
};
export default Hero;