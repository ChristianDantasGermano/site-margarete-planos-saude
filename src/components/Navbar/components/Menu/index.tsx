import { motion } from "framer-motion";
import { Link } from "react-router-dom";

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

type Menu = {
  onClickMenuItem: VoidFunction;
};

const MenuMobile: React.FC<Menu> = ({ onClickMenuItem }) => {
  return (
    <nav className="z-10 absolute flex flex-col shadow-md bg-base-primary w-full md:hidden">
      <ul className="flex flex-col gap-3 p-4">
        {rotas.map((rota, index) => (
          <Link key={index} to={rota.to}>
            <li
              key={index}
              onClick={onClickMenuItem}
              className="block  p-2 w-11/12 font-belleza font-normal text-xl uppercase"
            >
              {rota.label}
            </li>
          </Link>
        ))}
      </ul>
    </nav>
  );
};

const MenuDekstop = () => {
  return (
    <ul className="flex gap-12">
      {rotas.map((rota, index) => (
        <Link key={index} to={rota.to}>
          <motion.div
            key={index}
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.1 },
            }}
            whileTap={{ scale: 0.9 }}
            className="p-2 font-belleza font-normal text-lg uppercase"
          >
            {rota.label}
          </motion.div>
        </Link>
      ))}
    </ul>
  );
};

export { MenuMobile, MenuDekstop };
