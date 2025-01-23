import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { personalDetails, socialMediaUrl } from "../Details";

function Home() {
  const { name, slack, shortdescription, tagline, img } = personalDetails;
  const { linkdein } = socialMediaUrl;
  const h11 = useRef();
  const h12 = useRef();
  const h13 = useRef();
  const myimageref = useRef();
  useEffect(() => {
    const tl = gsap.timeline();
    tl.from(
      h11.current,
      {
        x: "-100%",
        delay: 0.8,
        opacity: 0,
        duration: 2,
        ease: "Power3.easeOut",
      },
      "<"
    )
      .from(
        h12.current,
        {
          x: "-100%",
          delay: 0.5,
          opacity: 0,
          duration: 2,
          ease: "Power3.easeOut",
        },
        "<"
      )
      .from(
        h13.current,
        {
          x: "-100%",
          delay: 0.1,
          opacity: 0,
          duration: 2,
          ease: "Power3.easeOut",
        },
        "<"
      )
      .from(
        myimageref.current,
        {
          x: "200%",
          delay: 0.5,
          opacity: 0,
          duration: 2,
          ease: "Power3.easeOut",
        },
        "<"
      );
  }, []);

  return (
    <main className="container mx-auto px-6 py-12 md:py-20 lg:py-28 flex flex-col md:flex-row items-center justify-between max-w-7xl">
      <div className="space-y-6 md:space-y-8">
        <h1
          ref={h11}
          className="text-3xl text-dark-heading dark:text-light-heading md:text-5xl lg:text-6xl font-extrabold leading-tight"
        >
          Hi, 👋<br /> I'm <span className="mt-2 text-gradient bg-clip-text text-transparent">{name}</span>
        </h1>
        <h2
          ref={h13}
          className="text-xl text-gray-700 dark:text-gray-300 md:text-2xl lg:text-2xl font-medium"
        >
          {slack}
        </h2>
        <p className="text-md text-gray-600 dark:text-gray-400 md:text-lg lg:text-xl leading-relaxed">
          {shortdescription}
        </p>
        <p className="text-md text-gray-600 dark:text-gray-400 md:text-lg lg:text-xl leading-relaxed">
          {tagline}
        </p>
        <div className="mt-6 md:mt-8">
          <a
            href={linkdein}
            className="inline-block bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-8 py-3 rounded-full text-lg font-medium shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            Let's Connect
          </a>
        </div>
      </div>
      <div className="mt-10 md:mt-0 md:ml-12">
        <img
          ref={myimageref}
          className="w-80 md:w-96 lg:w-[60rem] rounded-full shadow-2xl object-cover"
          src={img}
          alt={name}
        />
      </div>
    </main>



  );
}

export default Home;
