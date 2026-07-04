import { Link, NavLink } from "react-router";

const Navbar = () => {
    return (
        <section id="navbar" className="bg-[#F7F8FF24] h-16 text-white z-20 relative rounded-full border-[#F7F8FF44] border flex items-center px-3 lg:px-6">
            <div className="flex items-center gap-x-4">
                <Link to='/' className="cursor-pointer w-8 h-8 rounded-full bg-linear-to-br from-[#FF3145] to-[#52A3FF] teko font-extrabold text-xl flex items-center justify-center pt-1 ">M</Link>
                <h4 className="text-base font-extrabold">Meherab Hossean <span className="spidy">(</span>Omi<span className="spidy">)</span></h4>
            </div>
            <div className="navbar-end ml-auto block lg:hidden w-fit">
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost rounded-full spidy hover:bg-none">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="#FF3145" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-[#070A13] rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li><NavLink to={'/'}>Home</NavLink></li>
                        <li><a href='#about'>About</a></li>
                        <li><NavLink to={'/works'}>Projects</NavLink></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>
            </div>
            <div className="ml-auto lg:flex hidden">
                <ul className="lg:text-[13px] flex items-center gap-x-4 font-bold">
                    <li className="hovSpidy relative transition-colors group"><NavLink to='/'>Home</NavLink><div className="group-hover:w-full absolute -bottom-0.5 rounded-lg duration-200 left-0 w-0 h-0.5 bgSpidy"></div></li>
                    <li className="hovSpidy relative transition-colors group"><a href='#about'>About</a><div className="group-hover:w-full absolute -bottom-0.5 rounded-lg duration-200 left-0 w-0 h-0.5 bgSpidy"></div></li>
                    <li className="hovSpidy relative transition-colors group"><NavLink to='/works'>Projects</NavLink><div className="group-hover:w-full absolute -bottom-0.5 rounded-lg duration-200 left-0 w-0 h-0.5 bgSpidy"></div></li>
                    <li className="hovSpidy relative transition-colors group"><a href='#contact'>Contact</a><div className="group-hover:w-full absolute -bottom-0.5 rounded-lg duration-200 left-0 w-0 h-0.5 bgSpidy"></div></li>
                </ul>
            </div>
        </section>
    );
};

export default Navbar;