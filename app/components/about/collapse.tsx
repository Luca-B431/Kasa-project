import { useState } from "react";

export default function Collapse({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => {
          console.log("clicked"), setIsOpen(!isOpen);
        }}
        className="flex justify-between items-center bg-[#FF6060] h-8 md:h-12 p-3 mx-4 md:mx-24 mt-12 rounded-sm font-bold text-white text-sm md:text-2xl transition duration-500"
      >
        {title}
        <svg
          className={`transition duration-250 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
          width="33"
          height="32"
          viewBox="0 0 33 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15.2897 10.7897C15.9591 10.1202 17.0462 10.1202 17.7157 10.7897L27.9979 21.0719C28.6674 21.7414 28.6674 22.8285 27.9979 23.4979C27.3285 24.1673 26.2414 24.1673 25.572 23.4979L16.5 14.4259L7.42804 23.4926C6.75862 24.162 5.67148 24.162 5.00206 23.4926C4.33265 22.8231 4.33265 21.736 5.00206 21.0666L15.2843 10.7843L15.2897 10.7897Z"
            fill="white"
          />
        </svg>
      </button>
      <div
        className={`overflow-hidden transition-all duration-100 ease-linear mx-4 px-4 py-0 md:mx-24 bg-gray-100 rounded-sm ${
          isOpen ? "max-h-96 py-4 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <p className="text-sm md:text-xl text-black">{text}</p>
      </div>
    </>
  );
}
