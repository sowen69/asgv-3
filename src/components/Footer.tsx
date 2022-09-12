function ASGVFooter() {
  return (
    <footer
      className="
      flex 
      flex-row 
      flex-wrap
      justify-between 
      footer 
      mx-0 
      px-5 
      py-10 
      bg-slate-700 
      text-base-content 
      text-white
      sm:flex-col"
    >
      {/* logo column */}
      <div className="pb-5 sm:w-1/4">
        <img
          className="block items-center fill-white pb-3"
          src="/asgv-3/ASGV_Logo_Rev.png"
          alt="Logo"
        />
        <p className="text-xs">
          Providing commercial Computer Generated Imagery, Augmented Reality,
          and Virtual Reality since 2019
        </p>
      </div>
      {/* menu column */}
      <div className="flex flex-col sm:w-3/4">
        <div className="">
          <h3 className="footer-title">Services</h3>
          <a href="/#" className="text-xs link link-hover pr-2">
            CGI
          </a>
          <a href="/#" className="text-xs link link-hover pr-2">
            Digital Asset Pipeline
          </a>
          <a href="/#" className="text-xs link link-hover pr-2">
            E-Commerce Models
          </a>
          <a href="/#" className="text-xs link link-hover pr-2">
            Photography
          </a>
          <a href="/#" className="text-xs link link-hover pr-2">
            Photo Retouch
          </a>
          <a href="/#" className="text-xs link link-hover pr-2">
            Creative Design
          </a>
        </div>
        <div className="">
          <h3 className="footer-title">Company</h3>
          <a href="/#" className="text-xs link link-hover pr-2">
            About us
          </a>
          <a href="/#" className="text-xs link link-hover pr-2">
            Contact
          </a>
          <a href="/#" className="text-xs link link-hover pr-2">
            Jobs
          </a>
          <a href="/#" className="text-xs link link-hover pr-2">
            Press kit
          </a>
        </div>
        <div className="">
          <h3 className="footer-title">Legal</h3>
          <a href="/#" className="text-xs link link-hover pr-2">
            Terms of use
          </a>
          <a href="/#" className="text-xs link link-hover pr-2">
            Privacy policy
          </a>
          <a href="/#" className="text-xs link link-hover pr-2">
            Cookie policy
          </a>
        </div>
      </div>
    </footer>
  );
}
export default ASGVFooter;
