import { Outlet } from "react-router";
// import 'aos/dist/aos.css';

const Layout = () => {
    return (
        <div className="max-w-7xl mx-auto pt-7 relative z-0 inter">
            <Outlet className={'z-20 relative'}/>
            <div className="absolute -top-56 z-10 left-12 rounded-full w-72 h-72 bg-[#E11D2Eb0] blur-[120px]"></div>
        </div>
    );
};

export default Layout;