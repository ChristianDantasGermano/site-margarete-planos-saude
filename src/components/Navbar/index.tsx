import { useState } from "react";
import Logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
import { BurgerClose, BurgerSwipe } from "react-burger-icons";
import { motion } from "framer-motion";
import { IconContext } from "react-icons";
export const rotas = [
  {
    label: "Home",
    to: "/",
  },
  {
    label: "Blog",
    to: "/blog",
  },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <nav
        className="z-50 relative bg-base-primary items-center flex w-full py-5 
      lg:py-4 lg:justify-center drop-shadow-2xl opacity-80  backdrop-filter backdrop-blur-lg "
      >
        <div className="flex-grow">
          <img className="pl-8 max-h-12" src={Logo} />
        </div>
        <ul className="flex-none hidden lg:flex items-center gap-16 ">
          {rotas.map((rota, index) => (
            <Link key={index} to={rota.to}>
              <li
                className="transition ease-in-out delay-50 
                              hover:scale-110 duration-100 font-belleza
                               text-xl uppercase active:text-neutral-600"
              >
                {rota.label}
              </li>
            </Link>
          ))}
        </ul>
        <section className="flex-none mr-5">
          <motion.button
            initial={{ opacity: 0.6 }}
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.2, transition: { duration: 0.5 } }}
            onClick={() => {
              setIsMobileMenuOpen(!isMobileMenuOpen);
            }}
          >
            <BurgerSwipe isClosed={isMobileMenuOpen} />
          </motion.button>
        </section>
      </nav>
      <div
        className={`lg:hidden z-50 absolute flex flex-col shadow-md bg-base-primary h-screen w-full
               transform translate-x-full ease-in-out duration-300 ${
                 isMobileMenuOpen ? " translate-x-1 " : " translate-x-full"
               }`}
      >
        <ul className="flex flex-col items-start pl-8 pt-12 divide-y divide-solid divide-neutral-600">
          {rotas.map((rota, index) => (
            <li
              key={index}
              onClick={() => setIsMobileMenuOpen(false)}
              className="active:bg-base-secondary p-4 w-11/12 font-belleza font-normal text-xl uppercase"
            >
              {rota.label}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
