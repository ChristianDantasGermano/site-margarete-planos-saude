import { IconContext } from "react-icons";
import { segurosList } from "..";

type SeguroIconIT = {
  seguro: (typeof segurosList)[0];
};

const SeguroIcon: React.FC<SeguroIconIT> = ({ seguro }) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex flex-col justify-center items-center bg-base-base rounded-full p-2 md:p-3">
        <div className="hidden md:block">
          <IconContext.Provider value={{ size: "35" }}>
            {seguro.icon}
          </IconContext.Provider>
        </div>
        <div className="md:hidden">
          <IconContext.Provider value={{ size: "25" }}>
            {seguro.icon}
          </IconContext.Provider>
        </div>
      </div>
      <h5 className="font-belleza text-sm font-bold text-center text-base-base break-words h-full">
        {seguro.titulo}
      </h5>
    </div>
  );
};

export default SeguroIcon;
