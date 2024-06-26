import React, { useEffect } from "react";
import { gsap } from "gsap";

const PreLoader = () => {
  useEffect(() => {
    const tl = gsap.timeline();

    gsap.set("#logo", {
      opacity: 0,
      scale: 0,
    });
    gsap.set("#dmcelogo", {
      opacity: 1,
      scale: 1,
      translateX: -100,
    });
    gsap.set("#softlinklogo", {
      opacity: 1,
      scale: 1,
      translateX: 100,
    });
    gsap.set(".preloader", {
      height: "100%",
    });

    tl.to("#dmcelogo", {
      left: "50%",
      duration: 2,
      ease: "Power3.easeOut",
    })
      .to(
        "#softlinklogo",
        {
          right: "50%",
          duration: 2,
          ease: "Power3.easeOut",
        },
        "<"
      )
      .to(
        "#logo",
        {
          delay: 0.5,
          opacity: 1,
          scale: 1,
          duration: 2,
          // rotate : 360,
          ease: "Power3.easeOut",
        },
        "<"
      )

      .from(".preloader", {
        height: "100%",
        duration: 2,
        ease: "Power3.easeOut",
      });
  }, []);

  return (
    <div className="preloader z-[220] p-4 md:p-8 fixed top-0 left-0 bottom-0 right-0 w-full h-full flex justify-center items-center flex-col gap-8 bg-black overflow-hidden">
      <img
        id="dmcelogo"
        className=" absolute left-[20%] w-[10%] object-contain max-md:w-[40%] aspect-square"
        src={
          "https://res.cloudinary.com/dbeptj8fp/image/upload/v1710832671/hackathon/lh8v8zj9wvqbi9fdousi.png"
        }
        alt="logo"
      />
      <img
        id="softlinklogo"
        className=" absolute right-[20%] w-[10%] object-contain max-md:w-[40%] aspect-square"
        src={
          "https://res.cloudinary.com/dbeptj8fp/image/upload/v1710832671/hackathon/uzjcmpjwwmusgfzeyc3p.png"
        }
        alt="logo"
      />
      <img
        id="logo"
        className="w-[30%] max-md:w-[90%] aspect-square"
        src={
          "https://res.cloudinary.com/dbeptj8fp/image/upload/v1710832676/hackathon/p5tybh77b1oquqteoa3t.png"
        }
        alt="logo"
      />
      <div>
        <h2 className="text-center text-white text-xl font-semibold mt-12">
          Loading...
        </h2>
        <p className="text-center text-white mt-2">
          This may take a few seconds, please don't close this page.
        </p>
      </div>
    </div>
  );
};

export default PreLoader;
