import { NavLink } from "react-router";

const Navbar = () => {
    return (
        <div className="bg-[#F7F8FF24] w-full h-16 text-white z-20 relative rounded-full border-[#F7F8FF44] border flex items-center px-6">
            <div className="flex items-center gap-x-4">
                <div className="w-8 h-8 rounded-full bg-linear-to-br from-[#FF3145] to-[#52A3FF] teko font-extrabold text-xl flex items-center justify-center pt-1 ">M</div>
                <h4 className="text-base font-extrabold">Meherab Hossean <span className="spidy">(</span>Omi<span className="spidy">)</span></h4>
            </div>
            <div className="ml-auto lg:flex">
                <ul className="text-[13px] flex items-center gap-x-4 font-bold">
                    <li className="hovSpidy relative transition-colors group"><NavLink to='/'>About</NavLink><div className="group-hover:w-full absolute -bottom-0.5 rounded-lg duration-200 left-0 w-0 h-0.5 bgSpidy"></div></li>
                    <li className="hovSpidy relative transition-colors group"><NavLink to='/'>Projects</NavLink><div className="group-hover:w-full absolute -bottom-0.5 rounded-lg duration-200 left-0 w-0 h-0.5 bgSpidy"></div></li>
                    <li className="hovSpidy relative transition-colors group"><NavLink to='/'>Contact</NavLink><div className="group-hover:w-full absolute -bottom-0.5 rounded-lg duration-200 left-0 w-0 h-0.5 bgSpidy"></div></li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;