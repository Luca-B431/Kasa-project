import { useState } from "react";

export default function Gallery({ pictures }: { pictures: string[] }) {
  const [position, setPosition] = useState(0);

  return (
    <>
      <div className="relative flex flex-col justify-center items-center bg-cover overflow-hidden rounded-xl mb-12 mx-4 md:mx-24 ease-in bg-no-repeat bg-center h-full">
        {/* container-carrousel */}
        <div
          className="flex transition-transform duration-1000 ease-in-out w-full h-full"
          style={{ transform: `translateX(-${position * 100}%)` }}
        >
          {pictures.map((picture, index) => (
            <div
              key={index}
              className="w-full flex-shrink-0 h-64 sm:h-[416px] bg-center bg-cover bg-no-repeat"
              style={{ backgroundImage: `url(${picture})` }}
            />
          ))}
        </div>

        {/* Conditions d'affichage des flèches de navigation et du compteur */}
        {pictures.length > 1 && (
          <div className=" absolute flex justify-between items-center w-full h-full">
            {/* Left arrow */}

            {/* MOBILE svg */}
            <svg
              className="block sm:hidden mx-4"
              onClick={() => {
                setPosition(position > 0 ? position - 1 : pictures.length - 1);
              }}
              width="13"
              height="21"
              viewBox="0 0 13 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.51 2.75064L10.74 0.98064L0.83995 10.8806L10.7399 20.7806L12.5099 19.0106L4.37995 10.8806L12.51 2.75064Z"
                fill="white"
              />
            </svg>

            {/* DESKTOP svg */}
            <svg
              className="cursor-pointer hidden sm:block mx-4"
              onClick={() => {
                setPosition(position > 0 ? position - 1 : pictures.length - 1);
              }}
              width="48"
              height="80"
              viewBox="0 0 48 80"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M47.04 7.78312L39.92 0.703125L0.359985 40.3031L39.96 79.9031L47.04 72.8231L14.52 40.3031L47.04 7.78312Z"
                className="fill-white hover:fill-[#FF6060] transition-colors"
              />
            </svg>
            {/* Right Arrow  */}

            {/* MOBILE svg */}
            <svg
              className="block sm:hidden mx-4"
              onClick={() => {
                setPosition(
                  position + 1 > pictures.length - 1 ? 0 : position + 1
                );
              }}
              width="13"
              height="21"
              viewBox="0 0 13 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.48999 19.0106L2.25999 20.7806L12.16 10.8806L2.25999 0.980591L0.48999 2.75059L8.61999 10.8806L0.48999 19.0106Z"
                fill="white"
              />
            </svg>

            {/* DESKTOP svg */}
            <svg
              onClick={() => {
                setPosition(
                  position + 1 > pictures.length - 1 ? 0 : position + 1
                );
              }}
              className="cursor-pointer hidden sm:block mx-4"
              width="48"
              height="80"
              viewBox="0 0 48 80"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.960022 72.3458L8.04002 79.4258L47.64 39.8258L8.04002 0.22583L0.960022 7.30583L33.48 39.8258L0.960022 72.3458Z"
                className="fill-white hover:fill-[#FF6060] transition-colors"
              />
            </svg>

            <p className="absolute hidden sm:block bottom-5 left-1/2 text-white text-xl text-bold justify-center items-end">
              {" "}
              {position + (1 % pictures.length)} / {pictures.length}
            </p>
          </div>
        )}
      </div>
    </>
  );
}
