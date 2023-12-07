import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo.png";
import { rotas } from "../Navbar";
export default function Footer() {
  return (
    <footer className="flex flex-col justify-center bg-base-primary items-center p-16">
      <div className="grid grid-cols-3 gap-6 w-8/12">
        <div className="col-span-1 flex justify-center items-center">
          <img src={Logo} />
        </div>
        <div className="col-span-2 flex flex-col">
          <ul className="flex-none flex-col lg:flex items-center gap-6 ">
            {rotas.map((rota, index) => (
              <Link key={index} to={rota.to}>
                <li
                  className="transition ease-in-out delay-50 
                              hover:scale-110 duration-100 font-belleza
                               text-2xl uppercase active:text-neutral-600"
                >
                  {rota.label}
                </li>
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
