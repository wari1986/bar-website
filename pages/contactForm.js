import React from 'react'
import Image from 'next/image'

const contactForm = () => {
  return (
    <div className="mx-8 lg:flex h-6/7 justify-center items-center lg:mt-18 lg:mr-0 xl:mx-8">
      <div className="w-full mt-8 md:hidden lg:pr-4 lg:flex lg:w-2/3 xl:w-1/2">
        <Image
          src="/assets/contact-image.jpg"
          width={650}
          height={900}
          alt=""
        />
      </div>
      <div className="w-full lg:h-1/3 mt-16 lg:w-1/3 xl:w-1/2">
        <form
          method="POST"
          action="https://getform.io/f/310da053-04ce-4a6f-94a6-19b8bd86bd18"
          className="lg:flex flex-col max-w-[600px] w-full"
        >
          <div className="pb-8 lg:pb-2 xl:pb-8">
            <p className="text-3xl text-[#333333] lg:2xl xl:text-3xl">Contact Form</p>
            <p className="text-[#686868] py-4 lg:py-2 xl:py-4">
              <a
                href="mailto:nicolaycamacho@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                Email:{" "}
                <span className="text-[#A5A5A5]">
                  adrianaespinoza@gmail.com
                </span>
              </a>
            </p>
            <p className="text-[#A5A5A5] py-4 lg:py-2 xl:py-4">
              <a
                href="mailto:nicolaycamacho@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                Ph: <span className="text-[#686868]">702.445.9531</span>
              </a>
            </p>
          </div>
          <p className="mt-6 mb-2 text-sm text-[#686868] lg:mt-2 xl:mt-6">Name *</p>
          <div className="flex space-x-4 lg:block lg:space-x-0 xl:flex xl:space-x-4">
            <div className="w-1/2 block lg:w-full">
              <input
                className="w-full p-2 border border-gray-200 rounded-sm lg:p-0 xl:p-2"
                type="text"
                name="name"
              />
              <p className="text-xs text-[#686868] mt-2">First Name</p>
            </div>
            <div className="w-1/2 block lg:w-full">
              <input
                className="w-full p-2 border border-gray-200 rounded-sm lg:p-0 xl:p-2"
                type="text"
                name="last name"
              />
              <p className="text-xs text-[#686868] mt-2">Last Name</p>
            </div>
          </div>
          <p className="mt-6 mb-2 text-sm text-[#686868] lg:mt-2 xl:mt-6">Email *</p>
          <input
            className="w-full p-2 border border-gray-200 rounded-sm lg:p-0 xl:p-2"
            type="email"
            name="email"
          />
          <p className="mt-6 mb-2 text-sm text-[#686868] lg:mt-2 xl:mt-6">Phone *</p>
          <input
            className="w-full p-2 border border-gray-200 rounded-sm lg:p-0 xl:p-2"
            type="phone"
            name="phone"
          />
          <p className="w-full mt-6 mb-2 text-sm text-[#686868] lg:mt-2 xl:mt-6">
            Message *
          </p>
          <textarea
            className="w-full p-2 border border-gray-200 rounded-sm lg:p-0 xl:p-2"
            name="message"
            rows="4"
          ></textarea>
          <button className="text-white bg-[#686868] border-2 px-6 py-5 my-12 w-2/5 lg:w-1/3 lg:my-6">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default contactForm
