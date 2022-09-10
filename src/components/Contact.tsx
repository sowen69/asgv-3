/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import MoreButton from './MoreButton';

function Contact() {
  const sectionVariants: Variants = {
    initial: { opacity: 0, x: 500 },
    animate: {
      x: -30,
      opacity: 1,
      transition: {
        when: 'beforeChildren',
        type: 'spring',
        bounce: 0.4,
        duration: 1,
      },
    },
  };

  const paraVariants = {
    initial: { x: 50, opacity: 0 },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        delay: 0.5,
      },
    },
  };

  return (
    <section id="contact" className="contact h-screen sm:w-1/2 w-full">
      <header className="pt-8">
        <h2 className="text-5xl text-left text-white">Contact</h2>
      </header>
      <p className="contact contact-leader text-left text-white">
        Tell us about your project and we&apos;d
        <br />
        be delighted to let you know if we can help.
      </p>
      <form className="">
        <div className="flex flex-col">
          <div className="mb-3">
            <label
              htmlFor="contactName"
              className="form-label inline-block mb-1 text-sky-300"
            >
              Name
            </label>
            <input
              type="text"
              className="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-sky-300
        bg-slate-300 bg-clip-padding
        border border-solid border-gray-800
        rounded
        transition
        ease-in-out
        m-0
        focus:text-slate-900 focus:bg-slate-200 focus:border-blue-600 focus:outline-none
      "
              id="contactName"
              placeholder="Name"
            />
          </div>
          <div className="mb-3">
            <label
              htmlFor="contactCompany"
              className="form-label inline-block mb-1 text-sky-300"
            >
              Company
            </label>
            <input
              type="text"
              className="
              form-control
              block
              w-full
              px-3
              py-1.5
              text-base
              font-normal
              text-sky-300
              bg-slate-300 bg-clip-padding
              border border-solid border-gray-800
              rounded
              transition
              ease-in-out
              m-0
              focus:text-slate-900 focus:bg-slate-200 focus:border-blue-600 focus:outline-none
            "
              id="contactCompany"
              placeholder="Company"
            />
          </div>
          <div className="mb-3">
            <label
              htmlFor="contactEmail"
              className="form-label inline-block mb-1 text-sky-300"
            >
              Email
            </label>
            <input
              type="text"
              className="
              form-control
              block
              w-full
              px-3
              py-1.5
              text-base
              font-normal
              text-sky-300
              bg-slate-300 bg-clip-padding
              border border-solid border-gray-800
              rounded
              transition
              ease-in-out
              m-0
              focus:text-slate-900 focus:bg-slate-200 focus:border-blue-600 focus:outline-none
            "
              id="contactEmail"
              placeholder="Email"
            />
          </div>
          <div className="mb-3 xl:w-96">
            <label
              htmlFor="contactMessage"
              className="form-label inline-block mb-1 text-sky-300"
            >
              Your message
            </label>
            <textarea
              className="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-sky-300
        bg-slate-300 bg-clip-padding
        border border-solid border-gray-800
        rounded
        transition
        ease-in-out
        m-0
        focus:text-slate-900 focus:bg-slate-200 focus:border-blue-600 focus:outline-none
      "
              id="exampleFormControlTextarea1"
              rows="3"
              placeholder="Your message"
            />
          </div>
        </div>
        <MoreButton href={''} buttonText={'Submit'} />{' '}
      </form>
      <p className="text-white mt-5">
        Alternatly you can email us at:&nbsp;
        <a className="text-sky-300" href="mailto:hello@asgvirtua.com">
          hello@asgvirtua.com
        </a>
      </p>
    </section>
  );
}
export default Contact;
