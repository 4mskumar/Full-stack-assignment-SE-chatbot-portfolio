import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { Menu, X } from "lucide-react";

const Index = () => {
  const [ind, setInd] = useState(0);
  const [blur, setBlur] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setBlur(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`w-full fixed top-0 left-0 py-2 flex justify-between z-[10000]
      ${blur ? "bg-white/40 backdrop-blur-md" : ""}
      px-4 sm:px-8 md:px-16 lg:px-32 xl:px-40
      items-center transition-all duration-300`}
    >
      {/* Logo */}
      <div>
        <a
          href="/"
          className="text-zinc-800 font-roboto text-3xl sm:text-4xl font-bold tracking-tighter"
        >
          adi
        </a>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-16">
        {["Home", "About", "Work", "Contact"].map((item, index) => (
          <Link
            key={index}
            to={item}
            smooth={true}
            delay={100}
            offset={-50}
            spy={true}
            activeClass="active"
            duration={1000}
          >
            <span
              onClick={() => setInd(index)}
              className={`cursor-pointer text-zinc-800 font-inter text-md font-light tracking-tighter 
              hover:text-primary transition-all duration-300 ease-in-out
              ${index === ind ? "text-primary font-semibold" : ""}`}
            >
              {item}
            </span>
          </Link>
        ))}
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-zinc-800"
        onClick={() => setOpen(!open)}
      >
        {open ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Menu */}
      {open && (
        <div
          className="absolute top-full left-0 w-full bg-white shadow-md 
          flex flex-col items-center gap-6 py-6 md:hidden"
        >
          {["Home", "About", "Work"].map((item, index) => (
            <Link
              key={index}
              to={item}
              smooth={true}
              delay={100}
              offset={-50}
              spy={true}
              duration={1000}
              onClick={() => {
                setInd(index);
                setOpen(false);
              }}
            >
              <span
                className={`text-zinc-800 font-inter text-lg tracking-tighter 
                hover:text-primary transition-all duration-300
                ${index === ind ? "text-primary font-semibold" : ""}`}
              >
                {item}
              </span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Index;