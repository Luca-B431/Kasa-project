import { useState } from "react";

export default function Collapse({
  title,
  text,
}: {
  title: string;
  text: string | string[];
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full rounded-sm bg-gray-100 overflow-hidden transition-all duration-300">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center bg-[#FF6060] hover:cursor-pointer h-8 md:h-12 px-4 w-full font-bold text-white text-sm md:text-2xl transition duration-300"
      >
        {title}
        <svg
          className={`transition-transform duration-300 ${
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
        className={`px-4 transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 py-4 opacity-100" : "max-h-0 py-0 opacity-0"
        }`}
      >
        {Array.isArray(text) ? (
          <ul className="list-inside">
            {text.map((item, index) => (
              <li key={index} className="text-[12px] md:text-xl text-gray-600">
                {item}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-[12px] md:text-xl text-gray-600">{text}</p>
        )}
      </div>
    </div>
  );
}
