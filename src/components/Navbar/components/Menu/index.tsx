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

const Menu: React.FC<Menu> = ({ onClickMenuItem }) => {
  return (
    <nav className="z-40 absolute flex flex-col shadow-md bg-base-primary h-screen w-full">
      <ul className="flex flex-col gap-3 p-4">
        {rotas.map((rota, index) => (
          <Link key={index} to={rota.to}>
            <li
              key={index}
              onClick={onClickMenuItem}
              className="block  p-4 w-11/12 font-belleza font-normal text-2xl uppercase"
            >
              {rota.label}
            </li>
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default Menu;
