import gsap from "gsap";
import React, { useEffect } from "react";
import { Link } from "react-scroll";

const Hero = () => {
  useEffect(() => {
    const q = gsap.utils.selector(".hero");
    gsap.fromTo(q([".title", ".rightComp", ".leftComp"]), {
      y: 0,
      opacity: 0,
      stagger: 0.4,
      ease: "power2.inOut",
    }, {
      y: 100,
      opacity: 100,
      stagger: 0.4,
      duration: 1,
      ease: "power2.inOut",

    });
  }, []);

  return (
    <section
      id="Home"
      className="hero w-full min-h-screen bg-secondary px-6 sm:px-12 md:px-24 lg:px-40 xl:px-60 2xl:px-80 py-16"
    >
      {/* Title */}
      <div>
        <h1 className="title mb-10 text-center font-bold font-inter tracking-tighter text-black text-6xl sm:text-8xl md:text-[10rem] lg:text-[15rem] xl:text-[18rem] leading-none">
          Hi there
        </h1>
      </div>

      {/* Main flex layout */}
      <div className="flex flex-col lg:flex-row justify-between relative lg:-mt-36 items-center gap-10">
        {/* LEFT SECTION */}
        <div className="leftComp flex flex-col gap-6 lg:w-1/2">
          <div className="flex flex-col gap-3">
            <p className="text-3xl sm:text-4xl md:text-5xl font-semibold font-inter text-black tracking-tight">
              Creative design –
            </p>
            <p className="text-3xl sm:text-4xl md:text-5xl font-semibold font-inter text-black tracking-tight">
              Fullstack Developer
            </p>
            <p className="text-3xl sm:text-4xl md:text-5xl font-semibold font-inter text-orange-600 tracking-tight">
              Aditya Kr
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-5 items-center mt-8">
              <Link
                to="Work"
                smooth={true}
                delay={100}
                offset={-50}
                spy={true}
                activeClass="active"
                duration={1000}
                className="text-lg md:text-xl font-roboto px-6 py-2 hover:bg-black/80 transition-all cursor-pointer bg-black text-white tracking-tight rounded-full border"
              >
                View projects
              </Link>
              <a className="text-lg md:text-xl font-roboto px-6 py-2 rounded-full border border-black cursor-pointer hover:bg-black hover:text-white transition-all">
                About me
              </a>
            </div>
          </div>

          {/* Paragraph */}
          <div className="leading-relaxed font-inter text-left text-sm sm:text-base lg:text-lg text-gray-800 mt-10">
            <p>
              Today, I lead a team of talented designers, specialising in brand
              identity and UI design. My superpower? Quick learning and
              innovative thinking — bringing order to complexity and infusing
              creativity into every project.
            </p>
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div className="rightComp w-full sm:w-[20rem] md:w-[25rem] lg:w-[23rem] xl:w-[28rem]  2xl:w-[30rem] h-auto flex flex-col items-center lg:items-end">
          <div className="w-full h-80 sm:h-[25rem] md:h-[30rem] bg-zinc-950 flex justify-center items-center overflow-hidden rounded-md shadow-lg">
            <img
              src="/images/concert 1.jpg"
              className="w-full h-full object-cover"
              alt="Creative direction artwork"
            />
          </div>

          <div className="flex flex-col sm:flex-row justify-between items-start gap-6 mt-10 w-full">
            <p className="leading-tight sm:w-1/2 font-inter text-xs sm:text-sm md:text-[0.8rem] text-gray-700">
              As a graphic design leader, I'm driven by change and desire.
              Experiment with long exposures to capture mesmerizing light trails
              from vehicles.
            </p>
            <div className="font-semibold tracking-tight font-inter text-xl sm:text-2xl space-y-1">
              <p>Creative direction</p>
              <p>Creative direction</p>
              <p>Creative direction</p>
              <p>Creative direction</p>
              <p>Creative direction</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
