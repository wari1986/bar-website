import React from 'react'

const AboutTextBanner = ({title, text}) => {
  return (
    <div className="border-y-2">
      <div className="text-center space-y-4 px-14 md:h-72 md:w-1/3 md:mx-auto md:py-6 ">
        <h1 className="pt-4 text-3xl">{title}</h1>
        <p className="pb-4">{text}</p>
      </div>
    </div>
  );
}

export default AboutTextBanner
