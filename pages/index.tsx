import type { NextPage } from "next";
import "slick-carousel/slick/slick.css";
import Head from "next/head";
import AboutMe from "../components/AboutMe";
import Banner from "../components/Banner";
import Offers from "../components/Offers";
import Works from "../components/Works";
import Testimonial from "../components/Testimonial";
import Contact from "../components/Contact";
import ScrollBtn from "../components/ScrollBtn";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Test blog | New Horizon</title>
        <link rel="icon" href="/smallLogo.ico" />
      </Head>

      <div className="font-bodyFont">
        <Banner />
        <AboutMe />
        <Offers />
        <Works />
        <Testimonial />
        <Contact />
      </div>
      <ScrollBtn />
    </div>
  );
};

export default Home;
