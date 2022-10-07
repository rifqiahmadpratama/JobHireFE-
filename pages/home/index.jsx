import Head from "next/head";
import React, { useEffect, Fragment } from "react";
import Navbar from "../../components/navbar/index";
import Footer from "../../components/footer/index";
import HomeSwiper from "../../components/homeSwiper";
import HomeStart from "../../components/homeStart";
import Image from "next/image";
import ImageProfile from "../../assets/images/home_1.png";
//import { SwiperSlide } from "swiper";

const Home = () => {
  return (
    <div>
      <style global jsx>{``}</style>
      <Head>
        <title>Home</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <Fragment>
        <Navbar />
        <div className="container ">
          <div className="row mt-3 justify-content-center">
            <div className="col-6">
              <h2>Telenta terbaik negri untuk perubahan revolusi 4.0</h2>
              <p className="mt-2">
                Lorem ipsum sit amet, consectetur adipiscing elit. In euismod
                ipsum et dui dui rhocus auctor
              </p>
              <button type="button" className="btn btn-primary mt-3">
                Mulai Dari Sekarang
              </button>
            </div>
            <div className="col-6">
              <Image
                src={ImageProfile}
                alt="Picture of the author"
                width={500}
                height={500}
              />
            </div>
          </div>

          <div className="row mt-3 justify-content-center">
            <div className="col-6">
              <Image
                src={ImageProfile}
                alt="Picture of the author"
                width={500}
                height={500}
              />
            </div>
            <div className="col-6">
              <h2>Kenapa harus mencari tallent di peworld</h2>
              <ul>
                <li>Lorem ipsum dolor sit amet</li>
                <li>Lorem ipsum dolor sit amet</li>
                <li>Lorem ipsum dolor sit amet</li>
                <li>Lorem ipsum dolor sit amet</li>
              </ul>
            </div>
          </div>

          <div className="row mt-3 justify-content-center">
            <div className="col-6">
              <h2>Skill Talent</h2>
              <p className="mt-2">
                Lorem ipsum sit amet, consectetur adipiscing elit
              </p>
              <div></div>
            </div>
            <div className="col-6">
              <Image
                src={ImageProfile}
                alt="Picture of the author"
                width={500}
                height={500}
              />
            </div>
          </div>
        </div>
        <HomeSwiper />
        <HomeStart />
        <Footer />
      </Fragment>
    </div>
  );
};

export default Home;
