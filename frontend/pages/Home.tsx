import Index from '../src/components/NavBar/Index'
// import Index from '../src/components/NavBar/Index'
import { Link } from "react-scroll";
import Hero from '../src/components/HeroComp/Hero'
import MockupGallery from '../src/components/About/MockupGallery'
import ProjectDesplay from '../src/components/About/ProjectDesplay'
import Contact from '../src/components/About/Contact'
import FooterComp from '../src/components/Footer/FooterComp';

const Home = () => {
  return (
    <div className="relative w-full h-full">
      <Index />
      {/* <Starting /> */}

      {/* <Globe /> */}
      {/* <SmoothCursor /> */}
      {/* <div className="w-full h-full z-[1000] top-0 left-0 fixed">
        <ProgressiveBlur className={"z-[100]"} position="top" backgroundColor="#ffffff" />
        <ProgressiveBlur className={"z-[100]"} position="bottom" backgroundColor="#ffffff" />
      </div> */}

      <Link
        to="Home"
        smooth={true}
        delay={100}
        offset={-50}
        spy={true}
        activeClass="active"
        duration={1000}
      >
        <Hero />
      </Link>
      <Link
        to="About"
        smooth={true}
        delay={100}
        offset={-50}
        spy={true}
        activeClass="active"
        duration={1000}
      >
        <MockupGallery />
      </Link>
      {/* <Link
        to="Work"
        smooth={true}
        delay={100}
        offset={-50}
        spy={true}
        activeClass="active"
        duration={1000}
      > */}
      <ProjectDesplay />
      {/* </Link> */}

      <FooterComp />
    </div>
  );
};

export default Home;
