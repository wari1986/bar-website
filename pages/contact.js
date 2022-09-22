import React from 'react';

const Contact = () => {
  return (
    <div className="px-8 md:flex h-6/7 md:justify-center items-center text-white">
      <div className="">
        <form
          method="POST"
          action="https://getform.io/f/310da053-04ce-4a6f-94a6-19b8bd86bd18"
          className="lg:flex flex-col max-w-[600px] w-full"
        >
          <div className="pb-8 lg:pb-2 xl:pb-8">
            <p className="text-3xl lg:2xl xl:text-3xl">
              Contact Us
            </p>
            <p className=" py-4 lg:py-2 xl:py-4">
              <a
                href="mailto:nicolaycamacho@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                Email:{" "}
                <span className="">chezalbina@gmail.com</span>
              </a>
            </p>
            <p className=" py-4 lg:py-2 xl:py-4">
              <a href="tel:+32485245769" target="_blank" rel="noreferrer">
                Phone: <span className="">04.8524.5769</span>
              </a>
            </p>
          </div>
          <p className="mt-6 mb-2 text-sm  lg:mt-2 xl:mt-6">
            Name *
          </p>
          <div className="flex space-x-4 lg:block lg:space-x-0 xl:flex xl:space-x-4">
            <div className="w-1/2 block lg:w-full">
              <input
                className="w-full p-2 border border-gray-200 rounded-sm lg:p-0 xl:p-2"
                type="text"
                name="name"
              />
              <p className="text-xs  mt-2">First Name</p>
            </div>
            <div className="w-1/2 block lg:w-full">
              <input
                className="w-full p-2 border border-gray-200 rounded-sm lg:p-0 xl:p-2"
                type="text"
                name="last name"
              />
              <p className="text-xs  mt-2">Last Name</p>
            </div>
          </div>
          <p className="mt-6 mb-2 text-sm  lg:mt-2 xl:mt-6">
            Email *
          </p>
          <input
            className="w-full p-2 border border-gray-200 rounded-sm lg:p-0 xl:p-2"
            type="email"
            name="email"
          />
          <p className="mt-6 mb-2 text-sm  lg:mt-2 xl:mt-6">
            Phone *
          </p>
          <input
            className="w-full p-2 border border-gray-200 rounded-sm lg:p-0 xl:p-2"
            type="phone"
            name="phone"
          />
          <p className="w-full mt-6 mb-2 text-sm  lg:mt-2 xl:mt-6">
            Message *
          </p>
          <textarea
            className="w-full p-2 border border-gray-200 rounded-sm lg:p-0 xl:p-2"
            name="message"
            rows="4"
          ></textarea>
          <div className='flex justify-center'>
            <button className="text-white border-2 py-2 my-12 w-2/5 lg:w-1/3 lg:my-6">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact
