
import { RiTwitterXFill } from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { Link } from "react-scroll";

const FooterComp = () => {
  return (
    <div
      className="w-full flex flex-col lg:flex-row justify-between items-start
      px-6 sm:px-12 md:px-24 lg:px-40 xl:px-60
      py-10 gap-10"
    >
      {/* Left Section */}
      <div className="font-roboto flex-col flex text-2xl sm:text-3xl lg:text-5xl font-bold tracking-tighter gap-6">
        <h1 className="break-all sm:break-normal">adityakr4ms@gmail.com</h1>

        <div className="text-sm sm:text-base text-inter text-zinc-800 tracking-tighter flex flex-col sm:flex-row gap-2 sm:gap-6 mt-4">
          <p>New Delhi, India</p>
          <p>
            Frontend Developer{" "}
            <span className="cursor-pointer font-dm text-blue-500">
              #sleekDesigns
            </span>
          </p>
        </div>

        <div className="text-xs sm:text-sm text-inter text-zinc-700 tracking-tighter">
          <p>© 2025 AduPadu. All rights reserved.</p>
        </div>
      </div>

      {/* Right Section */}
      <div>
        <div className="text-base sm:text-lg font-semibold font-inter tracking-tighter text-zinc-800">
          <p>
            Say hello{" "}
            <a className="underline cursor-pointer">work with me</a>
          </p>
        </div>

        <div className="flex flex-wrap mt-6 sm:mt-10 items-center gap-4 sm:gap-5">
          <a>
            <RiTwitterXFill className="text-3xl sm:text-4xl text-zinc-700" />
          </a>

          <a
            href="https://www.linkedin.com/in/aditya-kumar-273327292/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedinIn className="text-3xl sm:text-4xl text-zinc-700" />
          </a>

          <a
            href="https://leetcode.com/u/adies/"
            target="_blank"
            rel="noreferrer"
          >
            <SiLeetcode className="text-3xl sm:text-4xl text-zinc-700" />
          </a>

          <p className="text-sm sm:text-lg cursor-pointer font-roboto text-zinc-700 tracking-tighter underline">
            <Link
              to="Home"
              smooth={true}
              delay={100}
              offset={-50}
              spy={true}
              activeClass="active"
              duration={1000}
            >
              Back to top
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default FooterComp;