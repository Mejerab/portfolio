import { Outlet, useLocation } from "react-router";
import 'aos/dist/aos.css';
import AOS from "aos";
import { useEffect } from "react";
import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";

const Layout = () => {
    useEffect(() => {
        AOS.init({
            once: true
        });
    }, [])
    const location = useLocation();
    useEffect(()=>{
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }, [location.pathname])
    return (
<<<<<<< HEAD
        <div className="max-w-7xl mx-auto pt-7 relative z-0 inter pb-12 lg:px-0 p-6 text-white!">
=======
        <div className="max-w-7xl mx-auto pt-7 relative z-0 inter pb-12 lg:px-0 p-6">
>>>>>>> 9f000b6173f569ef99781c02404541a47224ca36
            <div className="mb-28">
                <Navbar />
            </div>
            <Outlet className={'z-20 relative'} />
            <div className="absolute -top-56 z-10 left-12 rounded-full w-72 h-72 bg-[#E11D2Eb0] blur-[120px]"></div>
            <div className="mt-28">
                <Footer />
            </div>
        </div>
    );
};

export default Layout;