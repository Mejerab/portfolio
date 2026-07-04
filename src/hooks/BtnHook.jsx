import { FaArrowRight, FaDownload, FaGithub } from "react-icons/fa";
import PropTypes from "prop-types";
import { Link } from "react-router";
import { IoIosMail } from "react-icons/io";

const BtnHook = ({ text, blue, link, full, mail, git, no, work, work1, download }) => {
    return (
        <Link to={link} target={`${work?'':'_blank'}`} download={download&&true} className={`btn ${work1&&'w-54'} ${full && 'w-full'} ${blue ? 'bgBlue hovBlue' :no? 'bg-[#101626] hover:text-[#101626]' : 'bgSpidy hovSpidy'} hover:bg-white! font-extrabold tra px-6 py-6 border-0 rounded-full relative duration-200 group overflow-hidden`}>
            <span className="ml-6 tra group-hover:ml-0 group-hover:mr-6">{text}</span>
            {mail ? <><IoIosMail className="absolute text-2xl top-1/2 -translate-1/2 left-7 group-hover:-rotate-45 group-hover:translate-x-4 tra opacity-1000 visible group-hover:opacity-0 group-hover:invisible" />
                <IoIosMail className="absolute text-2xl top-1/2 tra -translate-y-1/2 right-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible  group-hover:translate-x-0 -translate-x-4 group-hover:-rotate-45" /></> : git ?
                <>
                    <FaGithub className="absolute top-1/2 text-2xl -translate-1/2 left-7 group-hover:-rotate-45 group-hover:translate-x-4 tra opacity-1000 visible group-hover:opacity-0 group-hover:invisible" />
                    <FaGithub className="absolute top-1/2 text-2xl tra -translate-y-1/2 right-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible  group-hover:translate-x-0 -translate-x-4 group-hover:-rotate-45" /></> : no ?
                <>
                    <FaDownload className="absolute top-1/2 text-lg -translate-1/2 left-7 group-hover:-rotate-45 group-hover:translate-x-4 tra opacity-1000 visible group-hover:opacity-0 group-hover:invisible" />
                    <FaDownload className="absolute top-1/2 text-lg tra -translate-y-1/2 right-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible  group-hover:translate-x-0 -translate-x-4 group-hover:-rotate-45" /></> :
                <>
                    <FaArrowRight className="absolute top-1/2 -translate-1/2 left-7 group-hover:-rotate-45 group-hover:translate-x-4 tra opacity-1000 visible group-hover:opacity-0 group-hover:invisible" />
                    <FaArrowRight className="absolute top-1/2 tra -translate-y-1/2 right-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible  group-hover:translate-x-0 -translate-x-4 group-hover:-rotate-45" /></>
            }
        </Link>
    );
};
BtnHook.prototype = {
    text: PropTypes.string,
    link: PropTypes.string,
    blue: PropTypes.bool,
    full: PropTypes.bool,
    mail: PropTypes.bool,
    git: PropTypes.bool,
    work: PropTypes.bool,
    work1: PropTypes.bool,
    download: PropTypes.bool,
    no: PropTypes.bool
}
export default BtnHook;