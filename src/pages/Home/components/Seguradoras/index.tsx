import { FaMotorcycle } from "react-icons/fa";
import { MdDirectionsBike } from "react-icons/md";
import { FaTruck } from "react-icons/fa";
import { GiReceiveMoney } from "react-icons/gi";
import { FaPeopleGroup } from "react-icons/fa6";
import { FaTooth } from "react-icons/fa";
import { TbPigMoney } from "react-icons/tb";
import { AiOutlineLaptop } from "react-icons/ai";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { MdForklift } from "react-icons/md";
import { GiPayMoney } from "react-icons/gi";
import SeguroIcon from "./components/SeguroIcon";

export const segurosList = [
  {
    icon: <FaMotorcycle />,
    titulo: "Moto",
  },
  {
    icon: <MdDirectionsBike />,
    titulo: "Bicicleta",
  },
  {
    icon: <FaTruck />,
    titulo: "Frota",
  },
  {
    icon: <GiReceiveMoney />,
    titulo: "Financiamento",
  },
  {
    icon: <FaPeopleGroup />,
    titulo: "Consórcio",
  },
  {
    icon: <FaTooth />,
    titulo: "Odontológico",
  },
  {
    icon: <TbPigMoney />,
    titulo: "Previdência privada",
  },
  {
    icon: <AiOutlineLaptop />,
    titulo: "Portáveis",
  },
  {
    icon: <FaMoneyBillTransfer />,
    titulo: "Fiança",
  },
  {
    icon: <HiOutlineBuildingOffice2 />,
    titulo: "Condomínio",
  },
  {
    icon: <MdForklift />,
    titulo: "Equipamentos",
  },
  {
    icon: <GiPayMoney />,
    titulo: "Capital de giro",
  },
];

export default function SeguradoraOptions() {
  return (
    <div className="flex flex-col justify-center items-center bg-base-tertiary p-6 md:p-10">
      <div className="md:w-8/12">
        <div className=" flex flex-col justify-center items-center">
          <h4 className="font-dancingScript text-3xl md:text-4xl text-gray-700">
            Trabalhamos com todos os tipos de seguros, confira outras formas
            <b> que também podemos ajudar:</b>
          </h4>
          <div className="grid grid-cols-3 md:grid-cols-6 grid-rows-2 gap-6 p-2 mt-4 md:p-8 ">
            {segurosList.map((seguro, index) => (
              <SeguroIcon key={index} seguro={seguro} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
