import { MdDesignServices, MdRocketLaunch } from "react-icons/md";
import PointHook from "../../hooks/PointHook";
import { FaCrosshairs, FaLightbulb } from "react-icons/fa";
import { IoCode } from "react-icons/io5";
import { BsTools } from "react-icons/bs";
import { AiFillThunderbolt } from "react-icons/ai";

const IDo = () => {
    return (
        <div className="rounded-[38px] border border-[#FFFFFF14] bg-linear-to-br from-[#ffffff14] to-[#080C18D1] p-8 flex items-center justify-between gap-x-8 h-120">
            <div className="w-1/2 space-y-12">
                <PointHook col top={'how I build'} main={'Every great web starts with a plan, not a web of bugs.'} text={'From responsive frontends to reliable backend systems, I build full-stack experiences that are clean, maintainable, and ready for real users.'} />
                <ul className="timeline">
                    <li className="w-1/5">
                        <div className="timeline-start timeline-box text-[14px] font-bold bg-[#FF314533] border border-[#FF314566]">Idea</div>
                        <div className="timeline-middle">
                            <FaLightbulb className="spidy text-lg"/>
                        </div>
                        <hr />
                    </li>
                    <li className="w-1/5">
                        <hr />
                        <div className="timeline-middle">
                            <MdDesignServices className="blue text-xl"/>
                        </div>
                        <div className="timeline-end timeline-box text-[14px] font-bold bg-[#52A3FF33] border border-[#52A3FF66]">Design</div>
                        <hr />
                    </li>
                    <li className="w-1/5">
                        <hr />
                        <div className="timeline-start timeline-box text-[14px] font-bold bg-[#FF314533] border border-[#FF314566]">Craft</div>
                        <div className="timeline-middle">
                            <BsTools className='spidy'/>
                        </div>
                        <hr />
                    </li>
                    <li className="w-1/5">
                        <hr />
                        <div className="timeline-middle">
                            <AiFillThunderbolt className="blue text-xl" />
                        </div>
                        <div className="timeline-end timeline-box text-[14px] font-bold bg-[#52A3FF33] border border-[#52A3FF66]">Refine</div>
                        <hr />
                    </li>
                    <li className="w-1/5">
                        <hr />
                        <div className="timeline-start timeline-box text-[14px] font-bold bg-[#FF314533] border border-[#FF314566]">Launch</div>
                        <div className="timeline-middle">
                            <MdRocketLaunch className="spidy text-xl" />
                        </div>
                    </li>
                </ul>
            </div>
            <div className="w-1/2 space-y-5">
                <div className="collapse collapse-arrow bg-[#0D1223] border border-[#52A3FF47] rounded-3xl">
                    <input type="radio" name="my-accordion-2" defaultChecked />
                    <div className="collapse-title font-extrabold flex items-center gap-x-3">
                        <div className="bg-[#E11D2E29] w-fit p-3 rounded-xl border border-[#E11D2E47]">
                            <FaCrosshairs className="text-2xl blue" />
                        </div>
                        <h4 className="text-base">Track the objective</h4>
                    </div>
                    <div className="collapse-content text-sm ml-16 para font-medium text-[14px]">Every successful project starts with a clear understanding of the challenge. I take time to analyze requirements, identify user needs, and define achievable goals. By planning the architecture and user flow early, I create a solid foundation that keeps development efficient and focused from start to finish.</div>
                </div>
                <div className="collapse collapse-arrow bg-[#0D1223] border border-[#52A3FF47] rounded-3xl">
                    <input type="radio" name="my-accordion-2" defaultChecked />
                    <div className="collapse-title font-extrabold flex items-center gap-x-3">
                        <div className="bg-[#E11D2E29] w-fit p-3 rounded-xl border border-[#E11D2E47]">
                            <IoCode className="text-2xl blue" />
                        </div>
                        <h4 className="text-base">Suit up and build</h4>
                    </div>
                    <div className="collapse-content text-sm ml-16 para font-medium text-[14px]">This is where ideas become reality. Using React for interactive interfaces, Node.js and Express for scalable backend services, and MongoDB for data management, I build complete full-stack solutions. Every feature is developed with performance, maintainability, and user experience in mind.</div>
                </div>
                <div className="collapse collapse-arrow bg-[#0D1223] border border-[#52A3FF47] rounded-3xl">
                    <input type="radio" name="my-accordion-2" defaultChecked />
                    <div className="collapse-title font-extrabold flex items-center gap-x-3">
                        <div className="bg-[#E11D2E29] w-fit p-3 rounded-xl border border-[#E11D2E47]">
                            <MdRocketLaunch className="text-2xl blue" />
                        </div>
                        <h4 className="text-base">Save the day</h4>
                    </div>
                    <div className="collapse-content text-sm ml-16 para font-medium text-[14px]">A project isn't finished when the coding ends. I thoroughly test functionality, optimize performance, and ensure responsiveness across devices before deployment. After launch, I continue refining and improving the application to keep it reliable, secure, and ready for future growth.</div>
                </div>
            </div>
        </div>
    );
};

export default IDo;