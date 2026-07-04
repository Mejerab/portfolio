import CountUp from "../../animations/CountUp";
import PointHook from "../../hooks/PointHook";

const About = () => {
    return (
        <div id="about" className="space-y-12">
            <PointHook top={'About me'} main={'MERN developer with a Spidy sense for clean UI and solid systems.'} text={'I connect frontend craft with backend logic so projects feel fast, organized, and ready to grow.'} />
            <div className="flex lg:flex-row flex-col items-center justify-between gap-6">
                <div className="bg-[#E11D2E11] border border-[#52A3FF66] rounded-4xl lg:w-1/2 overflow-hidden relative p-6">
                    <div className="z-20 relative space-y-5">
                        <h3 className="font-bold text-4xl teko ">Stack I use</h3>
                        <div className="bg-[#52A3FF2E] flex items-center p-3.5 pr-10 gap-x-3 border border-[#52A3FF42] rounded-2xl">
                            <div className="bgBlue w-2 h-10 rounded-full"></div>
                            <h6 className="font-bold text-[14px]">Frontend — React, Next.js, Tailwind CSS, responsive layouts, reusable components, and polished UI states.</h6>
                        </div>
                        <div className="bg-[#FF31452E] flex items-center p-3.5 pr-10 gap-x-3 border border-[#52A3FF42] rounded-2xl">
                            <div className="bgSpidy w-2 h-10 rounded-full"></div>
                            <h6 className="font-bold text-[14px]">Backend — Node.js, Express APIs, auth flows, validation, role checks, and clean server structure.</h6>
                        </div>
                        <div className="bg-[#52A3FF2E] flex items-center p-3.5 pr-10 gap-x-3 border border-[#52A3FF42] rounded-2xl">
                            <div className="bg-linear-to-b from-[#FF3145] to-[#52A3FF] w-2 h-10 rounded-full"></div>
                            <h6 className="font-bold text-[14px]">Data + deploy — MongoDB schemas, practical queries, Git workflow, environment setup, and launch-ready handoff.</h6>
                        </div>
                    </div>
                    <div className="absolute z-10 -top-28 -left-28 bg-[#52A3FF2E] rounded-full w-80 h-72 blur-2xl"></div>
                    <div className="absolute z-10 -top-2 -right-32 bg-[#070A13E0] rotate-24 w-80 h-150 blur-3xl"></div>
                </div>
                <div className="border border-[#FF314547] rounded-4xl lg:w-1/2 w-full p-7 space-y-4">
                    <h3 className="teko font-bold text-4xl">By the numbers</h3>
                    <div className="grid grid-cols-2 gap-6">
                        <div className="bg-[#FFFFFF0D] border border-[#52A3FF3D] rounded-[20px] p-5">
                            <h4 className="teko font-bold text-5xl mb-1 blue">
                                <CountUp
                                    from={0}
                                    to={3}
                                    separator=","
                                    direction="up"
                                    duration={1}
                                    className="count-up-text"
                                    delay={0}
                                />+</h4>
                            <p className="para font-extrabold text-sm uppercase">experience</p>
                        </div>
                        <div className="bg-[#FFFFFF0D] border border-[#52A3FF3D] rounded-[20px] p-5">
                            <h4 className="teko font-bold text-5xl mb-1 spidy">
                                <CountUp
                                    from={0}
                                    to={10}
                                    separator=","
                                    direction="up"
                                    duration={1}
                                    className="count-up-text"
                                    delay={0}
                                />+</h4>
                            <p className="para font-extrabold text-sm uppercase">Projects build</p>
                        </div>
                        <div className="bg-[#FFFFFF0D] border border-[#52A3FF3D] rounded-[20px] p-5">
                            <h4 className="teko font-bold text-5xl mb-1 para"><CountUp
                                from={0}
                                to={15}
                                separator=","
                                direction="up"
                                duration={1}
                                className="count-up-text"
                                delay={0}
                            />+</h4>
                            <p className="para font-extrabold text-sm uppercase">technologies explored</p>
                        </div>
                        <div className="bg-[#FFFFFF0D] border border-[#52A3FF3D] rounded-[20px] p-5">
                            <h4 className="teko font-bold text-6xl -mb-2">∞</h4>
                            <p className="para font-extrabold text-sm uppercase">curiosity for learning</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;