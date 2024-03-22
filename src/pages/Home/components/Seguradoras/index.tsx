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
    titulo: "moto",
  },
  {
    icon: <MdDirectionsBike />,
    titulo: "bicicleta",
  },
  {
    icon: <FaTruck />,
    titulo: "frota",
  },
  {
    icon: <GiReceiveMoney />,
    titulo: "financiamento",
  },
  {
    icon: <FaPeopleGroup />,
    titulo: "consórcio",
  },
  {
    icon: <FaTooth />,
    titulo: "odontológico",
  },
  {
    icon: <TbPigMoney />,
    titulo: "previdência privada",
  },
  {
    icon: <AiOutlineLaptop />,
    titulo: "portáveis",
  },
  {
    icon: <FaMoneyBillTransfer />,
    titulo: "fiança",
  },
  {
    icon: <HiOutlineBuildingOffice2 />,
    titulo: "condomínio",
  },
  {
    icon: <MdForklift />,
    titulo: "equipamentos",
  },
  {
    icon: <GiPayMoney />,
    titulo: "capital de giro",
  },
];

export default function SeguradoraOptions() {
  return (
    <div className="flex flex-col justify-center items-center bg-base-tertiary p-6 lg:p-10">
      <div className="lg:w-8/12">
        <div className=" flex flex-col justify-center items-center">
          <h4 className="font-belleza text-2xl lg:text-3xl text-base-base">
            Trabalhamos com todos os tipos de seguros, confira outras formas
            <b> que também podemos ajudar:</b>
          </h4>
          <div className="grid grid-cols-2 lg:grid-cols-6 grid-rows-2 gap-4 p-8">
            {segurosList.map((seguro, index) => (
              <SeguroIcon key={index} seguro={seguro} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
