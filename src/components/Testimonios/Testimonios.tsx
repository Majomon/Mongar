"use client";
import TitleGeneral from "../TitleGeneral/TitleGeneral";
import { CartTestimonio } from "./CartTestimonio";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image from "next/image";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export const Testimonios = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  const settings = {
    customPaging: function() {
      return (
        <></>
      );
    },
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 2,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
    <div id="testimonios" className="w-full h-fit md:h-[500px] relative flex items-start px-3">
      <Image src={"/svg/Ellipse-testimont.svg"} className="absolute min-w-[340px] min-h-[340px] top-[30%] md:-top-[50px] left-[55%] translate-x-[-50%] -z-50" width={706} height={706} alt="ellipse-testimonios" />
      <section className="w-full max-w-[1250px] mx-auto flex flex-col justify-center items-center md:flex-row gap-10 ">
        <article className="w-full md:w-1/2 flex flex-col gap-y-10 px-10 py-10" data-aos="zoom-in-down" data-aos-duration="500">
          <TitleGeneral name="Testimonios" />
          <p className="font-normal text-center text-lg">
            Lorem ipsum dolor sit amet consectetur. Ut congue semper laoreet
            tortor nunc massa vel. Cursus et ac volutpat maecenas eu nisl sed.
            Varius enim risus pellentesque in varius Lorem ipsum dolor sit amet
            consectetur. Cursus et ac volutpat maecenas eu nisl sed. Varius enim
            risus pellentesque in varius Lorem ipsum dolor sit amet consectetur.
          </p>
        </article>
        <article className="w-full md:w-1/2 mx-auto h-fit p-10 border-l-2 transition-all duration-100 border-mossGreen-500 bg-[#ACEED5]/10" data-aos="zoom-out-up" data-aos-duration="500">
          <Slider {...settings} pauseOnHover arrows={false} >
            <CartTestimonio name="Mauri" profile="Developer" />
            <CartTestimonio name="Eze" profile="Diseñador" />
            <CartTestimonio name="Luna" profile="Diseñadora" />
          </Slider>
        </article>
      </section>
    </div>
  );
};
