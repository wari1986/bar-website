import React from "react";
import Head from "next/head";

import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="bg-black text-white h-full">
      <Head>
        <title>Chez Albina Bar</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:type" content="website" />
        <meta name="description" content="Bar website for Chez Albina" />
        <meta name="url" content="http://www.chezalbina.be" />
        <meta
          name="keywords"
          content="bar, food, beer, cocktails, pool, karaoke, neighbourhood, family"
        />
        <meta name="language" content="en-US" />
        <meta name="robots" content="index" />
      </Head>
      <div className="">
        <header className="">
          <Navbar />
        </header>
        <main className="">{children}</main>
        <footer className="">
          <Footer />
        </footer>
      </div>
    </div>
  );
};

export default Layout;
