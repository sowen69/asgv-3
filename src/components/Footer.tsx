import React from 'react';

function ASGVFooter() {
  return (
    <footer className="flex justify-between footer mx-0 px-5 py-10 bg-slate-700 text-base-content text-yellow-400">
      <div className="flex flex-col w-1/4">
        <div className="block w-full">
          <img
            className="block items-center fill-white pb-3"
            src="/ASGV_Logo_Rev.png"
            alt="Logo"
          />
        </div>
        <p className="text-xs">
          Providing commercial Computer Generated Imagery, Augmented Reality,
          and Virtual Reality since 2019
        </p>
      </div>
      <div className="flex flex-col">
        <h3 className="footer-title">Services</h3>
        <a href="/#" className="text-xs link link-hover">
          CGI
        </a>
        <a href="/#" className="text-xs link link-hover">
          Digital Asset Pipeline
        </a>
        <a href="/#" className="text-xs link link-hover">
          E-Commerce Models
        </a>
        <a href="/#" className="text-xs link link-hover">
          Photography
        </a>
        <a href="/#" className="text-xs link link-hover">
          Photo Retouch
        </a>
        <a href="/#" className="text-xs link link-hover">
          Creative Design
        </a>
      </div>
      <div className="flex flex-col">
        <h3 className="footer-title">Company</h3>
        <a href="/#" className="text-xs link link-hover">
          About us
        </a>
        <a href="/#" className="text-xs link link-hover">
          Contact
        </a>
        <a href="/#" className="text-xs link link-hover">
          Jobs
        </a>
        <a href="/#" className="text-xs link link-hover">
          Press kit
        </a>
      </div>
      <div className="flex flex-col">
        <h3 className="footer-title">Legal</h3>
        <a href="/#" className="text-xs link link-hover">
          Terms of use
        </a>
        <a href="/#" className="text-xs link link-hover">
          Privacy policy
        </a>
        <a href="/#" className="text-xs link link-hover">
          Cookie policy
        </a>
      </div>
    </footer>
  );
}
export default ASGVFooter;
