import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { MdMenu } from "react-icons/md";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="container">
      <div className="body flex pb-7 justify-between items-center">
        <div className="flex gap-x-2 items-center">
          <div className="w-12 h-12 flex justify-center items-center font-semibold text-xl rounded-full bg-[#292929]">
            <h2 className="logo">S</h2>
          </div>
          <h2 className="tracking-widest">SHUKURAH NURUDEEN</h2>
        </div>

        <MdMenu className="text-2xl" onClick={handleMenuToggle} />
        <ul className={`navlinks ${isMenuOpen ? "open" : ""}`}>
          <div className="flex justify-end mb-12">
            <button onClick={handleMenuToggle}>
              <IoClose className="text-2xl" />
            </button>
          </div>

          <li className="mb-5">
            <a
              href="/"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              onClick={handleMenuToggle}
              className="cursor-pointer"
            >
              <small className="others mr-2">01</small>
              <span className="text-3xl">Home</span>
            </a>
          </li>
          <li className="mb-5">
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              onClick={handleMenuToggle}
              className="cursor-pointer"
            >
              <small className="others mr-2">02</small>
              <span className="text-3xl">About</span>
            </Link>
          </li>
          <li className="mb-5">
            <Link
              to="skills"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              onClick={handleMenuToggle}
              className="cursor-pointer"
            >
              <small className="others mr-2">03</small>
              <span className="text-3xl">Skills</span>
            </Link>
          </li>
          <li className="mb-5">
            <Link
              to="projects"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              onClick={handleMenuToggle}
              className="cursor-pointer"
            >
              <small className="others mr-2">04</small>
              <span className="text-3xl">Projects</span>
            </Link>
          </li>
          <li className="mb-5">
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              onClick={handleMenuToggle}
              className="cursor-pointer"
            >
              <small className="others mr-2">05</small>
              <span className="text-3xl">Contacts</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
