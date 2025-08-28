import React from "react";
import { Typewriter } from "react-simple-typewriter";

const Hero = () => {
  return (
    <div>
      <div className="text-white">
        <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
          <p className="text-[#00df9a] font-bold p-2">
            GROWING WITH DATA ANALYTICS
          </p>
          <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">
            Grow with data.
          </h1>
          <div>
            <p className="md:text-5xl sm:text-4xl text-xl font-black">
              Fast, flexible financing for{" "}
              <span className="text-[#00df9a]">
                <Typewriter
                  words={["B2B", "BTC", "SaaS"]}
                  loop={0} // 0 = infinite
                  cursor
                  cursorStyle="|"
                  typeSpeed={120}
                  deleteSpeed={80}
                  delaySpeed={1000}
                />
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
