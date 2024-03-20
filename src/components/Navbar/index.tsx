import "./css/styles.css";
import { useEffect } from "react";
import Logo from "../../assets/images/logo.png";
import { stagger, useAnimate } from "framer-motion";
import { MenuToggle } from "./components/MenuToogle";
import Menu from "./components/Menu";

function useMenuAnimation(isOpen: boolean) {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    const menuAnimations = isOpen
      ? [
          [
            "nav",
            { transform: "translateY(0%)" },
            { ease: [0.08, 0.65, 0.53, 0.96], duration: 0.4 },
          ],
          [
            "li",
            { transform: "scale(1)", opacity: 1, filter: "blur(0px)" },
            { delay: stagger(0.05), at: "-0.1" },
          ],
        ]
      : [
          [
            "li",
            { transform: "scale(0.5)", opacity: 0, filter: "blur(10px)" },
            { delay: stagger(0.05, { from: "last" }), at: "<" },
          ],
          ["nav", { transform: "translateY(-100%)" }, { at: "-0.1" }],
        ];

    animate([
      [
        "path.top",
        { d: isOpen ? "M 3 16.5 L 17 2.5" : "M 2 2.5 L 20 2.5" },
        { at: "<" },
      ],
      ["path.middle", { opacity: isOpen ? 0 : 1 }, { at: "<" }],
      [
        "path.bottom",
        { d: isOpen ? "M 3 2.5 L 17 16.346" : "M 2 16.346 L 20 16.346" },
        { at: "<" },
      ],
      //@ts-ignore
      ...menuAnimations,
    ]);
  }, [isOpen]);

  return scope;
}

type Navbar = {
  navbarIsOpen: boolean;
  setNavbarOpen: Function;
};

export const Navbar: React.FC<Navbar> = ({ navbarIsOpen, setNavbarOpen }) => {
  const scope = useMenuAnimation(navbarIsOpen);
  return (
    <div ref={scope}>
      <div className="z-50 relative flex w-full p-3 bg-base-primary overflow-hidden drop-shadow-md">
        <div className="flex-grow">
          <img className=" max-h-12" src={Logo} />
        </div>
        <MenuToggle toggle={() => setNavbarOpen(!navbarIsOpen)} />
      </div>
      <Menu onClickMenuItem={() => setNavbarOpen(false)} />
    </div>
  );
};
