import Navbar from "../../shared/Navbar";
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";
import Hero from "./Hero";
import IDo from "./IDo";
import Projects from "./Projects";
import SuperPowers from "./SuperPowers";

const Home = () => {
    return (
        <div className="space-y-28 pb-12">
            <Navbar />
            <Hero />
            <SuperPowers />
            <Projects />
            <IDo />
            <About />
            <Contact />
            <Footer />
        </div>
    );
};

export default Home;