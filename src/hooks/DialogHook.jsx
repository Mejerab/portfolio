import PropTypes from "prop-types";
import { FaCss3Alt, FaHtml5, FaJsSquare, FaNodeJs, FaReact } from "react-icons/fa";
import { IoFileTrayStackedSharp } from "react-icons/io5";
import BtnHook from "./BtnHook";

const DialogHook = ({ data, index }) => {
    return (
        <dialog key={index} id={data.id} className="modal cursor-auto">
            <div className="modal-box relative p-0 rounded-l-3xl rounded-r-none bg-[#070A13ff]">
                <div className="modal-action absolute top-0 right-6">
                    <form method="dialog">
                        <button className="cursor-pointer p-2 rounded-full spidy hover:bg-[#00000099] transition-colors bg-[#00000066]"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>
                        </button>
                    </form>
                </div>
                <div className="space-y-3 pb-6">
                    <div className="overflow-hidden h-fit">
                        <img className="object-cover object-top" src={data?.image} alt="" />
                    </div>
                    <div className="px-6 pt-3 space-y-4">
                        <div>
                            <div className="flex items-center gap-x-1 mb-2 bg-[#FF314533] w-fit rounded-full p-1 px-2">
                                <div className="w-2 h-2 rounded-full bgSpidy"></div>
                                <span className="text-xs font-extrabold">{data.stack}</span>
                            </div>
                            <h3 className="teko font-bold text-4xl">{data.title}</h3>
                            <p className="para text-sm">{data.text}</p>
                        </div>
                        <div className="mt-5">
                                <h5 className="flex items-center gap-x-3 blue font-extrabold"><IoFileTrayStackedSharp />Teck Stack</h5>
                            <div className="flex items-center gap-x-3 mt-2">
                                {
                                    data?.lang?.map((dat) =>
                                        <div className={'text-3xl'}>{dat == "HTML" ? <FaHtml5 className="text-[#E34F26]" /> : dat === 'CSS' ? <FaCss3Alt className="text-[#33A9DC]" /> : dat == 'Js' ? <FaJsSquare className="text-[#f7df1e]" /> : dat == 'react' ? <FaReact className="text-[#61DBFB]" /> : dat == 'node' ? <FaNodeJs className="text-[#6CC24A]" /> : ''}</div>
                                    )
                                }
                            </div>
                        </div>
                        <div className="flex items-center gap-x-5 mt-6">
                            <BtnHook text={'Live Demo'} link={data.link} />
                            <BtnHook text={'Source Code'} link={data.code} git blue />
                        </div>
                    </div>
                </div>
            </div>
        </dialog>
    );
};
DialogHook.prototype = {
    data: PropTypes.object
}

export default DialogHook;