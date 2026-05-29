import NavBar from "./components/navBar.jsx";
import Hero from "./components/Hero.jsx";
import ProductViewer from "./components/ProductViewer.jsx";
import gsap from "gsap";
import{ ScrollTrigger} from "gsap/all";
import Showcase from "./components/showcase.jsx";
gsap.registerPlugin(ScrollTrigger);
const App = () => {
    return (
        <main>
            <NavBar />
            <Hero />
            <ProductViewer />
            <Showcase />
        </main>
    )
}
export default App
