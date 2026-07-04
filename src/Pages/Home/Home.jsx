import About from "./About";
import Contact from "./Contact";
import Hero from "./Hero";
import IDo from "./IDo";
import Projects from "./Projects";
import SuperPowers from "./SuperPowers";

const Home = () => {
    return (
        <div className="space-y-28">
            <Hero />
            <SuperPowers />
            <Projects />
            <IDo />
            <About />
            <Contact />
        </div>
    );
};

export default Home;