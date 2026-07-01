import PropTypes from "prop-types";
import { FaSpider } from "react-icons/fa";

const PointHook = ({ top, main, text, col, bigg }) => {
    return (
        <div className={`${!col &&" flex items-end justify-between"}`}>
            <div className={`space-y-2 ${!col && 'w-2/3'}`}>
                <p className="blue uppercase font-extrabold text-base"><FaSpider className="text-lg inline mr-1 spidy -mt-1" /> {top}</p>
                <h3 className={`teko font-bold ${bigg?'text-[76px] leading-[1.1]':'text-5xl'}`}>{main}</h3>
                <p className="para text-base">{text}</p>
            </div>
            {!col && <img className="w-24 h-24 round rounded-full shhadow" src="https://i.ibb.co.com/4nM9sy1H/spiddy.png" alt="" />}
        </div>
    );
};
PointHook.prototype = {
    top: PropTypes.string,
    main: PropTypes.string,
    text: PropTypes.string,
    col: PropTypes.bool,
    bigg: PropTypes.bool,
}

export default PointHook;