/* eslint-disable react/button-has-type */
import { useRef } from 'react';

function Header() {
  const navRef = useRef<HTMLElement>(null);

  // TODO: Dismiss menu with Esc and onBlur click
  const toggle = () => {
    navRef.current?.classList.toggle('hidden');
  };

  return (
    <header className="bg-slate-700 static w-full">
      <div className=" text-white flex justify-between items-center max-w-6xl mx-auto px-5">
        {/* navbar */}
        <div className="flex">
          <div className="items-center py-3 w-32 mr-3">
            <a href="/#">
              <img
                className="fill-white pt-0.5"
                src="/ASGV_Logo_Rev.png"
                alt="Logo"
              />
            </a>
          </div>
          <nav className="hidden md:flex items-center text-yellow-600">
            <a
              className="py-3 px-3 transition duration-350 hover:text-white active:text-yellow-900 hover:bg-yellow-600"
              href="/"
            >
              Home
            </a>
            <a
              className="py-3 px-3 transition duration-350 hover:text-white active:text-yellow-900 hover:bg-yellow-600"
              href="/cgi"
            >
              CGI
            </a>
            <a
              className="py-3 px-3 transition duration-350 hover:text-white active:text-yellow-900 hover:bg-yellow-600"
              href="/dap"
            >
              DAP
            </a>
            <a
              className="py-3 px-3 transition duration-350 hover:text-white active:text-yellow-900 hover:bg-yellow-600"
              href="/spins"
            >
              Spins
            </a>
            <a
              className="py-3 px-3 transition duration-350 hover:text-white active:text-yellow-900 hover:bg-yellow-600"
              href="/photography"
            >
              Photography
            </a>
            <a
              className="py-3 px-3 transition duration-350 hover:text-white active:text-yellow-900 hover:bg-yellow-600"
              href="/design"
            >
              Design
            </a>
            {/* <a
              className="py-3 px-3 transition duration-350 hover:text-white active:text-yellow-900 hover:bg-yellow-600"
              href="/about"
            >
              About
            </a> */}
          </nav>
        </div>
        <div className="hidden md:flex items-center space-x-4">&nbsp;</div>
        <div className="md:hidden flex items-center">
          <button title="Nav Button" className="mobile-nav-button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#ca8a04"
              className="w-6 h-6"
              onClick={toggle}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
              />
            </svg>
          </button>
        </div>
      </div>
      <nav
        ref={navRef}
        className="absolute z-50 w-full top-10 left-0 bg-slate-700 opacity-90 mobile-nav hidden  text-white md:hidden"
      >
        <a className="block py-2 px-5" href="/">
          Home
        </a>
        <a className="block py-2 px-5" href="/cgi">
          Computer Generated Images
        </a>
        <a className="block py-2 px-5" href="/dap">
          Digital Asset Pipeline
        </a>
        <a className="block py-2 px-5" href="/spins">
          Product Spins
        </a>
        <a className="block py-2 px-5" href="/photography">
          Photography and Retouch
        </a>
        <a className="block py-2 px-5" href="/design">
          Design, Packaging and Web
        </a>
        {/* <a className="block py-2 px-5" href="/about">
          About
        </a> */}
      </nav>
    </header>
  );
}
export default Header;
