import React from 'react';
import Head from 'next/head';

import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div className="flex">
      <Head>
        <title>Adriana Espinoza MUA</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:type" content="website" />
        <meta
          name="description"
          content="Portfolio website for adriana espinoza makeup artist"
        />
        <meta name="url" content="http://www.adrianaespinoza.com" />
        <meta
          name="keywords"
          content="makeup artist, hairstylist, beauty, self-care, special effects, wedding"
        />
        <meta name="language" content="en-US" />
        <meta name="robots" content="index" />

      </Head>
      {/* <div className="w-1/6 flex flex-col justify-between py-12 text-right"> */}
      <div className="w-full h-screen md:flex lg:flex">
        <div className="md:hidden lg:hidden">
          <Navbar />
        </div>
        <main className="w-full xl:w-5/6">{children}</main>
        <div className="md:hidden lg:hidden">
          <Footer />
        </div>
        <div className="hidden sm:visible md:visible md:flex md:flex-col md:w-2/5 lg:flex flex-col xl:w-1/6 justify-between">
          <header className="flex justify-end">
            <Navbar />
          </header>
          <footer>
            <Footer />
          </footer>
        </div>
      </div>
    </div>
  );
}

export default Layout
