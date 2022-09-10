/* eslint-disable react/button-has-type */
// import gsap from 'gsap';
import { useEffect, useRef } from 'react';

function Header() {
  const navRef = useRef<HTMLElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // useEffect(() => {
  //     buttonRef.current?.addEventListener('click', () => {

  //   });
  // }, [navRef, buttonRef]);

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
              <img className="fill-white" src="/ASGV_Logo_Rev.png" alt="Logo" />
            </a>
          </div>
          <nav className="hidden md:flex items-center text-yellow-600">
            <a
              className="py-3 px-3  hover:text-white active:text-yellow-900"
              href="#/"
            >
              Home
            </a>
            <a
              className="py-3 px-3  hover:text-white active:text-yellow-900"
              href="#/cgi"
            >
              CGI
            </a>
            <a
              className="py-3 px-3  hover:text-white active:text-yellow-900"
              href="#/dap"
            >
              DAP
            </a>
            <a
              className="py-3 px-3  hover:text-white active:text-yellow-900"
              href="#/spins"
            >
              Spins
            </a>
            <a
              className="py-3 px-3 hover:text-white active:text-yellow-900"
              href="#/photography"
            >
              Photography
            </a>
            <a
              className="py-3 px-3 hover:text-white active:text-yellow-900"
              href="#/design"
            >
              Design
            </a>
            <a
              className="py-3 px-3 hover:text-white active:text-yellow-900"
              href="#/about"
            >
              About
            </a>
          </nav>
        </div>
        <div className="hidden md:flex items-center space-x-4">&nbsp;</div>
        <div className="md:hidden flex items-center">
          <button
            title="Nav Button"
            className="mobile-nav-button"
            ref={buttonRef}
          >
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
      <nav ref={navRef} className="mobile-nav hidden  text-white md:hidden">
        <a className="block py-3 px-3" href="#/">
          Home
        </a>
        <a className="block py-3 px-3" href="#/cgi">
          CGI
        </a>
        <a className="block py-3 px-3" href="#/dap">
          Digital Asset Pipeline
        </a>
        <a className="block py-3 px-3" href="#/spins">
          Spins
        </a>
        <a className="block py-3 px-3" href="#/photography">
          Photography
        </a>
        <a className="block py-3 px-3" href="#/design">
          Design
        </a>
        <a className="block py-3 px-3" href="#/about">
          About
        </a>
      </nav>
    </header>
  );
}
export default Header;
