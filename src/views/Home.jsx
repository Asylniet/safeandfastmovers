import { Hero } from "../components/Home/Hero";
import { Features } from "../components/Home/Features";
import { About } from "../components/Home/About";
import { Stats } from "../components/Home/Stats";
import { Awards } from "../components/Home/Awards";

const Home = () => {
    return (
        <div>
            <Hero />
            <Features />
            <About />
            <Stats />
            <Awards />
        </div>
    )
}

export default Home;