import { NavLink } from "react-router";

const Footer = () => {
    return (
        <div className="w-full h-28 bg-linear-to-r from-[#E11D2E2F] from-0% via-[#070A1333] to-[#52A3FF2F] rounded-4xl border border-t-[#FF3145] border-l-[#FF3145] border-[#52A3FF] p-6 items-center justify-between grid grid-cols-3 relative">
            {/* <div className="rounded-2xl absolute bottom-0 left-1/2 -translate-1/2 w-[96.5%] h-[1px] bg-linear-to-r from-[#FF3145] to-[#52A3FF]"></div> */}
            <div className="flex items-center gap-x-3">
                <div className="w-11 h-12 bg-linear-to-br from-[#FF3145] to-[#52A3FF] rounded-2xl teko font-bold flex items-center justify-center text-3xl pt-1">M</div>
                <p className="font-extrabold text-[14px]">&copy;: 2026 Meherab Hossean Omi <br /> <span className="ml-4 para text-sm uppercase font-bold">mern stack developer</span></p>
            </div>
            <div className="lg:flex mx-auto">
                <ul className="text-[13px] flex items-center gap-x-4 font-bold">
                    <li className="hovSpidy relative transition-colors group"><NavLink to='/'>About</NavLink><div className="group-hover:w-full absolute -bottom-0.5 rounded-lg duration-200 left-0 w-0 h-0.5 bgSpidy"></div></li>
                    <li className="hovSpidy relative transition-colors group"><NavLink to='/'>Projects</NavLink><div className="group-hover:w-full absolute -bottom-0.5 rounded-lg duration-200 left-0 w-0 h-0.5 bgSpidy"></div></li>
                    <li className="hovSpidy relative transition-colors group"><NavLink to='/'>Contact</NavLink><div className="group-hover:w-full absolute -bottom-0.5 rounded-lg duration-200 left-0 w-0 h-0.5 bgSpidy"></div></li>
                </ul>
            </div>
            <div className="ml-auto flex items-center gap-x-3 text-[14px] font-extrabold">Build with great responsibility. <div className="w-2.5 h-2.5 rounded-full bgSpidy round"></div></div>
        </div>
    );
};

export default Footer;