import { NavLink } from "react-router";

export default function Header() {
  return (
    <>
      <header className="my-8 bg-white max-w-screen-xl mx-auto">
        <div className="flex justify-between items-center mx-4 md:mx-24">
          <img
            className="w-36 h-12 md:w-48 md:h-14"
            src="/assets/logo.png"
            alt="Logo"
          />
          <nav className="flex justify-center items-center">
            <ul className="flex justify-between items-center gap-4 md:gap-8">
              <li className="px-2">
                <NavLink
                  to="/"
                  className=" text-black hover:underline  text-[12px] md:text-2xl"
                >
                  <p className="block md:hidden">ACCUEIL</p>
                  <p className="hidden md:block"> Accueil </p>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className=" text-black  hover:underline text-[12px] md:text-2xl"
                >
                  <p className="block md:hidden text-nowrap"> À PROPOS</p>
                  <p className="hidden md:block"> À propos </p>
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}
