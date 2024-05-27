"use client";
import TitleGeneral from "../TitleGeneral/TitleGeneral";
import { CartTestimonio } from "./CartTestimonio";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export const Testimonios = () => {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 3000,
    cssEase: "linear",
  };
  return (
    <div id="testimonios" className="w-full bg-darkBlue-950">
      <div className="w-full md:w-8/12 mx-auto flex flex-col md:flex-row gap-10 pb-10">
        <div className="w-full md:w-6/12 flex flex-col md:flex-row gap-y-10 px-10 py-10">
          <TitleGeneral name="Testimonios" />
          <p className="text-center text-xs md:text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
            obcaecati totam eos quis harum eveniet non laboriosam qui, nemo
            delectus, dolorem, labore maxime vero consequatur libero sapiente
            amet tenetur officiis.
          </p>
        </div>
        <div className="w-11/12 mx-auto md:w-6/12 h-fit p-10 border-l-2 border-mossGreen-500 bg-gradient-cartTestimonio">
          <Slider {...settings} pauseOnHover arrows={false}>
            <CartTestimonio name="Mauri" profile="Developer" />
            <CartTestimonio name="Eze" profile="Diseñador" />
            <CartTestimonio name="Luna" profile="Diseñadora" />
          </Slider>
        </div>
      </div>
    </div>
  );
};
