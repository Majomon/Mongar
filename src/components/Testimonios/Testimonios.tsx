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
    customPaging: function () {
      return <></>;
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

  const testi = [
    {
      name: "Naty",
      profile: "TezaShoes",
      label:
        "Mongar no solo creó una tienda online visualmente atractiva, sino que también mejoraron la experiencia del usuario, lo que resultó en un aumento de nuestras ventas. La atención al detalle y el profesionalismo de su equipo son insuperables.",
      image: "/testimonio/Teza.webp",
    },
    {
      name: "Yosef",
      profile: "Ruslux",
      label:
        "El equipo de Mongar fue súper profesional y cuidaron cada detalle. Nuestro sitio web corporativo quedó justo como queríamos y hemos recibido un montón de buenos comentarios. ¡Definitivamente los recomendaría!",
      image: "/testimonio/Iruslux.webp",
    },
  ];
  return (
    <div
      id="testimonios"
      className="w-full h-fit md:h-[500px] relative flex items-start px-3"
    >
      <Image
        src={"/svg/Ellipse-testimont.svg"}
        className="absolute min-w-[340px] min-h-[340px] top-[30%] md:-top-[50px] left-[55%] translate-x-[-50%] -z-50"
        width={706}
        height={706}
        alt="ellipse-testimonios"
      />
      <section className="w-full max-w-[1250px] mx-auto flex flex-col justify-center items-center md:flex-row gap-10 ">
        <article
          className="w-full md:w-1/2 flex flex-col gap-y-10 px-10 py-10"
          data-aos="zoom-in-down"
          data-aos-duration="500"
        >
          <TitleGeneral name="Testimonios" />
          <p className="font-normal text-center text-lg">
            En Mongar, nos enorgullecemos de transformar ideas en sitios web
            impresionantes y funcionales. Pero no solo confíes en nuestra
            palabra, escucha lo que nuestros clientes tienen que decir sobre su
            experiencia trabajando con nosotros:
          </p>
        </article>
        <article
          className="w-full md:w-1/2 mx-auto h-fit p-10 border-l-2 transition-all duration-100 border-mossGreen-500 bg-[#ACEED5]/10"
          data-aos="zoom-out-up"
          data-aos-duration="500"
        >
          <Slider {...settings} pauseOnHover arrows={false}>
            {testi.map((test, index) => (
              <CartTestimonio
                key={index}
                name={test.name}
                profile={test.profile}
                label={test.label}
                image={test.image}
              />
            ))}
          </Slider>
        </article>
      </section>
    </div>
  );
};
