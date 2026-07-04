import PropTypes from "prop-types";
import { FaSpider } from "react-icons/fa";
import TextType from "../animations/Type";
import AOS from "aos";
import { useEffect } from "react";

const PointHook = ({ top, main, text, col, bigg, one }) => {
    useEffect(()=>{
        AOS.refresh();
    }, [])
    return (
        <div className={`${!col && " lg:flex-row flex-col flex items-end justify-between"}`}>
            <div className={`lg:mb-0 mb-6 space-y-2 ${!col && 'lg:w-2/3 mr-auto'}`}>
                <p className="blue uppercase font-extrabold text-base"><FaSpider data-aos="zoom-in" data-aos-delay={200} data-aos-duration={500} className="text-lg inline mr-1 spidy -mt-1" /> {top}</p>
                <TextType
                    text={main}
                    typingSpeed={75}
                    pauseDuration={1500}
                    className={`teko font-bold ${!one &&"h-24"} ${bigg ? 'pr-12 h-56 lg:h-84 text-[40px] lg:text-[76px] leading-[1.1]' : 'text-5xl'}`}
                />
                <p className="para text-base lg:mt-0 mt-6">{text}</p> 
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
    one: PropTypes.bool,
}

export default PointHook;